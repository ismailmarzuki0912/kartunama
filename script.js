const canvas = document.createElement("canvas");
canvas.width = auto;
canvas.height = auto;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const text = "Ismail Marzuki";
const name = "Ismail Marzuki";

ctx.font = "bold 48px Arial";
ctx.strokeStyle = "#ffffff"; // Warna garis grafiti
ctx.lineWidth = 8; // Lebih tebal
ctx.textBaseline = "middle";
ctx.textAlign = "center";

ctx.strokeText(text, canvas.width / 4, canvas.height / 2);

ctx.font = "bold 18px Arial";

ctx.strokeText(name, canvas.width * 0.75, canvas.height / 2);

// Menerapkan animasi berkedip pada tulisan grafiti
let blinking = true;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (blinking) {
    ctx.strokeText(text, canvas.width / 4, canvas.height / 2);
    ctx.strokeText(name, canvas.width * 0.75, canvas.height / 2);
    blinking = false;
  } else {
    blinking = true;
  }

  requestAnimationFrame(animate);
}

animate();
