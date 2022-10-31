//乞丐版
// const deepClone = (target) => {
//   return JSON.parse(JSON.stringify(target))
// }

//究极简易初版
const deepClone = (target) => {
  if (typeof target === 'object') {
    const cloneTarget = {}
    for (let i in target) {
      cloneTarget[i] = deepClone(target[i])
    }
    return cloneTarget
  } else {
    return target
  }
}
