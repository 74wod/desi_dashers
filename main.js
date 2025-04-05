const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let runnerX = canvas.width / 2;
let runnerY = canvas.height - 150;
let velocityY = 0;
let gravity = 1;

function drawRunner() {
  ctx.fillStyle = '#ff5500'; // placeholder for the character
  ctx.fillRect(runnerX - 25, runnerY - 50, 50, 50);
}

function drawTrack() {
  ctx.fillStyle = '#444';
  ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  velocityY += gravity;
  runnerY += velocityY;

  if (runnerY > canvas.height - 100) {
    runnerY = canvas.height - 100;
    velocityY = 0;
  }

  drawTrack();
  drawRunner();

  requestAnimationFrame(updateGame);
}

document.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'ArrowUp') {
    if (runnerY >= canvas.height - 100) {
      velocityY = -20;
    }
  }
});

updateGame();
