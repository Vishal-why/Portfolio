const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".site-nav");
const yearEl = document.getElementById("year");
const cursorRing = document.getElementById("cursorRing");
const cursorDot = document.getElementById("cursorDot");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

if (cursorDot && cursorRing && window.matchMedia("(pointer: fine)").matches) {
  let dotX = window.innerWidth / 2;
  let dotY = window.innerHeight / 2;
  let ringX = dotX;
  let ringY = dotY;
  let tx = dotX;
  let ty = dotY;

  const animateCursor = () => {
    dotX += (tx - dotX) * 0.32;
    dotY += (ty - dotY) * 0.32;
    ringX += (tx - ringX) * 0.14;
    ringY += (ty - ringY) * 0.14;

    cursorDot.style.left = `${dotX}px`;
    cursorDot.style.top = `${dotY}px`;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    requestAnimationFrame(animateCursor);
  };

  window.addEventListener("mousemove", (event) => {
    tx = event.clientX;
    ty = event.clientY;
    cursorDot.style.opacity = "1";
    cursorRing.style.opacity = "1";
  });

  window.addEventListener("mouseout", () => {
    cursorDot.style.opacity = "0";
    cursorRing.style.opacity = "0";
  });

  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursorRing.style.transform = "translate(-50%, -50%) scale(1.55)";
      cursorRing.style.borderColor = "#3be6c6";
      cursorDot.style.transform = "translate(-50%, -50%) scale(1.3)";
    });

    element.addEventListener("mouseleave", () => {
      cursorRing.style.transform = "translate(-50%, -50%) scale(1)";
      cursorRing.style.borderColor = "#9ca8ff99";
      cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });

  animateCursor();
}

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}
