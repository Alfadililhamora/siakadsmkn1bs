function login() {
  document.getElementById("msg").innerText = "Login berhasil (demo)";
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const offset = 90; // tinggi navbar
    const targetPosition = target.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});


// fungsi animasi fade untuk kontak
function animateContact() {
  const items = document.querySelectorAll(".contact-card p");

  // reset
  items.forEach(item => {
    item.classList.remove("show");
  });

  // jeda biar reset kebaca
  setTimeout(() => {
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 300); // ⬅️ kecepatan animasi
    });
  }, 200);
}

// trigger saat klik navbar kontak
document.querySelectorAll('a[href="#kontak"]').forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      animateContact();
    }, 600); // nunggu scroll smooth
  });
});

// trigger saat scroll manual
let contactAnimated = false;

window.addEventListener("scroll", () => {
  const section = document.getElementById("kontak");
  if (!section) return;

  const top = section.getBoundingClientRect().top;
  const trigger = window.innerHeight - 150;

  if (top < trigger && !contactAnimated) {
    animateContact();
    contactAnimated = true;
  }
});

// Inject CSS (sekali saja)
const style = document.createElement("style");
style.innerHTML = `
  .contact-card p {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .contact-card p.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
