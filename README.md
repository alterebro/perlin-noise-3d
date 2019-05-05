# perlin-noise-3d

3D Perlin Noise as JavasScript module adapted from the original algorithm implemented by **Ken Perlin** on [mrl.nyu.edu/~perlin/noise](https://mrl.nyu.edu/~perlin/noise/) from the [SIGGRAPH 2002 paper](http://mrl.nyu.edu/~perlin/paper445.pdf).

This is based on the previous adapting done by **Rune Madsen** on [rune.noise.js](https://github.com/runemadsen/rune.noise.js), which was an adaptation from [P5.js](https://github.com/processing/p5.js/blob/master/src/math/noise.js) done by **Daniel Shiffman**, which was an adaptation from [Processing / PApplet.java](https://github.com/processing/processing/blob/master/core/src/processing/core/PApplet.java) done by **Ben Fry**, which was an adaptation contributed by **Karsten Schmidt** aka **toxi** adapted from the german demo group **farbrausch** code as it was used in their demo *"art"* (~~http://www.farb-rausch.de/fr010src.zip~~, *dead link!*). — **Props to all of them!**


## Install

Include the minified file

```html
<script src="path/to/module/dist/perlin-noise-3d.min.js"></script>
```

## Usage

Create an instance then you can get `x`, `y` and `z` values.

```javascript
const noise = new perlinNoise3d();
      noise.get(x, y, z);
```

Plant a seed with `noiseSeed`. *i.e:*

```javascript
      noise.noiseSeed(Math.E);
```



### — Example #01 : `linear` x and `noised y`

```javascript
const noise = new perlinNoise3d();
let noiseStep = 0;

for(let x = 0; x < 50; x++ ) {
	let y = noise.get(noiseStep) * 100;
	console.log(x, Math.floor(y));
	noiseStep += 0.1;
}
```

### — Example #02 : plotting a 2D square graph using a seed

```javascript
let n = new perlinNoise3d();
    n.noiseSeed(Math.PI);

let size = 10;
let output = [];
for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        output.push({ x:x, y:y, value: n.get(x/10, y/10)});
    }
}
console.table(output);
```


## API

### `perlinNoise3d`

Returns an `object`.<br />You can create your instance as follows: `let noise = new perlinNoise3d;`

### `noise.get(x, y, z)`

Returns a `float` : `x`, `y`, `z` are the coordinates where you want to get the value. Both second and third parameter are optional.

### `noise.noiseSeed(seed)`

Set a seed value (`float`) to get different noise depending on the noise value.