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

//@ ES5 constructor function
// function Straight(this: any, x1: string, x2: string, y1: string, y2: string) {
//   this.x1 = x1;
//   this.x2 = x2;
//   this.y1 = y1;
//   this.y2 = y2;

//   this.resx = 0;
//   this.resy = 0;
//   this.fineRes = "";

//   this.xdiff = function () {
//     let result = this.x2 - this.x1;
//     return result;
//   };

//   this.ydiff = function () {
//     let result = this.y2 - this.y1;
//     return result;
//   };

//   this.x1 = parseInt(this.x1);
//   this.x2 = parseInt(this.x2);
//   this.y1 = parseInt(this.y1);
//   this.y2 = parseInt(this.y2);

//   this.generateStraight = function () {
//     this.resx = this.xdiff();
//     this.resy = this.ydiff();
//     return "(y - " + this.y1 + ")" + this.resx + " - " + this.resy + "(x - " + this.x1 + ") = 0 !!!";
//   };

//   this.genFinePattern = function () {
//     this.fineRes = "y = " + this.resy / this.resx + "x + " + this.resy / this.resx;
//     return this.fineRes;
//   };
// }

// function genPattern() {
//   const x1 = (document.getElementById("x1") as HTMLInputElement).value;
//   const x2 = (document.getElementById("x2") as HTMLInputElement).value;
//   const y1 = (document.getElementById("y1") as HTMLInputElement).value;
//   const y2 = (document.getElementById("y2") as HTMLInputElement).value;

//   const patternOfStraight = new (Straight as any)(x1, x2, y1, y2);
//   const str = patternOfStraight.generateStraight();
//   (document.getElementById("straight") as HTMLParagraphElement).innerHTML = str;
//   const fineStr = patternOfStraight.genFinePattern();
//   (document.getElementById("fine") as HTMLParagraphElement).innerHTML = fineStr;
// }

//@ ES5 constructor function
// function CheckParallel(this: any) {
//   this.funArr1 = ["2x+4", "2x+3"];
//   this.funArr2 = ["3x+3", "-3x+4"];

//   this.funEl1 = "";
//   this.funEl2 = "";
//   this.funEl3 = "";
//   this.funEl4 = "";

//   this.resa1 = "";
//   this.resa2 = "";
//   this.resa3 = "";
//   this.resa4 = "";

//   this.info1 = "";
//   this.info2 = "";

//   this.resParallel = function () {
//     this.funEl1 = this.funArr1[0];
//     this.resa1 = this.funEl1.slice(0, -3);
//     this.funEl2 = this.funArr1[1];
//     this.resa2 = this.funEl2.slice(0, -3);
//     this.resa1 = parseInt(this.resa1);
//     this.resa2 = parseInt(this.resa2);

//     if (this.resa1 == this.resa2) {
//       this.info1 = "te proste są równoległe";
//       return this.info1;
//     } else {
//       this.info1 = "te proste nie są równoległe";
//       return this.info1;
//     }
//   };

//   this.resNoParallel = function () {
//     this.funEl3 = this.funArr2[0];
//     this.resa3 = this.funEl3.slice(0, -3);
//     this.funEl4 = this.funArr2[1];
//     this.resa4 = this.funEl4.slice(0, -3);
//     this.resa3 = parseInt(this.resa3);
//     this.resa4 = parseInt(this.resa4);
//     let resDiv = this.resa3 / this.resa4;

//     if (resDiv == -1) {
//       this.info2 = "proste są prostopadłe";
//       return this.info2;
//     } else {
//       this.info2 = "proste nie są prostopadłe";
//       return this.info2;
//     }
//   };
// }

// (function CheckFunction() {
//   const check = new (CheckParallel as any)();
//   const checkParallel = check.resParallel();
//   (document.getElementById("parallel") as HTMLParagraphElement).innerHTML = checkParallel;
//   const checkNoParallel = check.resNoParallel();
//   (document.getElementById("noParallel") as HTMLParagraphElement).innerHTML = checkNoParallel;
// })();

//@ ES5 constructor function
// function CheckingIncreasing(this: any) {
//   // console.log("this:", this);
//   this.m1 = "";
//   this.m2 = "";

//   this.linearFunArr = ["(m-7)x+4", "(m+6)x+6"];
//   this.strFun1 = "";
//   this.strFun2 = "";
//   this.afactor1 = "";
//   this.afactor2 = "";
//   this.val1 = "";
//   this.val2 = "";
//   this.res1 = "";
//   this.res2 = "";

