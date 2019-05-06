<p><img src="perlin-noise.jpg" alt="Perlin Noise" width="300" /></p>

# perlin-noise-3d

[![NPM Version](https://img.shields.io/npm/v/perlin-noise-3d.svg)](https://www.npmjs.com/package/perlin-noise-3d) [![gzip File Size](https://img.badgesize.io/https://unpkg.com/perlin-noise-3d/dist/perlin-noise-3d.min.js?compression=gzip)](https://unpkg.com/perlin-noise-3d/dist/perlin-noise-3d.min.js)

3D [Perlin Noise](https://en.wikipedia.org/wiki/Perlin_noise) as JavasScript module adapted from the original algorithm implemented by **Ken Perlin** on [mrl.nyu.edu/~perlin/noise](https://mrl.nyu.edu/~perlin/noise/) from the [SIGGRAPH 2002 paper](http://mrl.nyu.edu/~perlin/paper445.pdf).

This is based on the previous adapting done by **Rune Madsen** on [rune.noise.js](https://github.com/runemadsen/rune.noise.js), which was an adaptation from [P5.js](https://github.com/processing/p5.js/blob/master/src/math/noise.js) done by **Daniel Shiffman**, which was an adaptation from [Processing / PApplet.java](https://github.com/processing/processing/blob/master/core/src/processing/core/PApplet.java) done by **Ben Fry**, which was an adaptation contributed by **Karsten Schmidt** aka **toxi** adapted from the code created by the german demoscene group **farbrausch** as it was used on their demo "*art*" (~~http://www.farb-rausch.de/fr010src.zip~~, *dead link!*). — **Props to all of them adaptors!**

---

## Install

```sh
$ npm install perlin-noise-3d
```

The module will be available in three files:

| Use           | Location      |
| ------------- | ------------- |
| **ES Module** | `dist/perlin-noise-3d.mjs`      |
| **CommonJS**  | `dist/perlin-noise-3d.js`       |
| **UMD**       | `dist/perlin-noise-3d.min.js`   |

Include `perlin-noise-3d`:

```javascript
// ES6
import perlinNoise3d from 'perlin-noise-3d'

// CJS
const perlinNoise3d = require('perlin-noise-3d');
```

Include the minified UMD file for the browser ( `dist/perlin-noise-3d.min.js` ) or you can add the script directly from [unpkg](https://unpkg.com/perlin-noise-3d).

```html
<script src="https://unpkg.com/perlin-noise-3d"></script>
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
