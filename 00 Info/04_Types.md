Types for TypeScript should generally be placed in `.ts` files when you are writing your own TypeScript code, including
interfaces, types, enums, and implementations. These `.ts` files contain both type information and executable code, and they
compile to JavaScript files. This is the standard and recommended approach when developing TypeScript applications or
libraries[3][5][6].

On the other hand, `.d.ts` files are declaration files that contain only type information without any implementation or
executable code. They are primarily used to provide type declarations for existing JavaScript code or third-party libraries
that do not have built-in TypeScript types. These files help TypeScript understand the types of JavaScript modules and enable
type checking and autocomplete without producing JavaScript output themselves[1][3][4][5][6][7].

### When to use `.ts` vs `.d.ts`:

- Use **`.ts` files** for:
  - Your own TypeScript source code with both types and implementations.
  - Defining types that are bundled with your code and compiled to JavaScript.
- Use **`.d.ts` files** for:
  - Declaring types for JavaScript libraries or modules without TypeScript typings.
  - Writing type declarations for external dependencies when no typings exist.
  - Providing type contracts without implementations, often for third-party JS code.

### Summary

| File Type | Contains                  | Compiled to JS? | Typical Use Case                             |
| --------- | ------------------------- | --------------- | -------------------------------------------- |
| `.ts`     | Types + Implementations   | Yes             | Writing your own TypeScript code             |
| `.d.ts`   | Types only (declarations) | No              | Typings for JS libraries or external modules |

In practice, if you are writing fresh TypeScript code, you should put your types in `.ts` files. Use `.d.ts` files mainly
when you need to describe types for existing JavaScript code or external libraries that lack TypeScript support[3][5][6].

Citations: [1] https://www.typescriptlang.org/docs/handbook/2/type-declarations.html [2]
https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html [3]
https://www.reddit.com/r/typescript/comments/r69jmi/whats_the_difference_between_ts_and_dts_file/ [4]
https://stackoverflow.com/questions/21247278/about-d-ts-in-typescript [5]
https://www.linkedin.com/pulse/understanding-ts-vs-dts-typescript-fatemeh-khoshbayan-m-sc--hqkfe [6]
https://www.linkedin.com/pulse/difference-between-ts-dts-files-hemantha-wijegunarathna-7j6pc [7]
https://www.webdevtutor.net/blog/typescript-type-of-file [8] https://www.youtube.com/watch?v=v3MhjVqDtek

---

Answer from Perplexity:
https://www.perplexity.ai/search/what-is-difference-between-nvi-vbVfIHDMQMaJyPKJz3cwYA?utm_source=copy_output
