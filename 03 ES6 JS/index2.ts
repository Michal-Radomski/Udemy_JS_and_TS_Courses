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
}