//乞丐版
// const deepClone = (target) => {
//   return JSON.parse(JSON.stringify(target))
// }

//究极简易版
// const deepClone = (target) => {
//   if (typeof target === 'object') {
//     let cloneTarget = {}
//     for (let i in target) {
//       cloneTarget[i] = deepClone(target[i])
//     }
//     return cloneTarget
//   } else {
//     return target
//   }
// }

//lodash相对完整版
//可继续遍历的类型
const setTag = '[object Set]'
const mapTag = '[object Map]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const argsTag = '[object Arguments]'
//不可继续遍历的类型
const numberTag = '[object Number]'
const stringTag = '[object String]'
const booleanTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const symbolTag = '[object Symbol]'
const regTag = '[object RegExp]'
// const funcTag = '[object Function]'

const deepTag = [setTag, mapTag, arrayTag, objectTag, argsTag]

const isObject = (target) => {
  let type = typeof target
  return target !== null && type === 'object'
}

const getType = (target) => {
  return Object.prototype.toString.call(target)
}

const getInit = (target) => {
  const Ctor = target.constructor
  return new Ctor()
}

const cloneSymbol = (target) => {
  return Object(Symbol.prototype.valueOf.call(target))
}

const cloneRegExp = (target) => {
  const RegFlags = /\w*$/
  const cloneTarget = new RegExp(target.source, RegFlags.exec(target))
  cloneTarget.lastIndex = target.lastIndex
  return cloneTarget
}

const cloneOtherType = (target, type) => {
  const Ctor = target.constructor
  switch (type) {
    case numberTag:
    case stringTag:
    case booleanTag:
    case errorTag:
    case dateTag:
      return new Ctor(target)
    case symbolTag:
      return cloneSymbol(target)
    case regTag:
      return cloneRegExp(target)
    default:
      return null
  }
}

const forEach = (array, iteratee) => {
  const length = array.length
  for (let i = 0; i < length; i++) {
    iteratee(array[i], i)
  }
}
const deepClone = (target, map = new WeakMap()) => {
  if (!isObject(target)) {
    return target
  }

  //获取类型并初始化
  //把不可遍历的处理return出去
  //留下来的只有可遍历类型
  const type = getType(target)
  let cloneTarget
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target)
  } else {
    return cloneOtherType(target, type)
  }

  //处理循环引用
  if (map.has(target)) {
    return map.get(target)
  }
  map.set(target, cloneTarget)

  //处理set和map
  if (type === mapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, deepClone(value))
    })
    return cloneTarget
  }

  if (type === setTag) {
    target.forEach((value) => {
      cloneTarget.add(deepClone(value))
    })
    return cloneTarget
  }

  //处理对象和数组
  let keys = type === arrayTag ? null : Object.keys(target)
  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value
    }
    cloneTarget[key] = deepClone(target[key], map)
  })
  return cloneTarget
}
