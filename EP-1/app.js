const canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.fillRect(100, 0, 100, 100); // x, y 좌표를 기준으로 with, height 을 가진 사각형을 그립니다.
ctx.fillRect(300, 200, 100, 100); // x, y 좌표를 기준으로 with, height 을 가진 사각형을 그립니다.
ctx.fillRect(500, 100, 100, 100); // x, y 좌표를 기준으로 with, height 을 가진 사각형을 그립니다.
