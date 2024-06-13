export {};

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("", {
  url: "https://example.org/",
  referrer: "https://example.com/",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000,
});
const $ = require("jquery")(window);

// console.log("window", window);
// console.log("$", $);
console.log("$.ajax:", $.ajax);

{
  //* let and const
  //@ ES5
  // var name = "Jane"
  // var title= "Software Engineer"
  // var hourlyWage = 40

  //^ const -> I don't expect to change
  //^ let -> I do expect to change

  //@ ES6
  const name = "Jane";
  let title = "Software Engineer"; //* -> "Senior Software Engineer"
  let hourlyWage = 40;
  console.log({ name, title, hourlyWage });
  hourlyWage = 45;
  title = "Senior Software Engineer";
  console.log({ name, title, hourlyWage });
}

{
  //* Template string
  const getMessage = () => {
    // const year = new Date().getFullYear();
    // return `The year is ${year}`;
    return `The year is ${new Date().getFullYear()}`;
  };
  console.log("getMessage():", getMessage());

  const device_id = 4;
  const guid = 20;
  const userName = "Hello";

  const data = `{"device_id": ${device_id}, "guid": ${guid}, "userName": ${userName}}`;
  console.log("data:", data);
}

{
  //* Arrow functions
  const add = function (a: number, b: number) {
    return a + b;
  };
  const add2 = (a: number, b: number) => {
    const sum = a + b;
    return sum;
  };
  const add3 = (a: number, b: number) => a + b;

  console.log("add(1,2):", add(1, 2));
  console.log("add2(1,2):", add2(1, 2));
  console.log("add3(1,2):", add3(1, 2));

  const double = (number: number) => 2 * number;
  console.log("double(1):", double(1));

  const team = {
    members: ["Jane", "Bill"],
    teamName: "Super Squad",
    teamSummary: function () {
      const that = this;
      // console.log({ that });
      return this.members.map(function (member: string) {
        return `${member} is on team ${that.teamName}`;
      });
    },

    teamSummary2: function () {
      // console.log("this:", this);
      //* this === team
      return this.members.map((member: string) => {
        // console.log("this:", this);
        return `${member} is on team ${this.teamName}`;
      });
    },
  };
  console.log("team.teamSummary():", team.teamSummary());
  console.log("team.teamSummary2():", team.teamSummary2());
}

{
  //* Enhanced Object Literal
  interface Inventory {
    title: string;
    price: number;
  }

  function createBookShop(inventory: Inventory[]) {
    return {
      inventory,
      inventoryValue(): number {
        return this.inventory.reduce((total: number, book) => total + book.price, 0);
      },
      priceForTitle(tittle: string): number {
        return this.inventory.find((book) => book.title === tittle)!.price;
      },
    };
  }

  const inventory: Inventory[] = [
    { title: "Harry Potter", price: 10 },
    { title: "Eloquent JS", price: 15 },
  ];
  const bookShop = createBookShop(inventory);

  // console.log("bookShop:", bookShop);
  console.log("bookShop.priceForTitle('Harry Potter'):", bookShop.priceForTitle("Harry Potter"));
  console.log("bookShop.inventoryValue():", bookShop.inventoryValue());

  // const url = "https://fileupload.com";
  // const data = { color: "red" };

  // function saveFile(url: string, data: Object) {
  //   $.ajax({ method: "POST", url, data });
  // }
  // console.log("saveFile(url, data):", saveFile(url, data));
}

{
  //* Default function arguments
  //* V1
  // function makeAjaxRequest(url: string, method?: string) {
  //   if (!method) {
  //     method = "GET";
  //   }
  //   // Logic to make the request
  //   console.log({ url, method });
  // }
  //* V2
  function makeAjaxRequest(url: string, method: string = "GET") {
    // Logic to make the request
    console.log({ url, method });
  }

  makeAjaxRequest("google.com");
  makeAjaxRequest("google.com", "GET");
  makeAjaxRequest("google.com", "POST");
  makeAjaxRequest("google.com", null as any);

  class User {
    id: number;
    admin?: boolean;
    constructor(id: number, admin: boolean = false) {
      this.id = id;
      this.admin = admin;
    }
  }

  let testUser = new User(generateId());
  // console.log({ testUser });

  function generateId(): number {
    const randomNumber = Math.round(Math.random() * 99999);
    // console.log({ randomNumber });
    return randomNumber;
  }

  function createAdminUser(user: User = new User(generateId())): User {
    const adminUser = { ...user, admin: true };
    return adminUser;
  }

  const newAdminUser = createAdminUser();
  console.log({ newAdminUser });

  const newAdminUser2 = createAdminUser(testUser);
  console.log({ newAdminUser2 });
}

