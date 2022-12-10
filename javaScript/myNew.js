function fn(name, age) {
  this.name = name
  this.age = age
  // return {
  //   who: 'im returnObj',
  // }
}

fn.prototype.showName = function () {
  console.log(`My name is ${this.name}`)
}

function myNew(fn, ...args) {
  let newObj = Object.create(fn.prototype)
  let res = fn.apply(newObj, args)
  return typeof res === 'object' ? res : newObj
}

let obj1 = myNew(fn, 'Aka', 20)
let obj2 = new fn('Akee', 22)
console.log(obj1)
console.log(obj2)
