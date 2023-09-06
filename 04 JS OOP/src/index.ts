// const Funcs = {
//   funArr: ["2x+3", "2x^2+3x+4"],

//   derrMethod: function (farr: string[], kof: string, id: string) {
//     if (kof == "liniowa") {
//       let funEl = farr[0];
//       let a = funEl.slice(0, -3);
//       let b = parseInt(a) as number;
//       let rd = b;
//       document.getElementById(id)!.innerHTML += "Pochodna funkcji liniowej " + farr[0] + "=> dy= " + rd + "<br>";
//     } else if (kof == "kwadratowa") {
//       let funEl = farr[1];
//       let a = funEl.slice(0, -8);
//       let a_2 = parseInt(a);
//       let power = funEl.slice(3, -5);
//       let power_2 = parseInt(power);
//       let b = funEl.slice(5, -3);
//       let b_2 = parseInt(b);
//       document.getElementById(id)!.innerHTML +=
//         "Pochodna funkcji kwadratowej " + farr[1] + "=> dy= " + power_2 * a_2 + "x + " + b_2 + "<br>";
//     }
//   },
// };
// Funcs.derrMethod(Funcs.funArr, "kwadratowa", "Pochodna");
// Funcs.derrMethod(Funcs.funArr, "liniowa", "Pochodna2");

// const obj = {
//   funEx1: "2x^2+4x+3",
//   funEx2: "",
//   afactor: 2,
//   bfactor: 4,
//   cfactor: 3,
//   deltaMethod: function (f: any) {
//     let a = f.slice(0, -8);
//     a = parseInt(a);
//     let b = f.slice(5, -3);
//     b = parseInt(b);
//     let c = f.slice(8);
//     c = parseInt(c);
//     // console.log("this:", this);
//     // console.log("obj:", obj);
//     // console.log("this === obj:", this === obj);
//     if (a == this.afactor && b == this.bfactor && c == this.cfactor) {
//       document.getElementById("Answer")!.innerHTML = "Współczynniki się zgadzają !!!";
//       let delta = Math.pow(b, 2) - 4 * a * c;
//       document.getElementById("Delta")!.innerHTML = "Delta jest równa: " + delta;
//     } else {
//       document.getElementById("Answer")!.innerHTML = "Współczynniki się nie zgadzają !!!";
//       document.getElementById("Delta")!.innerHTML = "Zatem jak na złość nie będzie też Delty !!!";
//     }
//   },
// };

// // obj.funEx1 = "2x^2+4x+3";
// obj.funEx2 = "3x^2+5x+4";
// obj.deltaMethod(obj.funEx1);

function Straight(this: any, x1: string, x2: string, y1: string, y2: string) {
  this.x1 = x1;
  this.x2 = x2;
  this.y1 = y1;
  this.y2 = y2;

  this.resx = 0;
  this.resy = 0;

  this.fineRes = "";

  this.xdiff = function () {
    let result = this.x2 - this.x1;

    return result;
  };
  this.ydiff = function () {
    let result = this.y2 - this.y1;
    return result;
  };

  this.x1 = parseInt(this.x1);
  this.x2 = parseInt(this.x2);
  this.y1 = parseInt(this.y1);
  this.y2 = parseInt(this.y2);

  this.generateStraight = function () {
    this.resx = this.xdiff();
    this.resy = this.ydiff();
    return "(y - " + this.y1 + ")" + this.resx + " - " + this.resy + "(x - " + this.x1 + ") = 0 !!!";
  };

  this.genFinePattern = function () {
    this.fineRes = "y = " + this.resy / this.resx + "x + " + this.resy / this.resx;
    return this.fineRes;
  };
}

function genPattern() {
  const x1 = (document.getElementById("x1") as HTMLInputElement).value;
  const x2 = (document.getElementById("x2") as HTMLInputElement).value;
  const y1 = (document.getElementById("y1") as HTMLInputElement).value;
  const y2 = (document.getElementById("y2") as HTMLInputElement).value;

  const patternOfStraight = new (Straight as any)(x1, x2, y1, y2);

  const str = patternOfStraight.generateStraight();

  (document.getElementById("straight") as HTMLParagraphElement).innerHTML = str;

  const fineStr = patternOfStraight.genFinePattern();

  (document.getElementById("fine") as HTMLParagraphElement).innerHTML = fineStr;
}
