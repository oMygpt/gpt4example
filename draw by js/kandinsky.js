const canvas = document.getElementById("kandinskyCanvas");
const ctx = canvas.getContext("2d");

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.7)`;
}

function randomShape() {
  const shapes = ["circle", "rectangle", "triangle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

function drawRandomShape() {
  const shape = randomShape();
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const width = 50 + Math.random() * 150;
  const height = 50 + Math.random() * 150;
  ctx.fillStyle = randomColor();

  switch (shape) {
    case "circle":
      const radius = width / 2;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      break;
    case "rectangle":
      ctx.fillRect(x, y, width, height);
      break;
    case "triangle":
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + width / 2, y - height);
      ctx.lineTo(x + width, y);
      ctx.closePath();
      ctx.fill();
      break;
  }
}

function generateKandinskyStyleImage() {
  for (let i = 0; i < 50; i++) {
    drawRandomShape();
  }
}

generateKandinskyStyleImage();
