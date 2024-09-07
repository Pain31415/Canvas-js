const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 100;
const canvasHeight = 80;
const margin = 5;
const colors = ['#1565C0', '#DB4437', '#F4B400', '#0F9D58', '#6A5ACD'];
const percentages = [100, 80, 75, 70, 65];
const labels = ['Total', 'Verified', 'Processed', 'Shipped', 'Delivered'];

function drawLevel(y, height, color, label, percentage) {
    const topWidth = canvasWidth - 2 * margin;
    const bottomWidth = topWidth * (height / (canvasHeight - 2 * margin));
    const xOffset = (topWidth - bottomWidth) / 2;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(margin + xOffset, y);
    ctx.lineTo(canvasWidth - margin - xOffset, y);
    ctx.lineTo(canvasWidth - margin, y + height);
    ctx.lineTo(margin, y + height);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.font = '6px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${label} ${percentage}%`, canvasWidth / 2, y + height / 2);
}

let currentY = margin;
percentages.forEach((percentage, index) => {
    const levelHeight = (canvasHeight - margin * 2) * (percentage / 100);
    drawLevel(currentY, levelHeight, colors[index], labels[index], percentage);
    currentY += levelHeight;
});
