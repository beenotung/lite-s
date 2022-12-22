type Context = () => void

let stack: Context[] = []

function getCurrentConext(): Context | undefined {
  let context = stack[stack.length - 1]
  return context
}

function create<T>(value: T) {
  let listeners = new Set<() => void>()
  function read(): T {
    let context = getCurrentConext()
    if (context) {
      listeners.add(context)
    }
    return value
  }
  function write(newVal: T) {
    value = newVal
    listeners.forEach(fn => fn())
  }
  return {
    get value(): T {
      return read()
    },
    set value(val: T) {
      write(val)
    },
    toString() {
      return read()
    },
    valueOf() {
      return read()
    },
  }
}

function run<T>(context: () => T) {
  try {
    stack.push(context)
    return context()
  } finally {
    stack.pop()
  }
}

function map<T>(fn: () => T) {
  let s = create<T>(void 0 as any)
  run(() => (s.value = fn()))
  return s
}

export let S = Object.assign(create, { run, map })

export default S
