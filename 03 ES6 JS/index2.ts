export {};

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
  //* template string
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
  //* arrow functions
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
