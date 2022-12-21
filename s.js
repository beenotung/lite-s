S = (function () {
  let stack = []
  function getCurrentConext() {
    let context = stack[stack.length - 1]
    return context
  }
  function create(value) {
    let listeners = new Set()
    function read() {
      let context = getCurrentConext()
      if (context) {
        listeners.add(context)
      }
      return value
    }
    function write(newVal) {
      value = newVal
      listeners.forEach(fn => fn())
    }
    return {
      get value() {
        return read()
      },
      set value(val) {
        return write(val)
      },
      toString() {
        return read()
      },
      valueOf() {
        return read()
      },
    }
  }
  function run(context) {
    try {
      stack.push(context)
      context()
    } finally {
      stack.pop()
    }
  }
  function map(fn) {
    let s = create()
    run(() => (s.value = fn()))
    return s
  }
  return Object.assign(create, { run, map })
})()
