/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal
  
  ### Question
  
  Replace the `camelCase` or `PascalCase` string with `kebab-case`.
  
  `FooBarBaz` -> `foo-bar-baz`
  
  For example
  
  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">;
  const foobarbaz: FooBarBaz = "foo-bar-baz";
  
  type DoNothing = KebabCase<"do-nothing">;
  const doNothing: DoNothing = "do-nothing";
  ```
  
  > View on GitHub: https://tsch.js.org/612
*/


/* _____________ Your Code Here _____________ */
//我的解
// type Process<S> = 
// S extends `${infer M}${infer R}`
// ? M extends 'F'|'B'|'A'|'C'
//   ?`-${Lowercase<M>}${Process<R>}` 
//   : `${M}${Process<R>}`
// : ''

// type KebabCase<S> = 
// S extends '-'
// ? S
// : Process<S> extends `-${infer R}`
//   ? R
//   : Process<S>

//他人解
  type KebabCase<S> = S extends `${infer C}${infer T}`
  ? T extends Uncapitalize<T>
    ? `${Uncapitalize<C>}${KebabCase<T>}`
    : `${Uncapitalize<C>}-${KebabCase<T>}`
  : S;

type see =  KebabCase<'FooBarBaz'>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/

