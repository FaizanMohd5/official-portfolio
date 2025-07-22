function openModal(card) {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('modal-img');
  const imgSrc = card.querySelector('img').src;
  modalImg.src = imgSrc;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('cert-modal').style.display = 'none';
}

function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");

  const toggle = document.querySelector(".menu-toggle");
  toggle.classList.toggle("open");
}


const roles = ["Full-Stack Developer", "Backend Specialist", "Tech Blogger", "Programming Trainer"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const element = document.getElementById("typed-text");
  const current = roles[i];

  if (!isDeleting) {
    element.textContent = current.substring(0, j + 1);
    j++;
    if (j === current.length) {
      isDeleting = true;
      setTimeout(type, 1000); // pause before deleting
      return;
    }
  } else {
    element.textContent = current.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 120);
}

type();

document.querySelectorAll(".slider-container").forEach((container) => {
  const slides = container.querySelectorAll(".slide");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 2000); 
});

