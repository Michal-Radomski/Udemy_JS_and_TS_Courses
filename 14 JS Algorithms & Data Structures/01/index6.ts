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

  static enrollStudents(): string {
    // Static methods can't be called through a class instance!
    return "ENROLLING STUDENTS!";
  }
}

const firstStudent = new Student("Colt", "Steele", 1);
const secondStudent = new Student("Blue", "Steele", 2);
console.log(Student.enrollStudents()); // ENROLLING STUDENTS!

console.log(firstStudent, secondStudent);

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static distance(a: Point, b: Point): number {
    // Static methods can't be called through a class instance!
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
