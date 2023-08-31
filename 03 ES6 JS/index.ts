//* 00 Nested forEach loop
const datesArray = ["2019-01-11", "2019-01-12", "2019-01-13", "2019-01-14"] as string[];
const timesArray = ["00:00:00", "06:00:00", "12:00:00", "18:00:00"] as string[];
const datesTimesArray = [] as string[];

datesArray.forEach((date: string, datesIndex: number) => {
  timesArray.forEach((time: string, timesIndex: number) => {
    if (datesIndex === timesIndex) {
      datesTimesArray.push(datesIndex + " -> " + date + " " + time);
    }
  });
});
// console.log("datesTimesArray:", datesTimesArray);

{
  //* 01 forEach
  //@ Params: element, index, array, Return value: none (undefined)
  // Old way - for loop
  const colors = ["red", "blue", "green"];
  // for (var i = 0; i < colors.length; i++) {
  //   console.log(colors[i]);
  // }
  colors.forEach(function (color, index) {
    console.log(color, index);
  });
  colors.forEach((color, index) => console.log(color, index));

  const numbers = [1, 2, 3, 4, 5];
  let sum = 0;
  let sum2 = 0;

  //* V1
  // numbers.forEach(function (number, index) {
  //   sum += number;
  //   sum2 += index;
  // });

  //* V2
  function adder(number: number, index: number) {
    sum += number;
    sum2 += index;
  }
  numbers.forEach(adder);
  // console.log({ sum, sum2 });

  const images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 },
  ];
  let areas = [] as number[];

  images.forEach((image) => areas.push(image.height * image.width));
  // console.log({ areas });
}

{
  //* 02 map
  //@ Params: element, index, array, Return value: new Array
  const numbers = [1, 2, 3]; //* unchanged!
  // const doubledNumbers = [] as number[];
  // for (let i = 0; i < numbers.length; i++) {
  //   doubledNumbers.push(numbers[i] * 2);
  // }

  // const doubledNumbers = numbers.map(function (number) {
  //   return number * 2;
  // });
  const doubledNumbers = numbers.map((number) => number * 2);
  console.log("doubledNumbers:", doubledNumbers);

  const cars = [
    { model: "Buick", price: "Cheap" },
    { model: "Camaro", price: "Expensive" },
  ];
  const prices = cars.map((car) => car.price);
  console.log({ prices });

  interface Paint {
    color: string;
  }

  const paints = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];
  function pluck(array: Array<Paint>, property: string) {
    const returnArray = array.map((elem) => elem[property as keyof Paint]);
    return returnArray;
  }
  console.log(pluck(paints, "color"));
}

{
  //* 03 filter
  //@ Params: element, index, array, Return value: a shallow copy of a portion of the given array
  const products = [
    { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
    { name: "banana", type: "fruit", quantity: 10, price: 15 },
    { name: "celery", type: "vegetable", quantity: 30, price: 9 },
    { name: "orange", type: "fruit", quantity: 3, price: 5 },
  ];

  // const vegetables = [] as {
  //   name: string;
  //   type: string;
  // }[];
  // for (var i = 0; i < products.length; i++) {
  //   if (products[i].type === "vegetable") {
  //     vegetables.push(products[i]);
  //   }
  // }
  // console.log({ vegetables });

  // const fruits = products.filter((product) => product.type === "fruit");
  // console.log({ fruits });

  //* Filter: type is "vegetable" and quantity > 0 and price < 10
  const filteredProducts = products.filter(
    (product) => product.type === "vegetable" && product.quantity > 0 && product.price < 10
  );
  console.log({ filteredProducts });

  interface Post {
    id: number;
    title: string;
  }
  interface Comment {
    postId: number;
    content: string;
  }

  const post: Post = { id: 4, title: "New Post" };
  const comments: Comment[] = [
    { postId: 4, content: "Nice post" },
    { postId: 3, content: "It was oki" },
    { postId: 4, content: "Neat" },
  ];

  const commentsForPosts = (post: Post, comments: Comment[]) => {
    return comments.filter((comment) => comment.postId === post.id);
  };
  console.log("commentsForPosts(post, comments):", commentsForPosts(post, comments));

  // const numbers = [10, 20, 30];
  // function reject(array: Array<number>, iteratorFunction: Function) {
  //   return array.filter((element) => {
  //     return !iteratorFunction(element);
  //   });
  // }
  // const lessThanFifteen = reject(numbers, function (number: number) {
  //   return number > 15;
  // });
  // console.log({ lessThanFifteen });
}

{
  //* 03 find
  //@ Params: element, index, array, Return value: The first element in the array that satisfies the provided testing function or undefined
  const users = [
    { name: "Jill", id: 1 },
    { name: "Alex", id: 2 },
    { name: "Bill", id: 3 },
    { name: "Alex", id: 4 },
  ];

  // V1 -> old version
  // let user = { name: "" };
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].name === "Alex") {
  //     user = users[i];
  //     break;
  //   }
  // }
  // console.log({ user });

  // V2 -> ES6
  // const user2 = users.find((user) => user.name === "Alex");
  // console.log({ user2 });

  class Car {
    model: string;
    constructor(model: string) {
      this.model = model;
    }
  }

  const cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")] as Car[];
  // console.log("cars:", cars);

  const focus = cars.find((car) => car.model === "Focus") as Car;
  console.log({ focus });

  interface Post {
    id: number;
    title: string;
  }
  interface Comment {
    postId: number;
    content: string;
  }

  const posts = [
    { id: 1, title: "New Post" },
    { id: 2, title: "Old Post" },
  ];
  const comment = { postId: 1, content: "Great Post" };

  function postForComment(posts: Post[], comment: Comment) {
    return posts.find((post) => post.id === comment.postId);
  }
  console.log("postForComment(posts, comment):", postForComment(posts, comment));

  const ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 },
  ];

  function findWhere(array: any[], criteria: { [x: string]: number }) {
    const criteriaProperty = Object.keys(criteria)[0];
    // console.log({ criteriaProperty });
    const res = array.find((elem) => elem[criteriaProperty] === criteria[criteriaProperty]);
    console.log({ res });
    return res;
  }
  findWhere(ladders, { height: 25 });
}

{
  //* 03 every and some
  //@ Params: element, index, array, Return value: true or false (for both)
  const computers = [
    { name: "Apple", ram: 24 },
    { name: "Compaq", ram: 4 },
    { name: "Acer", ram: 32 },
  ];

  const allComputersCanRunProgram = computers.every((computer) => computer.ram > 16);
  const onlySomeComputersCanRunProgram = computers.some((computer) => computer.ram > 16);
  console.log({ allComputersCanRunProgram, onlySomeComputersCanRunProgram });
}
