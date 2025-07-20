const socket = io();
socket.on("connect", () => {
    console.log(socket.connected); // true
    console.log(socket.id); // "G5p5..."
    socket.emit("UpdateLoket", "");
});
socket.on('loket', (msg, nomor_antri) => {
    console.log(msg + " " + nomor_antri);
    try {
        document.getElementById(msg).innerHTML = nomor_antri;
    } catch (error) {
    }
});
socket.on('nomor_antri', (msg) => {

    document.getElementById("total").innerHTML = msg;
});
socket.on('sisa', (msg) => {
    console.log('sisa: ' + msg);
    document.getElementById("sisa").innerHTML = msg;
});
let btnNext = document.getElementById('next');
let btnUlang = document.getElementById('ulang');

function next(id) {

    btnUlang.disabled = true;
    btnNext.disabled = true;
    socket.emit("next_antrian", id);
}
function ulangPangilan(id) {
    console.log("pangilan");
    btnUlang.disabled = true;
    btnNext.disabled = true;
    console.log(id);
    socket.emit("suara", id);
}
socket.on('pangil', (no, loket) => {
    if (loket == level) {
        btnUlang.disabled = false;
        btnNext.disabled = false;
    }
});
socket.on('panggil_SMART', (no, loket) => {
    if (loket == level) {
        btnUlangSMART.disabled = false;
        btnNextSMART.disabled = false;
    }
});

socket.on('antiranHabis', (msg, loket) => {
    if (loket == level) {
        alert(msg);
        btnUlangSMART.disabled = false;
        btnNextSMART.disabled = false;
        btnUlang.disabled = false;
        btnNext.disabled = false;
    }
});

// SMART
socket.on('loket_SMART', (msg, nomor_antri) => {
    document.getElementById(msg).innerHTML = `<span style='color: red;'>${nomor_antri} SMART</span> `;
});
socket.on('nomor_antri_SMART', (msg) => {
    console.log("Nomor antri yang tercetak : " + msg);
    document.getElementById("totalSMART").innerHTML = msg;
});
socket.on('sisa_SMART', (msg) => {
    console.log('sisa SMART: ' + msg);
    document.getElementById("sisaSMART").innerHTML = msg;
});
let btnNextSMART = document.getElementById('nextSMART');
let btnUlangSMART = document.getElementById('ulangSMART');

function nextSMART(id) {
    console.log('next SMART Loket ' + id);
    btnUlangSMART.disabled = true;
    btnNextSMART.disabled = true;
    socket.emit("next_antrian_SMART", id);
    // let nomor = document.getElementById(id).innerHTML;
    // let suara = [Math.floor(nomor) + 1, id];
    // console.log(suara);
    // socket.emit("suara", suara);
}
function ulangPangilanSMART(id) {
    btnUlangSMART.disabled = true;
    btnNextSMART.disabled = true;
    socket.emit("suara_SMART", id);
}
function resetLoket() {
    socket.emit("reset_loket");
}
// socket.on('pangil', (no, loket) => {
//     if (loket == level) {
//         btnUlang.disabled = false;
//         btnNext.disabled = false;
//     }
// });
