const canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
// ctx.fillRect(100, 0, 100, 100);
// ctx.fillStyle = 'rgba(0, 0, 255, 0.8)';
// ctx.fillRect(300, 200, 100, 100);
// ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
// ctx.fillRect(500, 100, 100, 100);

// // Line
// ctx.beginPath(); // 하위 경로 목록을 비워 새 경로를 시작합니다.
// ctx.moveTo(50, 300); // 시작 포인터위 위치를 변경합니다.
// ctx.lineTo(300, 100); // x-axis, y-axis 좌표로 라인 경로를 설정합니다.
// ctx.lineTo(600, 300); // x-axis, y-axis 좌표로 라인 경로를 설정합니다.
// ctx.strokeStyle = '#fa34a3';
// ctx.stroke(); // 저장된 경로의 선을 화면에 draw 합니다.

// // Arc / Circle
// // ctx.beginPath(); // 하위 경로 목록을 비워 새 경로를 시작합니다.
// // ctx.arc(300, 400, 30, 0, Math.PI * 2, false); // 원의 위치와 지름, 각도, 방향 설정
// // ctx.strokeStyle = '#3f5789';
// // ctx.stroke();

// for (let i = 0; i < 10; i++) {
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;
//   ctx.beginPath(); // 하위 경로 목록을 비워 새 경로를 시작합니다.
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false); // 원의 위치와 지름, 각도, 방향 설정
//   ctx.strokeStyle = '#3f5789';
//   ctx.stroke(); // 저장된 경로의 선을 화면에 draw 합니다.
// }

const mouse = {
  x: undefined,
  y: undefined,
};

const maxRadius = 40;
// const minRadius = 2;
const colorArr = [
  '#FFAEBC',
  '#A0E7E5',
  '#B4F8C8',
  '#FBE7C6',
  '#F9F1F0',
  '#FADCD9',
  '#F8AFA6',
  '#F79489',
];

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.minRadius = radius;
  this.dx = dx;
  this.dy = dy;
  this.color = colorArr[Math.floor(Math.random() * colorArr.length)];

  this.draw = function () {
    ctx.beginPath(); // 하위 경로 목록을 비워 새 경로를 시작합니다.
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // 원의 위치와 지름, 각도, 방향 설정
    ctx.fillStyle = this.color;
    ctx.fill();
  };
  this.update = function () {
    if (this.x + radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + radius > innerHeight || this.y - radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

let circleArr = [];

function init() {
  circleArr = [];
  for (let i = 0; i < 800; i++) {
    const radius = Math.random() * 3 + 1;
    const x = Math.random() * (innerWidth - radius * 2) + radius;
    const y = Math.random() * (innerHeight - radius * 2) + radius;
    const dx = Math.random() - 0.5;
    const dy = Math.random() - 0.5;

    circleArr.push(new Circle(x, y, dx, dy, radius));
  }
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // 캔버스를 초기화 합니다.

  for (const circle of circleArr) {
    circle.update();
  }
}

init();
