The key differences between tuples and arrays in TypeScript are about **structure, type safety, and usage**:

## Structure

- **Array**:

  - Has a variable length (dynamic size).
  - Can hold elements of the same type or a union of types, but the order and number of elements are not fixed.
  - Example: `string[]` can hold any number of strings; `(string | number)[]` can hold any number of strings or numbers in
    any order.

- **Tuple**:
  - Has a fixed length (static size).
  - Each element has a specific, predetermined type at a specific position.
  - Example: `[string, number]` is a tuple with exactly two elements: first a string, then a number.

## Type Safety

- **Array**: Less strict. TypeScript allows any element of the declared type(s) at any index. This can lead to runtime errors
  if you access elements assuming the wrong type or index.
- **Tuple**: More strict. TypeScript enforces the exact number of elements and their types at each index, reducing errors and
  improving code safety.

## Usage

- **Array**: Used for collections of elements where the number of items can change and elements are generally of the same
  type or a union of types. Suitable for lists, collections, or sequences.
- **Tuple**: Used when you want to represent a fixed set of elements with different types, such as function return values
  with multiple types, or structured data like coordinates or key-value pairs.

---

### Summary Table

| Feature       | Array                        | Tuple                                   |
| ------------- | ---------------------------- | --------------------------------------- |
| Length        | Variable                     | Fixed                                   |
| Element Types | Usually homogeneous or union | Heterogeneous, fixed per index          |
| Type Safety   | Less strict                  | More strict                             |
| Usage         | Collections, lists           | Fixed structure, multiple return values |

---

### Example

```typescript
// Array of strings (variable length)
let fruits: string[] = ["apple", "banana", "cherry"];
fruits.push("date"); // Allowed

// Tuple with fixed length and types
let person: [string, number] = ["Alice", 30];
// person.push(40); // Error: Tuple type '[string, number]' of length '2' has no element at index '2'.
```

---

In short, tuples provide **fixed-length, fixed-type collections** with stricter type enforcement, while arrays offer
**flexible-length collections** with more relaxed type constraints[1][2][4][5][6][9].

Citations: [1] https://how.dev/answers/arrays-vs-tuples-in-typescript [2]
https://www.tutorialspoint.com/array-vs-tuples-in-typescript [3] https://type-level-typescript.com/arrays-and-tuples [4]
https://www.w3schools.com/typescript/typescript_tuples.php [5] https://byby.dev/ts-tuples-vs-arrays [6]
https://www.scholarhat.com/tutorial/typescript/array-tuples [7] https://www.youtube.com/watch?v=pKiIfWAQStE [8]
https://users.rust-lang.org/t/qs-about-the-book-tuples-vs-arrays-vs/68534 [9]
https://www.typescriptlang.org/play/typescript/type-primitives/tuples.ts.html

---

Answer from Perplexity:
https://www.perplexity.ai/search/what-are-primitive-types-in-js-eQPvQ9vuRaip1FjaSxQ69w?utm_source=copy_output
