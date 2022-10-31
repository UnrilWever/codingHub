const shallowClone = (target) => {
  let cloneTarget = {}
  for (let i in target) {
    cloneTarget[i] = target[i]
  }
  return cloneTarget
}
