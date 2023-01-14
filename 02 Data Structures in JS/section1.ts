// Constructor functions

interface UserInterface {
  getEmailAddress(): void;
  emailDomain: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}

function User(this: any, firstName: string, lastName: string, age: number, gender: string) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  // console.log("this:", this, typeof this);
}

const user1: UserInterface = new (User as any)("John", "Smith", 26, "male");
console.log("user1.firstName:", user1.firstName);
// console.log("user1:", user1);

const user200: UserInterface = new (User as any)("Jill", "Robinson", 25, "female");
// console.log("user200:", user200);
console.log("user200.age:", user200.age);

User.prototype.emailDomain = "@facebook.com";
// console.log(user1); //* Does not show the emailDomain
// console.log(user1.emailDomain); //* Shows the emailDomain

User.prototype.getEmailAddress = function () {
  // console.log("this:", this);
  return this.firstName + this.lastName + this.emailDomain;
};
console.log("user1.getEmailAddress():", user1.getEmailAddress());
console.log("user200.getEmailAddress():", user200.getEmailAddress());
