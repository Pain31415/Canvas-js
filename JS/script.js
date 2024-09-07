const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(150, 75, 40, 0, Math.PI * 2);
ctx.fillStyle = '#ffcc99';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

// Тіло (прямокутник)
ctx.beginPath();
ctx.rect(130, 115, 40, 70);
ctx.fillStyle = '#00f';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(120, 115);
ctx.lineTo(130, 115);
ctx.moveTo(170, 115);
ctx.lineTo(180, 115);
ctx.strokeStyle = '#00f';
ctx.lineWidth = 10;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(135, 185);
ctx.lineTo(135, 240);
ctx.moveTo(165, 185);
ctx.lineTo(165, 240);
ctx.strokeStyle = '#0a0';
ctx.lineWidth = 10;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(140, 65, 5, 0, Math.PI * 2);
ctx.arc(160, 65, 5, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 85, 15, 0, Math.PI);
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();
