# Canvas Example

Canvas Tutorial for Beginners

- [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

## TODO

- [x] EP1 - Default Settings, fillRect()
- [ ] EP2 -
- [ ] EP3 -
- [ ] EP4 -

## 📔 CanvasRenderingContext2D.fillRect()

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)

`Syntax`

```js
void ctx.fillRect(x, y, width, height);
```

The fillRect() method draws a filled rectangle whose starting point is at (x, y) and whose size is specified by width and height. The fill style is determined by the current fillStyle attribute.

`Parameters`

- x: x-axis position
- y: y-axis position
- width: The rectangle's width
- height: The rectangle's height

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
