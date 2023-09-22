//* Classes
// The old way
function SuperHero(this: any, name: string, strength: number, speed: number, weapon: string, cape: boolean) {
  this.name = name;
  this.strength = strength;
  this.speed = speed;
  this.weapon = weapon;
  this.cape = cape;
  // this.goodHero = true;
  // this.powerUp = function(){
  // 	this.strength += 5;
  // }
}

SuperHero.prototype.goodHero = true;
SuperHero.prototype.powerUp = function () {
  this.strength += 5;
};

let hero1 = new (SuperHero as any)("Hank", 10, 5, "Fist", true);
hero1.name = "Ed";
hero1.powerUp();
console.log({ hero1 });
