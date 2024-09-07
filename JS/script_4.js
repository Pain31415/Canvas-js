const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const width = 400;
const height = 400;
canvas.width = width;
canvas.height = height;

const letterSize = 100;
const centerX = width / 2;
const centerY = height / 2;

function drawLetterC(centerX, centerY, size) {
    const gradient = ctx.createLinearGradient(centerX - size / 2, centerY - size / 2, centerX + size / 2, centerY + size / 2);
    gradient.addColorStop(0, '#FF5722');
    gradient.addColorStop(0.5, '#FFC107');
    gradient.addColorStop(1, '#4CAF50');

    ctx.fillStyle = gradient;
    ctx.font = `${size}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('C', centerX, centerY);
}

function drawRay(centerX, centerY, length, angle, color) {
    const rayStartX = centerX + Math.cos(angle) * (letterSize / 2 + 10);
    const rayStartY = centerY + Math.sin(angle) * (letterSize / 2 + 10);

    ctx.beginPath();
    ctx.moveTo(rayStartX, rayStartY);
    ctx.lineTo(rayStartX + Math.cos(angle) * length, rayStartY + Math.sin(angle) * length);
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.stroke();
}

drawLetterC(centerX, centerY, letterSize);

// Параметри променів
const rayLength = 150;
const rayColors = ['#FF5722', '#FFC107', '#4CAF50', '#3F51B5', '#9C27B0', '#E91E63'];
const numRays = 12;
const angleStep = Math.PI * 2 / numRays;

for (let i = 0; i < numRays; i++) {
    const angle = i * angleStep;
    const rayColor = rayColors[i % rayColors.length];
    drawRay(centerX, centerY, rayLength, angle, rayColor);
}
