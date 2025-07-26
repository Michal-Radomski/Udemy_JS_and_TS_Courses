//^ Data Structures
//* Class Syntax
class Student {
  firstName: string;
  lastName: string;
  grade: number;
  tardies: number;
  scores: number[];
  constructor(firstName: string, lastName: string, year: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName(): string {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate(): string {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score: number): number[] {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage(): number {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

const firstStudent = new Student("Colt", "Steele", 1);
const secondStudent = new Student("Blue", "Steele", 2);

console.log(firstStudent, secondStudent);
