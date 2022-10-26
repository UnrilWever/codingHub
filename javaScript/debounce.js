function debounce(cb, delay) {
  let timer = 0
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      cb.apply(this, args)
    }, delay)
  }
}
