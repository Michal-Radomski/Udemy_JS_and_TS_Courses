Primitive types in JavaScript (JS) and TypeScript (TS) are basic data types that are not objects and do not have methods or
properties directly on them. They are immutable, meaning their values cannot be changed once assigned.

## Primitive Types in JavaScript

JavaScript has seven standard primitive types:

- **string**: Represents textual data, e.g., `"Hello, world"`.
- **number**: Represents all numbers, including integers and floating-point values, e.g., `42`.
- **bigint**: Represents integers larger than the safe integer limit for numbers, e.g., `9007199254740991n`.
- **boolean**: Represents `true` or `false`.
- **undefined**: Represents a variable that has been declared but not assigned a value.
- **symbol**: Represents a unique identifier.
- **null**: Represents an intentional absence of any object value (though `typeof null` returns `"object"` due to legacy
  reasons)[3][5].

## Primitive Types in TypeScript

TypeScript supports the same primitive types as JavaScript, plus it enforces type annotations for these primitives:

- `string`
- `number`
- `bigint`
- `boolean`
- `symbol`
- `null`
- `undefined`

These types correspond directly to JavaScript primitives and are immutable. TypeScript uses these to provide static type
checking and better tooling support. For example, a variable declared as `string` can only be assigned string literals or
values of type string[1][4][6].

### Key Notes on Primitives in TS and JS

- Primitives have no methods or properties themselves, but JavaScript temporarily wraps them in object wrappers when
  accessing methods (e.g., `"foo".includes("f")` works because `"foo"` is auto-boxed to a `String` object internally)[3].
- TypeScript treats these primitives as types for variables and function parameters, enabling compile-time checks.
- `bigint` is supported in TypeScript only if the target environment is ES2020 or newer[6].
- `null` and `undefined` represent absence of values but are distinct types in TypeScript, useful for strict null
  checking[6].

In summary, primitive types in both JavaScript and TypeScript include `string`, `number`, `boolean`, `bigint`, `symbol`,
`null`, and `undefined`. TypeScript builds on JavaScript's primitives by adding static typing and stricter checks around
their usage[1][3][4][5][6].

Citations: [1] https://www.typescriptlang.org/docs/handbook/2/everyday-types.html [2]
https://www.w3schools.com/typescript/typescript_simple_types.php [3]
https://developer.mozilla.org/en-US/docs/Glossary/Primitive [4]
https://www.codecademy.com/resources/docs/typescript/primitives [5] https://masteringjs.io/tutorials/fundamentals/primitives
[6] https://gibbok.github.io/typescript-book/book/primitive-types/ [7]
https://www.typescriptlang.org/docs/handbook/basic-types.html [8]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures

---

Answer from Perplexity:
https://www.perplexity.ai/search/what-are-primitive-types-in-js-eQPvQ9vuRaip1FjaSxQ69w?utm_source=copy_output
