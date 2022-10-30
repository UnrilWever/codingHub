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
//         //第一次访问有左树节点
//         mostRight.right = cur
//         cur = cur.left
//         continue
//       } else {
//         //第二次访问有左树节点
//         //第一次访问叶子节点
//         mostRight.right = null
//       }
//     }
//     //第二次访问有左树节点
//     //第一次访问叶子节点
//     //无左树节点
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
const reverseEdge = (node) => {
  let pre = null
  while (node) {
    let next = node.right
    node.right = pre
    pre = node
    node = next
  }
  return pre
}

const printEdge = (node) => {
  let tail = reverseEdge(node)
  let res = []
  node = tail
  while (node) {
    res.push(node.val)
    node = node.right
  }
  reverseEdge(tail)
  return res
}

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
        //第二次来到有左树节点打印其左子节点及其右边
        res.push(...printEdge(cur.left))
      }
    }
    cur = cur.right
  }
  //最后还剩下根节点及其右边没打，给它打印了
  res.push(...printEdge(root))
  return res
}
