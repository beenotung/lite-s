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
