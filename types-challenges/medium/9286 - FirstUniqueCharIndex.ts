/*
  9286 - FirstUniqueCharIndex
  -------
  by jiangshan (@jiangshanmeta) #medium #string
  
  ### Question
  
  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))
  
  > View on GitHub: https://tsch.js.org/9286
*/


/* _____________ Your Code Here _____________ */

type isInSet<T,E> = 
T extends [infer L,...infer R]
? L extends E
  ? true
  : isInSet<R,E>
: false 

type FindRepeat<T,Repeat,Set extends string[] = []> = 
T extends `${infer L}${infer R}`  
? isInSet<Set,L> extends true
  ? FindRepeat<R,Repeat | L,Set> 
  : FindRepeat<R,Repeat,[...Set,L]>
: Repeat

type FirstUniqueCharIndex<T extends string,Repeat = FindRepeat<T,never>,Count extends number[] = []>= 
T extends `${infer L}${infer R}`
? L extends Repeat
  ? FirstUniqueCharIndex<R,Repeat,[...Count,1]>
  : Count['length']
: -1

type see = FirstUniqueCharIndex<'leetcode'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9286/answer
  > View solutions: https://tsch.js.org/9286/solutions
  > More Challenges: https://tsch.js.org
*/

