//最简易版
function debounce(cb, delay) {
  let timer = 0
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      cb.apply(this, args)
    }, delay)
  }
}

//加上第一次触发立即执行的功能
// function debounce(fn, delay = 50, immediate) {
//   let timer = null
//   return function (...args) {
//     if (timer) clearTimeout(timer)

//     if (immediate && !timer) {
//       fn.apply(this, args)
//     }
//     timer = setTimeout(() => {
//       fn.apply(this, args)
//     }, delay)
//   }
// }

/**
 * 加强版 throttle
 * wait之前点多少次都会重启定时器，在wait之前一刻最后一次触发，那么会等到wait时间后再执行
 * 而如果在wait之后一刻执行，那么就会立即执行函数
 */
const debounce_throttle = (fn, delay) => {
  let pre = 0,
    timer = null
  return function (...args) {
    let now = +new Date()
    if (now - pre < delay) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        pre = now
        fn.apply(this, args)
      }, delay)
    } else {
      pre = now
      fn.apply(this, args)
    }
  }
}
