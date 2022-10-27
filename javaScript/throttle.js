// 时间戳方式,技能cd效果
const throttle = (func, delay = 50) => {
  let pre = 0
  return function (...args) {
    let now = new Date()
    if (now - pre > delay) {
      pre = now
      func.apply(this, args)
    }
  }
}
