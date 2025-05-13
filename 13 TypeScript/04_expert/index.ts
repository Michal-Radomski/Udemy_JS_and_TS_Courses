{
  //* Typeof type operator
  ((): void => {
    const center = {
      x: 0,
      y: 0,
      z: 0,
    };

    // type Point = typeof center;

    // Inline
    const unit: typeof center = {
      x: center.x + 1,
      y: center.y + 1,
      z: center.z + 1,
    };
    console.log("unit:", unit);

    // Create a type from JSON
    const response = {
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
    };

    type PersonResponse = typeof response;

    function processResponse(person: PersonResponse): void {
      console.log("Full name:", `${person.firstName} ${person.lastName}`);
    }
    processResponse(response);
  })();
}

{
  //* Lookup Types
  ((): void => {
    type SubmitRequest = {
      transactionId: string;
      personal: {
        title: string;
        driverFirstName: string;
        driverMiddleName: string;
        driverLastName: string;
        email: string;
        phone: string;
        previousAliases: {
          firstName: string;
          middleName: string;
          lastName: string;
        }[];
        gender: string;
        dob: string;
        birthCountry: string;
      };
      driver: {
        licenseNumber: string;
        expiryDate: string;
        hasLicenseForMin6Months: boolean;
        hasTerritoryLicense: boolean;
        territoryLicenseStates?: string[];
        hasDriverAccreditation: boolean;
        driverAccreditationNumber?: string;
        vehicleClasses: string[];
        tandc: true;
      };
      consent: {
        understandInformation: boolean;
        informationTrue: boolean;
        informationConsidered: boolean;
        medicalVicRoadsPoliceCheckConsent: boolean;
        consentToDisclosing: boolean;
        indemnifyAgainstLiability: boolean;
        acicCheckConsent: boolean;
        childrenCheckConsent: boolean;
        personalInfoCheckConsent: boolean;
        trafficOffenses: boolean;
        assessAcicCheckConsent: boolean;
        criminalOffenses: boolean;
        licenseCancelledSuspended: boolean;
        sexOffendersReporting: boolean;
        ausWorkRights: boolean;
        additionalInformation: string;
      };
      payment: {
        creditCardToken: string;
      };
    };

    // UI
    type PaymentRequest = SubmitRequest["payment"]; //* creditCardToken: string;
    type PreviousAliasRequest = SubmitRequest["personal"]["previousAliases"][0]["firstName"]; //* firstName: string;

    function getPayment(): PaymentRequest {
      return {
        creditCardToken: "124q234n12l!@#$3412n34!@#$",
      };
    }
  })();
}

{
  //* Keyof type operator
  ((): void => {
    type Person = {
      age: number;
      location: string;
      name: string;
    };

    const john: Person = {
      age: 34,
      location: "Dallas",
      name: "John",
    };

    type PersonKeys = keyof Person; //* "name" | "age" | "location"

    // keyof returns the union of keys of a given type
    function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] {
      const value = obj[key];
      console.log("Getting:", key, value);
      return value;
    }

    const age: number = logGet(john, "age"); // 34
    console.log({ age });

    function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]): void {
      console.log("Settings", key, value);
      obj[key] = value;
    }

    logSet(john, "age", 36); // Settings age 36
  })();
}

{
  //* Conditional Types
  ((): void => {
    // Compile time version by TypeScript
    type IsNumber<T> = T extends number ? "number" : "other";
    type WithNumber = IsNumber<number>;
    type WithOther = IsNumber<string>;

    // Runtime version by JavaScript
    const isNumber = (value: unknown) => (typeof value === "number" ? "number" : "other");
    const withNumber = isNumber(123);
    const withOther = isNumber("hello");
    console.log({ withNumber, withOther });

    // Use Case
    type TypeName<T> = T extends string
      ? "string"
      : T extends number
      ? "number"
      : T extends boolean
      ? "boolean"
      : T extends undefined
      ? "undefined"
      : T extends symbol
      ? "symbol"
      : T extends bigint
      ? "bigint"
      : T extends Function
      ? "function"
      : T extends null
      ? "null"
      : "object";

    function typeName<T>(t: T): TypeName<T> {
      if (t === null) return "null" as TypeName<T>;
      return typeof t as TypeName<T>;
    }

    const str = typeName("hello world");
    const num = typeName(123);
    const bool = typeName(true);
    const undef = typeName(undefined);
    const sym = typeName(Symbol("star"));
    const big = typeName(24n);
    const func = typeName(function () {});
    const obj = typeName(null);
    console.log({ str }); // string
  })();
}

