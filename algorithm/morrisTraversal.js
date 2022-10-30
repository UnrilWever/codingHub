// //custom
// const morrisTraversal = (root) => {
//   let cur = root
//   let res = []
//   while (cur) {
//     let mostRight = cur.left
//     if (mostRight) {
//       while (mostRight.right !== null && mostRight.right !== cur) {
//         mostRight = mostRight.right
//       }
//       if (mostRight.right === null) {
//         //第一次访问根节点
//         mostRight.right = cur
//         cur = cur.left
//         continue
//       } else {
//         //第二次访问根节点
//         //第一次访问叶子节点
//         mostRight.right = null
//       }
//     }
//     //第二次访问根节点
//     //第一次访问叶子节点
//     //cur左为null
//     cur = cur.right
//   }
//   return res
// }

// //前序遍历
// const morrisTraversal = (root) => {
//   let cur = root
//   let res = []
//   while (cur) {
//     let mostRight = cur.left
//     if (mostRight) {
//       while (mostRight.right !== null && mostRight.right !== cur) {
//         mostRight = mostRight.right
//       }
//       if (mostRight.right === null) {
//         res.push(cur.val)
//         mostRight.right = cur
//         cur = cur.left
//         continue
//       } else {
//         mostRight.right = null
//       }
//     } else {
//       res.push(cur.val)
//     }
//     cur = cur.right
//   }
//   return res
// }

// //中序遍历
// const morrisTraversal = (root) => {
//   let cur = root
//   let res = []
//   while (cur) {
//     let mostRight = cur.left
//     if (mostRight) {
//       while (mostRight.right !== null && mostRight.right !== cur) {
//         mostRight = mostRight.right
//       }
//       if (mostRight.right === null) {
//         mostRight.right = cur
//         cur = cur.left
//         continue
//       } else {
//         mostRight.right = null
//       }
//     }
//     res.push(cur.val)
//     cur = cur.right
//   }
//   return res
// }
//后序遍历
const morrisTraversal = (root) => {
  let cur = root
  let res = []
  while (cur) {
    let mostRight = cur.left
    if (mostRight) {
      while (mostRight.right !== null && mostRight.right !== cur) {
        mostRight = mostRight.right
      }
      if (mostRight.right === null) {
        mostRight.right = cur
        cur = cur.left
        continue
      } else {
        mostRight.right = null
      }
    }
    res.push(cur.val)
    cur = cur.right
  }
  return res
}
