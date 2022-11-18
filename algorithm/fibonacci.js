//dp
const fibonacci = (n) => {
  let res = [1, 1]
  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2]
  }
  return res
}

console.log(fibonacci(10))