{
  //* Rest and Spread operators
  //* Rest operator
  function addNumbers(...numbers: number[]) {
    // console.log({ numbers });
    return numbers.reduce((sum: number, number: number) => {
      return sum + number;
    }, 0);
  }
  console.log("addNumbers(1,2,3,4,5):", addNumbers(1, 2, 3, 4, 5));

  //* Spread operator
  const defaultColors = ["green", "red"];
  const userFavoriteColors = ["orange", "yellow"];
  const fallColors = ["fireRed", "fallOrange"];
  const colors = ["pink", "blue", ...fallColors, ...defaultColors, ...userFavoriteColors];
  console.log({ colors });

  //* Rest + rest operator together
  //- rest operator
  function validateShoppingList(...items: string[]) {
    if (items.indexOf("milk") < 0) {
      //- spread operator
      return ["milk", ...items];
    }
    return items;
  }
  console.log('validateShoppingList("oranges", "bread", "eggs"):', validateShoppingList("oranges", "bread", "eggs"));
}

{
  //* Destructuring
  const expense = {
    type: "Business",
    amount: "$ 45 USD",
  };
  const { type, amount } = expense;
  console.log({ type, amount });

  const savedFile = {
    extension: "jpg",
    name: "report",
    size: 14040,
  };

  function fileSumary(
    { name, extension, size }: { name: string; extension: string; size: number },
    { color }: { color: string }
  ) {
    console.log(`The file ${name}.${extension} is of size: ${size} -> color: ${color}`);
  }
  fileSumary(savedFile, { color: "red" });

  const companies = ["Google", "Facebook", "Uber"];
  // const [name, name2, name3] = companies;
  // console.log({ name, name2, name3 });
  const { length } = companies;
  console.log({ length });
  const [_name, _name2, ...rest] = companies;
  console.log({ rest });

  const companies2 = [
    { name: "Google", location: "Mountain View" },
    { name: "Facebook", location: "Menlo Park" },
    { name: "Uber", location: "San Francisco" },
  ];

  // ES5
  const googleLocation = companies2[0].location;
  console.log({ googleLocation });

  // ES6
  const [{ location }] = companies2;
  console.log({ location });

  const Google = {
    locations: ["Mountain View", "New York", "London"],
  };
  const {
    locations: [googleLoc],
  } = Google;
  console.log({ googleLoc });

  //^ Order is NOT important!
  function singUp({
    password,
    userName,
    email,
    dateOfBirth,
    city,
  }: {
    dateOfBirth: string;
    userName: string;
    password: string;
    email: string;
    city: string;
  }) {
    // create new user
    console.log({ userName, password, email, dateOfBirth, city });
  }
  const user = {
    userName: "myName",
    password: "myPassword",
    email: "test@test.com",
    dateOfBirth: "20 20 20",
    city: "New York",
  };
  // singUp("myName", "myPassword", "test@test.com", "20 20 20", "New York");
  singUp(user);

  const points = [
    [4, 5],
    [10, 1],
    [0, 40],
  ];

  const points2 = points.map(([x, y]) => {
    return { x, y };
  });
  console.log({ points2 });

  const numbers = [1, 2, 3];
  function double([elem, ...rest]: number[]): number[] {
    if (!elem) {
      return [];
    }
    return [2 * elem, ...double(rest)];
  }
  console.log("double(numbers):", double(numbers));
}

{
  //* Classes
  //* ES5
  interface Options {
    title: string;
    color?: string;
  }

  // function Car(this: any, options: Options) {
  //   this.title = options.title;
  // }
  // Car.prototype.drive = function () {
  //   return "vroom";
  // };
  // function Toyota(this: any, options: Options) {
  //   Car.call(this, options);
  //   this.color = options.color;
  // }
  // Toyota.prototype = Object.create(Car.prototype);
  // Toyota.prototype.constructor = Toyota;
  // Toyota.prototype.honk = function () {
  //   return "beep";
  // };
  // // const car = new (Car as any)({ title: "Focus" });
  // // console.log({ car });
  // // console.log("car.drive():", car.drive());
  // const toyota = new (Toyota as any)({ color: "red", title: "Corolla" });
  // console.log({ toyota });
  // console.log("toyota.drive():", toyota.drive());
  // console.log("toyota.honk():", toyota.honk());

  //* ES5
  class Car {
    title: string;
    constructor({ title }: { title: string }) {
      this.title = title;
    }
    drive() {
      return "vroom";
    }
  }
  // console.log({ Car }, typeof Car);
  const car = new Car({ title: "Focus" });
  // console.log({ car }, typeof car);
  console.log("car.drive():", car.drive());

  class Toyota extends Car {
    color: string;
    constructor(options: Options) {
      super(options);
      this.color = options.color!;
    }
    honk() {
      return "beep";
    }
  }

  const toyota = new Toyota({ color: "red", title: "Corolla" });
  console.log({ toyota });
  console.log("toyota.honk():", toyota.honk());
  console.log("toyota.drive():", toyota.drive());
}