//   this.checkingFirstFun = function () {
//     this.strFun1 = this.linearFunArr[0];
//     this.afactor1 = this.strFun1.slice(1, -4);
//     // console.log("this.afactor1:", this.afactor1);

//     this.m1 = this.afactor1.slice(0, -2);
//     this.val1 = this.afactor1.slice(1);
//     this.res1 = "" + this.m1 + " > " + this.val1;
//     return this.res1;
//   };

//   this.checkingSecondFun = function () {
//     this.strFun2 = this.linearFunArr[1];
//     this.afactor2 = this.strFun2.slice(1, -4);
//     this.m2 = this.afactor2.slice(0, -2);
//     this.val2 = this.afactor2.slice(1);
//     this.res2 = "" + this.m2 + " > " + this.val2;
//     return this.res2;
//   };
// }

// (function Make() {
//   const obj = new (CheckingIncreasing as any)();
//   // console.log("obj;", obj);
//   const resultPar1 = obj.checkingFirstFun();
//   (document.getElementById("resultPar1") as HTMLParagraphElement).innerHTML = resultPar1;
//   const obj2 = new obj.constructor();
//   // console.log("obj2;", obj2);
//   const resultPar2 = obj2.checkingFirstFun();
//   (document.getElementById("resultPar2") as HTMLParagraphElement).innerHTML = resultPar2;
// })();

//@ ES5 constructor function
// function CheckingFactors(this: any) {
//   this.funsArr = ["(m-3)x^2+4x+2", "4x^2+(m+4)x+5", "5x^2+4x+(m-1)"];
//   this.afactor = "";
//   this.bfactor = "";
//   this.cfactor = "";
//   this.resultInfo = "";
//   this.firstFunChecking = function () {
//     this.strFun = this.funsArr[0];
//     this.afactor = this.strFun.slice(1, -9);
//     this.bfactor = this.strFun.slice(9, -3);
//     this.cfactor = this.strFun.slice(12);
//     if (this.afactor.includes("m") == true && this.bfactor.includes("m") == false && this.cfactor.includes("m") == false) {
//       this.resultInfo = "Funkcja " + this.strFun + " posiada parametr m jedynie we współczynniku a";
//     }
//     return this.resultInfo;
//   };

//   this.secondFunChecking = function () {
//     this.strFun = this.funsArr[1];
//     this.afactor = this.strFun.slice(0, -11);
//     this.bfactor = this.strFun.slice(6, -5);
//     this.cfactor = this.strFun.slice(12);
//     if (this.afactor.includes("m") == false && this.bfactor.includes("m") == true && this.cfactor.includes("m") == false) {
//       this.resultInfo = "Funkcja " + this.strFun + " posiada parametr m tylko we współczynniku b";
//     }
//     return this.resultInfo;
//   };
//   this.thirdFunChecking = function () {
//     this.strFun = this.funsArr[2];
//     this.afactor = this.strFun.slice(0, -12);
//     this.bfactor = this.strFun.slice(5, -7);
//     this.cfactor = this.strFun.slice(9);
//     if (this.afactor.includes("m") == false && this.bfactor.includes("m") == false && this.cfactor.includes("m") == true) {
//       this.resultInfo = "Funkcja " + this.strFun + " posiada parametr m tylko we współczynniku c";
//     }
//     return this.resultInfo;
//   };
// }
// function SomeFun() {}

// (function Make() {
//   const obj = new (CheckingFactors as any)();
//   const resultFun1 = obj.firstFunChecking();
//   (document.getElementById("resultFun1") as HTMLParagraphElement).innerHTML = resultFun1;
//   const resultFun2 = obj.secondFunChecking();
//   (document.getElementById("resultFun2") as HTMLParagraphElement).innerHTML = resultFun2;
//   const resultFun3 = obj.thirdFunChecking();
//   (document.getElementById("resultFun3") as HTMLParagraphElement).innerHTML = resultFun3;
//   const check = resultFun1 instanceof SomeFun;
//   if (check == true) {
//     (document.getElementById("inst") as HTMLParagraphElement).innerHTML = "instancja typu SomeFun";
//   } else {
//     (document.getElementById("inst") as HTMLParagraphElement).innerHTML = "instancja typu CheckingFactors";
//   }
//   const someFun = new (SomeFun as any)();
//   // console.log("someFun:", someFun);

//   const checkSF = someFun instanceof SomeFun;
//   // console.log("checkSF:", checkSF);
//   if (checkSF == true) {
//     (document.getElementById("instSF") as HTMLParagraphElement).innerHTML = "instancja typu SomeFun";
//   }
// })();