{
  //* Conditional Types with Unions and never
  ((): void => {
    // Uses of never
    function error(message: string): never {
      throw new Error(message);
    }

    // const notAllowed: never = "some string"; // Error
    // const allowed: never = error("Some message");
    // const example: string = error("Another message");
    // console.log({ allowed, example });
    type Verbose = string | never;
    type Concise = string;

    // Exclude null and undefined from T
    type NoEmpty<T> = T extends null | undefined ? never : T;
    type Example = NoEmpty<string | null>;
    type Explanation1 = NoEmpty<string> | NoEmpty<null>;
    type Explanation2 =
      | (string extends null | undefined ? never : string)
      | (null extends null | undefined ? never : string);
    type Explanation3 = string | never;
    type Explanation4 = string;
  })();
}

{
  //* Infer keyword and `ReturnType<T>`
  ((): void => {
    type IsArray<T> = T extends Array<infer Member> ? "array" : "other";

    type WithArray = IsArray<string[]>;
    type WithOther = IsArray<number>;

    type UnboxArray<T> = T extends Array<infer Member> ? Member : T;
    type UnboxedStringArray = UnboxArray<string[]>;
    type UnboxedNumberArray = UnboxArray<number[]>;
    type anythingElse = UnboxArray<string>;

    // Use case: Generate the type on the fly when input of functionB depends on output of functionA
    function createPerson(firstName: string, lastName: string) {
      return {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
      };
    }

    // type ReturnType<T> = T extends (...args: any) => infer R ? R : never; //* Build-in
    type Person = ReturnType<typeof createPerson>;
    //     type Person = {
    //     firstName: string;
    //     lastName: string;
    //     fullName: string;
    // }

    // Inline
    function logPerson(person: ReturnType<typeof createPerson>): void {
      console.log("Person:", person.firstName, person.lastName, person.fullName);
    }
  })();
}

{
  //* Mapped Types
  ((): void => {
    type Point = {
      x: number;
      y: number;
      z: number;
    };

    // This way implies code duplication
    type ReadonlyPoint = {
      readonly x: number;
      readonly y: number;
      readonly z: number;
    };

    // Mapped Type version Explanation (Readonly is including in TS)
    // type Readonly<T> = { readonly [Item in keyof T]: T[Item] }; //* Build-in

    const center: Readonly<Point> = {
      x: 0,
      y: 0,
      z: 0,
    };

    // center.x = 100; // Not allowed
  })();
}

{
  //* Mapped type modifiers
  ((): void => {
    // Mapped Type Modifiers with Types
    type Point = {
      readonly x: number;
      y?: number;
    };

    // The negative modifier removes the modifiers of the original type
    type Mapped<T> = {
      -readonly [P in keyof T]-?: T[P];
    };

    type Result = Mapped<Point>;
    //     type Result = {
    //     x: number;
    //     y: number;
    // }

    // Mapped Type Modifiers with Classes (Partial is already implemented by TypeScript)
    class State<T> {
      constructor(public current: T) {}
      update(next: Partial<T>) {
        this.current = { ...this.current, ...next };
      }
    }

    const state = new State({ x: 0, y: 0 });
    state.update({ y: 1 });
    console.log(state.current); // { x: 0, y: 1 }
  })();
}

{
  //* Template Literal Type
  ((): void => {
    let jsStringLiteral;
    jsStringLiteral = "hello";
    jsStringLiteral = "world";

    let jsTemplateLiteral;
    jsTemplateLiteral = `Example: ${jsStringLiteral}`; // Example: world

    let str: string;
    str = "whatever";

    // Literal Type
    let strLiteral: "hello";
    strLiteral = "hello"; // This is ok
    // strLiteral = "oh oh"; // This is not

    // Template Literal Type
    let templateLiteral: `Example: ${string}`;
    templateLiteral = "Example: hello";
    templateLiteral = "Example: world";
    // templateLiteral = "Without Example prefix"; // Not allowed

    // Use cases
    // Typing CSS Values
    type CssValue =
      // implies px
      | number
      // number + px|em|rem|%
      | `${number}px`
      | `${number}em`
      | `${number}rem`
      | `${number}%`;

    function size(input: CssValue): string {
      return typeof input == "number" ? input + "px" : input;
    }

    size(16);
    size("16px");
    size("1em");
    size("1rem");
    size("10%");
    // size("1rex"); // Typo

    // Typing style
    type Size = "small" | "medium" | "large";
    type Color = "primary" | "secondary";
    type Style = `${Size}-${Color}`;

    function applyStyle(style: Style): void {}

    applyStyle("small-primary");
    applyStyle("large-secondary");
    // applyStyle("medim-primary"); // Typo
  })();
}
