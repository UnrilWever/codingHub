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

// 定时器方式,技能释放读条效果
const throttle_delay = (func, delay = 50) => {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