//@ ES5 constructor function
// function CheckingFactors(this: any) {
//   this.funsArr = ["x^2+4x+2"];
//   this.afactor = "";
//   this.bfactor = "";
//   this.cfactor = "";

//   this.firstFunChecking = function (linn: string) {
//     this.strFun = "(" + linn + ")" + this.funsArr[0];
//     this.afactor = this.strFun.slice(0, -8);
//     this.bfactor = this.strFun.slice(9, -3);
//     this.cfactor = this.strFun.slice(12);
//     return {
//       funEx: this.strFun,
//       afactor: linn,
//       bfactor: this.bfactor,
//       cfactor: this.cfactor,
//     };
//   };

//   this.secondFunChecking = function (af: string, bf: string, cf: string) {
//     this.strFun = "(" + af + ")x^2+" + "(" + bf + ")x+(" + cf + ")";
//     this.afactor = this.strFun.slice(0, -16);
//     this.bfactor = this.strFun.slice(10, -7);
//     this.cfactor = this.strFun.slice(17);
//     af = this.afactor;
//     bf = this.bfactor;
//     cf = this.cfactor;
//     return {
//       funEx: this.strFun,
//       afactor: af,
//       bfactor: bf,
//       cfactor: cf,
//     };
//   };
// }
// function SomeFun() {}

// (function Make() {
//   const obj = new (CheckingFactors as any)();
//   // console.log("obj:", obj);

//   const resultFun = obj.firstFunChecking("m-5");
//   (document.getElementById("resultFunEx") as HTMLParagraphElement).innerHTML = resultFun.funEx;
//   (document.getElementById("resultFunLinn") as HTMLParagraphElement).innerHTML = resultFun.afactor;
//   (document.getElementById("resultFunBFact") as HTMLParagraphElement).innerHTML = resultFun.bfactor;
//   (document.getElementById("resultFunCFact") as HTMLParagraphElement).innerHTML = resultFun.cfactor;

//   const resultFun2 = obj.secondFunChecking("2m-4", "m-3", "m-6");
//   (document.getElementById("resultFunEx2") as HTMLParagraphElement).innerHTML = resultFun2.funEx;
//   (document.getElementById("resultFunLinn2") as HTMLParagraphElement).innerHTML = resultFun2.afactor;
//   (document.getElementById("resultFunBFact2") as HTMLParagraphElement).innerHTML = resultFun2.bfactor;
//   (document.getElementById("resultFunCFact2") as HTMLParagraphElement).innerHTML = resultFun2.cfactor;
// })();

//@ ES5 constructor function
// const objFunPattern = {
//   wX: function () {
//     return (document.getElementById("wX") as HTMLInputElement).value;
//   },
//   wY: function () {
//     return (document.getElementById("wY") as HTMLInputElement).value;
//   },
//   Ax: function () {
//     return (document.getElementById("Ax") as HTMLInputElement).value;
//   },
//   Ay: function () {
//     return (document.getElementById("Ay") as HTMLInputElement).value;
//   },
// };

// function MakePattern() {
//   let a = 0;
//   let pattern = "";
//   const wX = Number(objFunPattern.wX());
//   const wY = Number(objFunPattern.wY());
//   const Ax = Number(objFunPattern.Ax());
//   const Ay = Number(objFunPattern.Ay());
//   a = (Ay - wY) / (Ax - wX);
//   pattern = "y= " + a + "*(x+" + wX + ")^2+" + wY;
//   (document.getElementById("resultPattern") as HTMLInputElement).innerHTML = pattern;
// }

// const btn = document.getElementById("btn") as HTMLButtonElement;

// btn.addEventListener("click", MakePattern);
// const objCopy = objFunPattern;
// // console.log("objCopy===objFunPattern:", objCopy === objFunPattern);

// function MakeCopyPattern() {
//   let ca = 0;
//   let cpattern = "";
//   const cwX = Number(objCopy.wX());
//   const cwY = Number(objCopy.wY());
//   const cAx = Number(objCopy.Ax());
//   const cAy = Number(objCopy.Ay());
//   ca = (cAy - cwY) / (cAx - cwX);
//   cpattern = "y= " + ca + "*(x+" + cwX + ")^2+" + cwY;
//   (document.getElementById("resultCopyPattern") as HTMLParagraphElement).innerHTML = cpattern;
// }
// btn.addEventListener("click", MakeCopyPattern);

