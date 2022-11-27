/*
  2688 - StartsWith
  -------
  by jiangshan (@jiangshanmeta) #中等 #template-literal
  
  ### 题目
  
  实现`StartsWith<T, U>`,接收两个string类型参数,然后判断`T`是否以`U`开头,根据结果返回`true`或`false`
  
  例如:
  
  ```typescript
  type a = StartsWith<'abc', 'ac'> // expected to be false
  type b = StartsWith<'abc', 'ab'> // expected to be true
  type c = StartsWith<'abc', 'abcd'> // expected to be false
  ```
  
  > 在 Github 上查看：https://tsch.js.org/2688/zh-CN
*/


/* _____________ 你的代码 _____________ */
//我的解答
// type StartsWith<T extends string, U extends string> = 
// T extends `${infer T1}${infer T2}` 
// ? U extends `${infer U1}${infer U2}`
//   ? T1 extends U1 
//     ? StartsWith<T2,U2>
//     : false
//   : true
// : U extends ''
//   ? true
//   : false
// ;

type StartsWith<T extends string, U extends string> = 
T extends `${U}${any}` 
? true:false;

type see = StartsWith<'abc', 'ab'>
/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>,
]



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/2688/answer/zh-CN
  > 查看解答：https://tsch.js.org/2688/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

