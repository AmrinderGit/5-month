// Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Play music after user interaction
document.getElementById("playMusicBtn").addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  music.play();
  this.style.display = 'none'; // hide button after click
});


let particles = [];
function randomColor() {
  const colors = ["#ff69b4", "#ff1493", "#e91e63", "#ffc0cb", "#ffb6c1"];
  return colors[Math.floor(Math.random() * colors.length)];
}
function createHeart(x, y) {
  return {
    x,
    y,
    size: Math.random() * 20 + 10,
    color: randomColor(),
    speed: Math.random() * 2 + 1,
    angle: Math.random() * Math.PI * 2
  };
}
function drawHeart(p) {
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
  ctx.bezierCurveTo(p.x - p.size / 2, p.y - p.size / 2, p.x - p.size, p.y + p.size / 3, p.x, p.y + p.size);
  ctx.bezierCurveTo(p.x + p.size, p.y + p.size / 3, p.x + p.size / 2, p.y - p.size / 2, p.x, p.y);
  ctx.fillStyle = p.color;
  ctx.fill();
}
function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.y += p.speed;
    p.x += Math.sin(p.angle);
    drawHeart(p);
  });
  particles = particles.filter((p) => p.y < canvas.height);
  requestAnimationFrame(updateParticles);
}
setInterval(() => {
  particles.push(createHeart(Math.random() * canvas.width, -20));
}, 200);
updateParticles();

// Reveal letter
document.getElementById("revealBtn").addEventListener("click", function () {
  document.getElementById("letter").classList.remove("hidden");
});

// Slideshow
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);
