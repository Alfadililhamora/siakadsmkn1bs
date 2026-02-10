document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Data login contoh
    const dataAlamat = {
        user: "Alfadil ilhamora",
        pass: "alfadil123"
    };

    if (user === dataAlamat.user && pass === dataAlamat.pass) {
        // 1. Simpan status login dulu
        sessionStorage.setItem("statusLogin", "aktif");
        
        // 2. Panggil modal sukses (JANGAN langsung window.location di sini)
        showModal("Berhasil!", "Selamat datang kembali, " + user, true);
    } else {
        // 3. Panggil modal gagal
        showModal("Login Gagal", "NIS atau Password salah. Silakan coba lagi.", false);
    }
});

// Fungsi menampilkan modal
function showModal(title, message, isSuccess) {
    const modal = document.getElementById('customAlert');
    const titleTag = document.getElementById('modalTitle');
    const messageTag = document.getElementById('modalMessage');
    const icon = document.querySelector('.modal-icon');
    const btn = document.querySelector('.modal-btn');

    // Isi konten modal
    titleTag.innerText = title;
    messageTag.innerText = message;

    if (isSuccess) {
        icon.innerText = "✅";
        titleTag.style.color = "#2e7d32"; // Hijau
        btn.innerText = "Masuk ke Dashboard";
        btn.style.backgroundColor = "#2e7d32";
        
        // KUNCI PERBAIKAN: Pindah halaman hanya saat tombol "Masuk" diklik
        btn.onclick = function() {
            window.location.href = "siswa.html";
        };
    } else {
        icon.innerText = "⚠️";
        titleTag.style.color = "#d32f2f"; // Merah
        btn.innerText = "Coba Lagi";
        btn.style.backgroundColor = "#0a1f44";
        
        // Tutup modal saja kalau gagal
        btn.onclick = closeModal;
    }

    // Tampilkan modal
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('customAlert').style.display = 'none';
}