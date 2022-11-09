//法一
function removeWithoutCopy(arr, target) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[0] !== target) arr.push(arr[0])
    arr.shift()
  }
  return arr
}

//法二
// function removeWithoutCopy(arr, target) {
//   let index = 0
//   while (index < arr.length) {
//     if (arr[index] === target) {
//       arr.splice(index, 1)
//     } else {
//       index++
//     }
//   }
//   return arr
// }

let res = removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2)
console.log(res)

//番外篇数组添加元素
let arr = [1, 2, 3, 4, 5, 6, 7, 'f1', 'f2']
let returnArr = arr.splice(2, 0, 'wu', 'leon')
//从第2位开始删除0个元素，插入"wu","leon"
console.log(returnArr) //[] 返回空数组
console.log(arr) // [1, 2, "wu", "leon", 6, 7, "f1", "f2"]; 原始数组被改变
