class Node {
  constructor(val = null, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const buildTree = (arr) => {
  let root = new Node(arr[0])
  let q = [root]
  let index = 1
  while (index < arr.length) {
    for (let i = 0; i < q.length; i++) {
      let node = q.shift()
      node.left = arr[index] ? new Node(arr[index]) : null
      index++
      node.right = arr[index] ? new Node(arr[index]) : null
      index++
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return root
}
