const socket = io();
let counter = 1;
socket.on("connect", () => {
    console.log(socket.connected); // true
    console.log(socket.id); // "G5p5..."
    socket.emit("UpdateLoket", "");
});
socket.on('sisa', (msg) => {
    console.log('sisa: ' + msg);
    document.getElementById("sisa").innerHTML = msg;
});
socket.on('sisa_SMART', (msg) => {
    console.log('sisa SMART: ' + msg);
    document.getElementById("sisa_SMART").innerHTML = msg;
});
socket.on('nomor_antri', (msg) => {
    console.log('nomor antri: ' + msg);
    document.getElementById("antrian").innerHTML = Math.floor(msg + 1);
});
socket.on('nomor_antri_SMART', (msg) => {
    console.log('nomor antri SMART: ' + msg);
    document.getElementById("antrian_SMART").innerHTML = Math.floor(msg + 1);
});
let btnCetak = document.getElementById("btnCetak");
function cetak() {
    console.log('cetak');
    btnCetak.disabled = true;
    socket.emit("cetak_antri", "cetak tiket");
}
function cetak_SMART() {
    console.log('cetak SMART');
    btnCetak.disabled = true;
    socket.emit("cetak_antri_SMART", "cetak tiket");
}
socket.on('btnCetak', (msg) => {
    console.log('nomor antri: ' + msg);
    btnCetak.disabled = false;
});

