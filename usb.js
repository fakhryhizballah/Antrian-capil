require('dotenv').config();
const escpos = require('escpos');
const e = require('express');
escpos.USB = require('escpos-usb');
escpos.Network = require('escpos-network');


const cetakAntrian = function (nomor_antri, keterangan) {
    let date = new Date();
    if (keterangan == null) {
        keterangan = "";
    }
    let date_now = date.getDate() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    try {
        const devices = escpos.USB.findPrinter();
        console.log(devices)
        let device = [];
        if (devices.length === 0) {
            console.log('Printer tidak ditemukan');
            console.log(process.env.PRINTER_IP);
            device = new escpos.Network(process.env.PRINTER_IP);

        } else {
            console.log('Printer ditemukan');
            device = new escpos.USB();
        }
        // const options = { encoding: "GB18030" /* default */ }
        const options = { encoding: "EUC-KR" /* default */ }
        // const device = new escpos.USB();   
        // console.log(device)
        const printer = new escpos.Printer(device, options);
        device.open(function () {
            printer
                .align('ct')
                .font('b')           // font kecil, cocok untuk 58mm
                .style('B')
                .size(1, 1)
                .text('DUKCAPIL')
                .text('Kota Singkawang')
                .text('------------------------')

                .style('NORMAL')
                .text('Nomor Antrian')
                .size(3, 2)          // ukuran sedang agar muat
                .text(nomor_antri)  // misal: A007
                .size(1, 1)
                .text(keterangan)   // misal: Layanan KTP

                .text('------------------------')
                .font('b')
                .size(1, 1)
                .text(`Tgl : ${date_now}`)  // misal: 20-07-2025
                .text(`Jam : ${time}`)      // misal: 09:13

                .text('')
                .text('* Harap Tunggu Panggilan *')
                .text('* Ambil Ulang Jika Terlewat *')
                .text('')
                .text('   ~ Semoga Sehat Selalu ~')
                .text('')

                .cut()
                .close();
        });

    } catch (error) {
        console.log(error);
        return false;
    }
    return true;

}
cetakAntrian('A001');
module.exports = {
    cetakAntrian
}