/*
  3376 - InorderTraversal
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### Question
  
  Implement the type version of binary tree inorder traversal.
  
  For example:
  
  ```typescript
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const
  
  type A = InorderTraversal<typeof tree1> // [1, 3, 2]
  ```
  
  > View on GitHub: https://tsch.js.org/3376
*/


/* _____________ Your Code Here _____________ */

interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
//结果正确但是还是错误
// 类型实例化过深，且可能无限。ts(2589)
// 表达式生成的联合类型过于复杂，无法表示。ts(2590)
// type InorderTraversal<T extends TreeNode | null> = 
// T extends {val:infer V,left:infer L extends TreeNode | null,right:infer R extends TreeNode | null} 
// ? [...InorderTraversal<L>,V,...InorderTraversal<R>]
// : []

//解法二
type Traverse<T extends TreeNode | null,K extends keyof T> = 
T[K] extends TreeNode 
? InorderTraversal<T[K]>
:[]

type InorderTraversal<T extends TreeNode | null> = 
T extends TreeNode
? [...Traverse<T,'left'>,T['val'],...Traverse<T,'right'>]
:[]

//改造解法一
// still didn't work!!!
// type InorderTraversal<T extends TreeNode | null> = 
// T extends TreeNode 
// ? [...InorderTraversal<T['left']>,T['val'],...InorderTraversal<T['right']>]
// : []

type see = InorderTraversal<typeof tree1>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
} as const

type cases = [
  Expect<Equal<InorderTraversal<null>, []>>,
  Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
  Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
  Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
  Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3376/answer
  > View solutions: https://tsch.js.org/3376/solutions
  > More Challenges: https://tsch.js.org
*/

