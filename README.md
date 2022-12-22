# lite-s

A simple state manage library with pull-push based design.

[![npm Package Version](https://img.shields.io/npm/v/lite-s)](https://www.npmjs.com/package/lite-s)
[![Minified Package Size](https://img.shields.io/bundlephobia/min/lite-s)](https://bundlephobia.com/package/lite-s)
[![Minified and Gzipped Package Size](https://img.shields.io/bundlephobia/minzip/lite-s)](https://bundlephobia.com/package/lite-s)

Inspired from [S.js](https://github.com/adamhaile/S) and [a talk about SolidJS](https://www.youtube.com/watch?v=qB5jK-KeXOs)

## Installation

### Option 1: Import npm package

Install from npm:

```bash
# install with npm
npm i lite-s
# or pnpm
pnpm i lite-s
# or yarn
yarn add lite-s
```

Import as typescript package / esm package:

```typescript
// using named import
import { S } from 'lite-s'
// or using default import
import S from 'lite-s'
```

Import as commonjs package

```javascript
let { S } = require('lite-s')
```

### Option 2: Import esm package over CDN

```html
<script type="module">
  import { S } from 'https://cdn.jsdelivr.net/npm/lite-s@1.0.0/core.mjs'
</script>
```

### Option 3: Import iife library over CDN

```html
<script src="https://cdn.jsdelivr.net/npm/lite-s@1.0.0/s.js"></script>
<script>
  let state = S(1)
</script>
```

## Usage Example

```javascript
let a = S(1)
let b = S(2)
let c = () => a.value + b.value
let text = S.map(() => `${a} + ${b} = ${c()}`)

let dom = {
  a: document.createElement('input'),
  b: document.createElement('input'),
  c: document.createTextNode(text),
}

dom.a.type = 'number'
dom.a.value = a.value
dom.a.addEventListener('input', e => (a.value = e.target.valueAsNumber))

dom.b.type = 'number'
dom.b.value = b.value
dom.b.addEventListener('input', e => (b.value = e.target.valueAsNumber))

S.run(() => (dom.c.textContent = text))

document.body.appendChild(dom.a)
document.body.appendChild(dom.b)
document.body.appendChild(dom.c)
```

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
