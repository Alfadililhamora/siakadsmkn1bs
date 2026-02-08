// assets/js/auth.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const dataAlamat = {
        user: "Alfadil ilhamora",
        pass: "alfadil123"
    };

    if (user === dataAlamat.user && pass === dataAlamat.pass) {
        alert("Login Berhasil! Selamat datang, " + user);
        sessionStorage.setItem("statusLogin", "aktif");
        window.location.href = "siswa.html";
    } else {
        alert("NIS/Username atau Password salah!");
    }
});