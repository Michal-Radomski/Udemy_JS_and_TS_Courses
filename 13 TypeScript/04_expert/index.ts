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
  })();
}
