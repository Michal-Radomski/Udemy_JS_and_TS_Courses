//* Classes
// The old way
// function SuperHero(this: any, name: string, strength: number, speed: number, weapon: string, cape: boolean):void {
//   this.name = name;
//   this.strength = strength;
//   this.speed = speed;
//   this.weapon = weapon;
//   this.cape = cape;
//   // this.goodHero = true;
//   // this.powerUp = function(){
//   // 	this.strength += 5;
//   // }
// }

// SuperHero.prototype.goodHero = true;
// SuperHero.prototype.powerUp = function () {
//   this.strength += 5;
// };

// const hero1 = new (SuperHero as any)("Hank", 10, 5, "Fist", true);
// hero1.name = "Ed";
// hero1.powerUp();
// console.log({ hero1 }, typeof hero1);

// ES6
class SuperHero {
  // name: string;
  strength: number;
  speed: number;
  weapon: string;
  cape: boolean;
  constructor(_name: string, strength: number, speed: number, weapon: string, cape: boolean) {
    // this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.weapon = weapon;
    this.cape = cape;
  }
  powerUp() {
    this.strength += 5;
  }

  public get name() {
    console.log("Getting Name"); //* default public
    return name;
  }
  public set name(newName) {
    // console.log("Setting name"); //* default public
    this.name = newName;
  }
  static goodHero() {
    return true;
  }
}
console.log("SuperHero:", SuperHero);

const hero1: SuperHero = new SuperHero("Hank", 10, 5, "Fist", true);
// hero1.name = "Ed";
console.log({ hero1 }, typeof hero1);

const hankDetails = ["Hank", 10, 5, "Fist", true] as const;
const philDetails = ["Phil", 15, 1, "Fist2", false] as const;

const hero2 = new SuperHero(...hankDetails);
const hero3 = new SuperHero(...philDetails);
// hero2.name = "George"; // Error

hero2.powerUp();
hero2.speed = 2;

console.log({ hero2, hero3 });

class DoMath {
  static add(x: number, y: number) {
    return x + y;
  }
  static subtract(x: number, y: number) {
    return x - y;
  }
  static square(x: number) {
    return x * x;
  }
}

const x = DoMath.add(2, 5);
console.log({ x });
console.log("DoMath.square(5):", DoMath.square(5));
