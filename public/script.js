const track = document.querySelector('.header');
const content = document.querySelector('.inter-header');

const copy = content.cloneNode(true);
track.appendChild(copy);

let position = 50;
let speed = 2.5;
let targetSpeed = 2.5;

const header = document.querySelector('.header-container');
header.addEventListener('mouseenter', () => targetSpeed = 0.75);
header.addEventListener('mouseleave', () => targetSpeed = 2.5);

function animate() {
  speed += (targetSpeed - speed) * 0.05;

  position -= speed;

  const contentWidth = content.offsetWidth;

  if (position <= -contentWidth) {
    position += contentWidth;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();

const nav = document.querySelector("nav");
    const stickyOffset = nav.offsetTop;

    window.addEventListener("scroll", function () {
      if (window.pageYOffset >= stickyOffset) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });