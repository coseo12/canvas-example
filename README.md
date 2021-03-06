# Canvas Example

Canvas Tutorial for Beginners

- [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

## TODO

- [x] EP1 - Default Settings
- [x] EP2 - Drawing on the canvas
- [x] EP3 - Animating the canvas
- [x] EP4 - Interacting with the canvas

## π Rectangle

- [fillRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) -
  μμμ  (x, y)μ΄κ³  ν¬κΈ°κ° μ λλΉκ° λμ΄λ‘ μ§μ λμ΄ μ§λ μ±μμ§ μ¬κ°νμ κ·Έλ¦½λλ€. μ±μ°κΈ° μ€νμΌμ νμ¬ fillStyle μμ±μ μν΄ κ²°μ λ©λλ€.

`Syntax`

```js
void ctx.fillRect(x, y, width, height);
```

`Parameters`

- x: x-axis μ’ν
- y: y-axis μ’ν
- width: μ¬κ°ν λμ΄
- height: μ¬κ°ν λμ΄

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

## π Line

- [beginPath](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath) - νμ κ²½λ‘ λͺ©λ‘μ λΉμ μ κ²½λ‘λ₯Ό μμν©λλ€.

- [moveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) - μμ ν¬μΈν° μμΉλ₯Ό λ³κ²½ν©λλ€.

- [lintTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) - x-axis, y-axis μ’νλ‘ λΌμΈ κ²½λ‘ λͺ©λ‘μ μ€μ ν©λλ€.

- [stroke](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) - κ²½λ‘ λͺ©λ‘μ λΌμΈμΌλ‘ μ°κ²°ν©λλ€. λΌμΈ μμμ strokeStyle μμ±μ μν΄ κ²°μ λ©λλ€.

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

## π Arc / Circle

`Syntax`

```js
void ctx.arc(x, y, r, startAngle, endAngle, drawCounterClockwise);
```

`Parameters`

- x: x-axis μ’ν
- y: y-axis μ’ν
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

## π CanvasRenderingContext2D.clearRect()

μΊλ²μ€λ₯Ό μ΄κΈ°νν©λλ€

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

## π Window.requestAnimationFrame()

λΈλΌμ°μ μ μ λλ©μ΄μμ μννκ³  μΆλ€κ³  μλ¦¬κ³  λΈλΌμ°μ κ° λ€μ λ€μ κ·Έλ¦¬κΈ° μ μ μ λλ©μ΄μμ μλ°μ΄νΈνκΈ° μν΄ μ§μ λ ν¨μλ₯Ό νΈμΆνλλ‘ μμ²­ν©λλ€. μ΄λ©μλλ λ€μ κ·Έλ¦¬κΈ° μ μ μΈμλ‘ μ½λ°±μ μ¬μ©ν©λλ€.

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