//@ ES5 constructor function
// const linearFunObj1 = {
//   la: function () {
//     return (document.getElementById("apar1") as HTMLInputElement).value;
//   },
//   lb: function () {
//     return (document.getElementById("bpar1") as HTMLInputElement).value;
//   },
// };
// const linearFunObj2 = {
//   la: function () {
//     return (document.getElementById("apar2") as HTMLInputElement).value;
//   },
//   lb: function () {
//     return (document.getElementById("bpar2") as HTMLInputElement).value;
//   },
// };

// function compareObjects() {
//   const linearFun1 = linearFunObj1;
//   const linearFun2 = linearFunObj1;
//   if (linearFunObj1 === linearFunObj2) {
//     (document.getElementById("objectCompareResult") as HTMLParagraphElement).innerHTML = "Te dwa obiekty są równe";
//   } else {
//     (document.getElementById("objectCompareResult") as HTMLParagraphElement).innerHTML = "Te dwa obiekty nie są równe";
//   }
//   if (linearFun1 === linearFun2) {
//     (document.getElementById("referenceCompareResult") as HTMLParagraphElement).innerHTML = "Te dwa obiekty są równe";
//   } else {
//     (document.getElementById("referenceCompareResult") as HTMLParagraphElement).innerHTML = "Te dwa obiekty nie są równe";
//   }
// }

// function makePatterns() {
//   const a1 = linearFunObj1.la();
//   const b1 = linearFunObj1.lb();
//   const a2 = linearFunObj2.la();
//   const b2 = linearFunObj2.lb();
//   const y1 = a1 + "x+" + b1;
//   const y2 = a2 + "x+" + b2;
//   (document.getElementById("linearFunPatt1") as HTMLParagraphElement).innerHTML = y1;
//   (document.getElementById("linearFunPatt2") as HTMLParagraphElement).innerHTML = y2;
// }
// const btn = document.getElementById("btn") as HTMLButtonElement;
// btn.addEventListener("click", compareObjects);
// btn.addEventListener("click", makePatterns);

// let funArr = new Array() as any[];
// // console.log("funArr:", funArr);
// function MakeFunsArray() {
//   let pattern = "";
//   let funItems = "" as any;
//   function createFunPattern() {
//     const a = (document.getElementById("a") as HTMLInputElement).value;
//     const b = (document.getElementById("b") as HTMLInputElement).value;
//     pattern = a + "x+" + b;
//     return pattern;
//   }
//   function fillArray(patt: string) {
//     funArr.push(patt);
//     return funArr;
//   }

//   pattern = createFunPattern();
//   funArr = fillArray(pattern);
//   funItems = document.getElementsByClassName("li");
//   // console.log("funItems:", funItems);
//   for (let i = 0; i < funArr.length; i++) {
//     funItems[i].innerHTML = funArr[i];
//   }
//   function arrModification() {
//     const moda = (document.getElementById("moda") as HTMLInputElement).value;
//     let arrEl = funArr[0];
//     arrEl = Array.from(arrEl);
//     // console.log({ arrEl });
//     arrEl.splice(0, 1, moda);
//     let pattern = arrEl.toString();
//     pattern = pattern.replace(/,/g, "");
//     funItems[0].innerHTML = pattern;
//   }
//   const modBtn = document.getElementById("modBtn") as HTMLButtonElement;
//   modBtn.addEventListener("click", arrModification);
// }
// const btn = document.getElementById("btn") as HTMLButtonElement;
// btn.addEventListener("click", MakeFunsArray);

//* Array Constructor
const arrayEmpty = new Array(2);
// console.log({ arrayEmpty });

//* Object Constructor
const obj: any = new Object();
obj.foo = 42;
// console.log({ obj });

//* Boolean Constructor
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bFalse = new Boolean(false);
// console.log({ bZero, bNull, bEmptyString, bFalse });

// console.log("typeof bFalse:", typeof bFalse);
// console.log("Boolean(bFalse):", Boolean(bFalse));

const bTrue = new Boolean(true);
const bTrueString = new Boolean("true");
// console.log({ bTrue, bTrueString });

const bTrueValue = bTrue.valueOf();
const bTrueToString = bTrue.toString();
// console.log({ bTrueValue, bTrueToString });

//* Number Constructor
const a = new Number("123"); // a === 123 is false //* Object
const b = Number("123"); // b === 123 is true //* Number

console.log({ a, b });
console.log("a instanceof Number:", a instanceof Number); // true
console.log("b instanceof Number:", (b as any) instanceof Number); // false

console.log("typeof a:", typeof a, "typeof b", typeof b); // object, number