{
  //* 1. for...of loop
  const colors = ["red", "green", "blue"];
  for (let color of colors) {
    console.log({ color });
  }

  let total = 0;
  const numbers_1 = [1, 2, 3, 4, 5];
  for (let number of numbers_1) {
    total += number;
  }
  console.log({ total });

  //* 2. for...in loop
  const obj = { a: 1, b: 2, c: 3 };
  for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop as keyof typeof obj]}`);
  }
  // Logs:
  // "obj.a = 1"
  // "obj.b = 2"
  // "obj.c = 3"

  //* 3. do...while
  let result = "";
  let i = 0;
  do {
    i = i + 1;
    result = result + i;
  } while (i < 5);
  console.log({ result }); // Expected output: "12345"

  //* 4. Generators
  function* shopping() {
    // @ts-ignore
    const stuffFromStore = yield "cash";
    // @ts-ignore
    const stuffFromLaundry = yield "laundry";
    // console.log({ stuffFromStore, stuffFromLaundry }, typeof stuffFromLaundry, typeof stuffFromStore);
    return [stuffFromStore, stuffFromLaundry];
  }
  const gen = shopping();
  // console.log({ gen });
  console.log(gen.next());
  console.log(gen.next("groceries"));
  console.log(gen.next("clean clothes"));

  function* colors2() {
    yield "red";
    yield "blue";
    yield "green";
  }
  // const gen2 = colors2();
  // console.log(gen2.next());
  // console.log(gen2.next());
  // console.log(gen2.next());
  // console.log(gen2.next());

  const myColors = [];
  for (let color of colors2()) myColors.push(color);
  console.log("myColors", myColors);

  interface TestingTeam {
    lead: string;
    tester: string;
    [Symbol.iterator](): Generator<string, void, unknown>;
  }

  interface EngineeringTeam {
    size: number;
    department: string;
    lead: string;
    manager: string;
    engineering: string;
    testingTeam: TestingTeam;
    [Symbol.iterator](): Generator<string, void, unknown>;
  }

  const testingTeam: TestingTeam = {
    lead: "Amanda",
    tester: "Bill",
    [Symbol.iterator]: function* () {
      yield this.lead;
      yield this.tester;
    },
  };

  const engineeringTeam: EngineeringTeam = {
    testingTeam: testingTeam,
    size: 3,
    department: "Engineering",
    lead: "Jill",
    manager: "Alex",
    engineering: "Dave",
    [Symbol.iterator]: function* () {
      yield this.lead;
      yield this.manager;
      yield this.engineering;
      // const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
      // console.log("testingTeamGenerator:", testingTeamGenerator);
      // yield* testingTeamGenerator;
      yield* this.testingTeam;
    },
  };

  // function* TestingTeamIterator(team: TestingTeam) {
  //   yield team.lead;
  //   yield team.tester;
  // }

  // function* TeamIterator(team: EngineeringTeam) {
  //   yield team.lead;
  //   yield team.manager;
  //   yield team.engineering;
  //   // const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  //   // console.log("testingTeamGenerator:", testingTeamGenerator);
  //   // yield* testingTeamGenerator;
  //   yield* team.testingTeam;
  // }

  const names = [] as string[];
  // for (let name of TeamIterator(engineeringTeam)) {
  //   names.push(name);
  // }
  for (let name of engineeringTeam) {
    names.push(name);
  }
  console.log({ names });

  //^ RangeError: Maximum call stack size exceeded
  // class Comment {
  //   content: string;
  //   children: Comment[];

  //   constructor(content: string, children: Comment[]) {
  //     this.content = content;
  //     this.children = children;
  //   }

  //   *[Symbol.iterator](): Generator<string, void, unknown> {
  //     yield this.content;
  //     for (let child of children) {
  //       yield* child;
  //     }
  //   }
  // }

  // const children = [new Comment("good comment", []), new Comment("bad comment", []), new Comment("meh comment", [])];
  // const tree = new Comment("Great Post!", children);
  // console.log("tree", tree);

  // const values = [];
  // for (let value of tree) {
  //   values.push(value);
  // }
  // console.log({ values });
}

//^ JS Recursion
const fibonacci = (n: number): number => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log("fibonacci(10):", fibonacci(10)); //55

const factorial = (n: number): number => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log("factorial(10):", factorial(10)); // 3628800

{
  //* Promises and Fetch
  // const promise = new Promise<void>((resolve, _reject) => {
  //   // _reject();
  //   const request = new XMLHttpRequest();
  //   // console.log("request:", request);
  //   request.onload = () => {
  //     resolve();
  //   };
  // });

  // promise
  //   .then(() => console.log("finally finished"))
  //   .then(() => console.log("I was also ran!"))
  //   .catch((err: Error) => console.log("finally unfinished", err));
  // console.log("promise:", promise);

  //@ Better to use library like axios or jQuery Ajax!
  const url = "https://jsonplaceholder.typicode.com/posts/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log({ data }))
    .catch((err) => console.log({ err }));

  $.ajax({
    url: url,
    type: "GET",
    dataType: "json", // added data type
    success: function (res: JQuery.jqXHR<any>) {
      console.log(res);
    },
  });
}
