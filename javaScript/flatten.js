let arr = [1, 2, [3, 4], [5, [6, 7]]]
const flatten = (arr, res = []) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], res)
    } else {
      res.push(arr[i])
    }
  }
  return res
}

console.log(flatten(arr))
