const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 300;
const canvasHeight = 200;
const barWidth = 40;
const barSpacing = 20;
const barColors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
const barHeights = [50, 75, 100, 60, 80];

ctx.fillStyle = '#ecf0f1';
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

barHeights.forEach((height, index) => {
    const x = index * (barWidth + barSpacing) + barSpacing;
    const y = canvasHeight - height;

    const gradient = ctx.createLinearGradient(x, y, x, canvasHeight);
    gradient.addColorStop(0, barColors[index]);
    gradient.addColorStop(1, '#fff');

    ctx.fillStyle = gradient;
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;

    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    ctx.beginPath();
    ctx.rect(x, y, barWidth, height);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
});
