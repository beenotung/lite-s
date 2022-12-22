import def, { S } from './core.mjs'

console.assert(def == S)
console.assert(typeof S == 'function')
console.assert(S.name == 'create')
