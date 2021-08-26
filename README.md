# Canvas Example

Canvas Tutorial for Beginners

- [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

## TODO

- [x] EP1 - Default Settings
- [x] EP2 - Drawing on the canvas
- [x] EP3 - Animating the canvas
- [ ] EP4 - Interacting with the canvas

## 📔 Rectangle

- [fillRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) -
  시작점 (x, y)이고 크기가 와 너비가 높이로 지정되어 지는 채워직 사각형을 그립니다. 채우기 스타일은 현재 fillStyle 속성에 의해 결정됩니다.

`Syntax`

```js
void ctx.fillRect(x, y, width, height);
```

`Parameters`

- x: x-axis 좌표
- y: y-axis 좌표
- width: 사각형 넓이
- height: 사각형 높이

`Examples`

```html
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(20, 10, 150, 100);
```

## 📔 Line

- [beginPath](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath) - 하위 경로 목록을 비워 새 경로를 시작합니다.

- [moveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) - 시작 포인터 위치를 변경합니다.

- [lintTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) - x-axis, y-axis 좌표로 라인 경로 목록을 설정합니다.

- [stroke](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) - 경로 목록을 라인으로 연결합니다. 라인 색상은 strokeStyle 속성에 의해 결정됩니다.

`Syntax`

```js
void ctx.beginPath();
void ctx.moveTo(x, y);
void ctx.lineTo(x, y);
void ctx.lineTo(x, y);
void ctx.stroke();
```

`Examples`

```html
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// First path
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// Second path
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();
```

## 📔 Arc / Circle

`Syntax`

```js
void ctx.arc(x, y, r, startAngle, endAngle, drawCounterClockwise);
```

`Parameters`

- x: x-axis 좌표
- y: y-axis 좌표
- r: The radius of the circle
- startAngle: The starting angle, in radians
- endAngle: The ending angle, in radians
- drawCounterClockwise: Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise

`Examples`

```html
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(300, 400, 30, 0, Math.PI * 2, false);
ctx.strokeStyle = '#3f5789';
ctx.stroke();
```

## 📔 CanvasRenderingContext2D.clearRect()

캔버스를 초기화합니다

`Syntax`

```js
void ctx.arc(x, y, width, height);
```

`Examples`

```html
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
```

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)

## 📔 Window.requestAnimationFrame()

브라우저에 애니메이션을 수행하고 싶다고 알리고 브라우저가 다음 다시 그리기 전에 애니메이션을 업데이트하기 위해 지정된 함수를 호출하도록 요청합니다. 이메서드는 다시 그리기 전에 인수로 콜백을 사용합니다.

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
