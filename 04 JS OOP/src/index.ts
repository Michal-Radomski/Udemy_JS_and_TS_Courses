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
const boolean = Boolean(true);
// console.log({ boolean }, typeof boolean);

//* Number Constructor
const a = new Number("123"); // a === 123 is false //* Object
const b = Number("123"); // b === 123 is true //* Number

// console.log({ a, b });
// console.log("a instanceof Number:", a instanceof Number); // true
// console.log("b instanceof Number:", (b as any) instanceof Number); // false

// console.log("typeof a:", typeof a, "typeof b", typeof b); // object, number

//* Regex Constructor
// const regex1 = /\w+/ as RegExp;
// const regex2 = new RegExp("\\w+") as RegExp;

// console.log({ regex1 }, typeof regex1); // Expected output: /\w+/
// console.log({ regex2 }, typeof regex2); // Expected output: /\w+/
// console.log("regex1 === regex2:", regex1 === regex2); // Expected output: false

// const paragraph: string = "The quick brown fox jumps over the lazy dog. It barked.";
// const regex: RegExp = /[A-Z]/g;
// const regex3: RegExp = /[1-9]/g;

//* string + match
// const found = paragraph.match(regex) as RegExpMatchArray;
// console.log({ found }); // Expected output: Array ["T", "I"]s
// const found3 = paragraph.match(regex3) as RegExpMatchArray;
// console.log({ found3 }); //* null !!!

//* Regex + match
// const csLewisQuote = "We are what we believe we are.";
// const regex4 = /are/;
// console.log("csLewisQuote.match(regex4):", csLewisQuote.match(regex4));

// //* String Constructor
// const a_str = new String("Hello world"); // a === "Hello world" is false
// const b_str = String("Hello world"); // b === "Hello world" is true
// console.log({ a_str, b_str }, a_str === b_str);

// console.log("a_str instanceof String:", a_str instanceof String); // true
// console.log("b_str instanceof String:", (b_str as any) instanceof String); // false

// console.log("typeof a_str", typeof a_str);
// console.log("typeof b_str", typeof b_str);

// function Delta(this: any, b: number, a: number, c: number) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.makeDelta = function () {
//     return Math.pow(this.b, 2) - 4 * this.a * this.c;
//   };
//   this.deltaDescription = function () {
//     const delta = this.makeDelta();
//     if (delta > 0) {
//       (document.getElementById("roots") as HTMLParagraphElement).innerHTML =
//         "Istnieją dwa pierwiastki !!! <br>" + ", bo delta jest równa: " + delta + "<br>" + "czyli jest większa od zera";
//     } else if (delta == 0) {
//       (document.getElementById("roots") as HTMLParagraphElement).innerHTML =
//         "istnieje tylko jeden pierwiastek !!! <br>" + ", bo delta jest równa: " + delta;
//     } else {
//       (document.getElementById("roots") as HTMLParagraphElement).innerHTML = "nie ma pierwiastków, bo delta: " + delta;
//     }
//   };
//   this.roots = function () {
//     let delta = this.makeDelta();
//     // console.log({ delta });
//     const x1 = ((-this.b - Math.sqrt(delta)) / 2) * this.a;
//     const x2 = ((-this.b + Math.sqrt(delta)) / 2) * this.a;
//     (document.getElementById("rootsParam") as HTMLParagraphElement).innerHTML = "x1: " + x1 + " x2: " + x2;
//   };
// }
// Delta.prototype.makeDelta2 = function () {
//   return Math.pow(this.b, 2) - 4 * this.a * this.c;
// };
// Delta.prototype.deltaDescription2 = function () {
//   const delta = this.makeDelta2();
//   // console.log({ delta });
//   if (delta > 0) {
//     (document.getElementById("roots") as HTMLParagraphElement).innerHTML = "Istnieją dwa pierwiastki !!!";
//   } else if (delta == 0) {
//     (document.getElementById("roots") as HTMLParagraphElement).innerHTML = "Istnieje tylko jeden pierwiastek";
//   } else {
//     (document.getElementById("roots") as HTMLParagraphElement).innerHTML = "Nie ma pierwiastków";
//   }
// };
// Delta.prototype.roots2 = function () {
//   let delta = this.makeDelta2();
//   const x1 = ((-this.b - Math.sqrt(delta)) / 2) * this.a;
//   const x2 = ((-this.b + Math.sqrt(delta)) / 2) * this.a;
//   (document.getElementById("rootsParam") as HTMLParagraphElement).innerHTML = "x1: " + x1 + " x2: " + x2;
// };
// const result = new (Delta as any)(-4, 1, -5);
// result.makeDelta2();
// result.deltaDescription2();
// result.roots2();
// // result.makeDelta();
// // result.deltaDescription();
// // result.roots();

// console.log("result:", result);
// console.log("Delta:", Delta);

// const qFunObj = {
//   a: 3,
//   b: 4,
//   c: 4,
//   qy: function () {
//     return "y= " + qFunObj.a + "x^2+" + qFunObj.b + "x+" + qFunObj.c;
//   },
//   derrQFun: function () {
//     return "dy= " + 2 * qFunObj.a + "x+" + qFunObj.b;
//   },
// };

// const mesFunObj = {
//   topa: 10,
//   topb: 1,
//   bottoma: 4,
//   bottomb: 3,
//   mFun: function () {
//     return "y= (" + mesFunObj.topa + "x+" + mesFunObj.topb + ")/(" + mesFunObj.bottoma + "x+" + mesFunObj.bottomb + ")";
//   },
//   derrMFun: function () {
//     return mesFunObj.topa / mesFunObj.bottoma;
//   },
// };

// function QFunction(this: any, a: number, b: number, c: number) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
// }
// function MFunction(this: any, ta: number, tb: number, ba: number, bb: number) {
//   this.ta = ta;
//   this.tb = tb;
//   this.ba = ba;
//   this.bb = bb;
// }
// QFunction.prototype = qFunObj;
// MFunction.prototype = mesFunObj;

// const qfun = new (QFunction as any)(1, -4, -5);
// const isProt = qFunObj.isPrototypeOf(qfun);

// (document.getElementById("qFun") as HTMLParagraphElement).innerHTML = "funkcja: " + qFunObj.qy();
// (document.getElementById("derrOfQFun") as HTMLParagraphElement).innerHTML = "pochodna: " + qFunObj.derrQFun();

// if (isProt == true) {
//   (document.getElementById("testProto") as HTMLParagraphElement).innerHTML =
//     "Tak, obiekt qFunObj jest prototypem funkcji " + qFunObj.qy();
// }
// const mesFun = new (MFunction as any)(10, 1, 3, 4);
// const isProt2 = mesFunObj.isPrototypeOf(mesFun);
// if (isProt2 == true) {
//   (document.getElementById("testProto2") as HTMLParagraphElement).innerHTML =
//     "tak, obiekt mesFunObj jest prototypem funkcji" + mesFunObj.mFun();
// }

//* isPrototypeOf
// function Foo() {}
// function Bar() {}

// Bar.prototype = Object.create(Foo.prototype);
// const bar = new (Bar as any)();
// console.log({ bar });
// console.log("Foo.prototype.isPrototypeOf(bar):", Foo.prototype.isPrototypeOf(bar)); // Expected output: true
// console.log("Bar.prototype.isPrototypeOf(bar):", Bar.prototype.isPrototypeOf(bar)); // Expected output: true

//@ ES5 constructor function
// const Person = function (this: any, name: string) {
//   this.name = name;
//   this.type = "human";
// };

// Person.prototype.info = function () {
//   console.log("Name:", this.name, "Type:", this.type);
// };

// const Robot = function (this: any, _name: string) {
//   // console.log("this:",this, typeof this);
//   Person.apply(this, arguments as any);
//   this.type = "robot";
// };

// Robot.prototype = Person.prototype; // Set prototype to Person's
// Robot.prototype.constructor = Robot; // Set constructor back to Robot

// const person = new (Person as any)("Bob");
// const robot = new (Robot as any)("Boutros");

// person.info(); // Name: Bob Type: human
// robot.info(); // Name: Boutros Type: robot

//* Closures
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

//* Prototypes
// function Figure(this: any) {
//   this.name = "figure";
//   this.toString = function () {
//     return this.name;
//   };
// }
// function Figure3d(this: any) {
//   this.name = "figure 3d";
// }
// function Cuboid(this: any, a: number, b: number, h: number) {
//   this.name = "prostopadłościan";
//   this.a = a;
//   this.b = b;
//   this.h = h;
//   this.makeVolume = function () {
//     return this.a * this.b * this.h;
//   };
//   this.makeArea = function () {
//     let areaPart1 = 2 * this.a * this.b;
//     let areaPart2 = 2 * this.b * this.h;
//     let areaPart3 = 2 * this.a * this.h;
//     let fullArea = areaPart1 + areaPart2 + areaPart3;
//     return fullArea;
//   };
// }
// Figure3d.prototype = new (Figure as any)();
// Cuboid.prototype = new (Figure3d as any)();
// function make() {
//   const a = (document.getElementById("a") as HTMLInputElement).value;
//   const b = (document.getElementById("b") as HTMLInputElement).value;
//   const h = (document.getElementById("H") as HTMLInputElement).value;
//   const cuboid1 = new (Cuboid as any)(a, b, h);
//   const fig = cuboid1.toString();
//   const volume = cuboid1.makeVolume();
//   const area = cuboid1.makeArea();
//   (document.getElementById("fig1") as HTMLParagraphElement).innerHTML = fig;
//   (document.getElementById("objetosc") as HTMLParagraphElement).innerHTML = volume;
//   (document.getElementById("pole") as HTMLParagraphElement).innerHTML = area;
// }
// const btn = document.getElementById("btn1") as HTMLButtonElement;
// btn.addEventListener("click", make);
// function triPrism(this: any, a: number, b: number, c: number, th: number, ph: number) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.th = th;
//   this.ph = ph;
//   this.name = "graniastosłup trójkątny";
//   this.volumePrism = function () {
//     const triangleArea = (this.a * this.th) / 2;
//     const prismVol = triangleArea * this.ph;
//     return prismVol;
//   };
//   this.areaPrism = function () {
//     const triangleArea = (this.a * this.th) / 2;
//     const asideArea = this.a * this.ph;
//     const fullArea = 2 * triangleArea + asideArea;
//     return fullArea;
//   };
// }
// triPrism.prototype = new (Figure3d as any)();
// function make2() {
//   const a = (document.getElementById("a") as any).value;
//   const b = (document.getElementById("b") as any).value;
//   const c = (document.getElementById("c") as any).value;
//   const ph = (document.getElementById("H") as any).value;
//   const th = (document.getElementById("th") as any).value;
//   const trip = new (triPrism as any)(a, b, c, th, ph);
//   const fig2 = trip.toString();
//   (document.getElementById("fig2") as HTMLParagraphElement).innerHTML = fig2;
//   const volume2 = trip.volumePrism();
//   const area2 = trip.areaPrism();
//   (document.getElementById("objetosc2") as HTMLParagraphElement).innerHTML = volume2;
//   (document.getElementById("pole2") as HTMLParagraphElement).innerHTML = area2;
// }
// btn.addEventListener("click", make2);

// function Figure() {}
// Figure.prototype.name = "figure";
// Figure.prototype.toString = function () {
//   return this.name;
// };
// function Figure3d(this: any) {
//   this.name = "figure 3d";
// }
// function PyramidTriangleBase(this: any, ap: number, hp: number, ho: number, hb: number) {
//   this.ap = ap;
//   this.hp = hp;
//   this.ho = ho;
//   this.hb = hb;
//   this.name = "ostrosłup o podstawie trójkąta";
//   this.makeVolume = function () {
//     let baseArea = (this.ap * this.hp) / 2;
//     let pyramidTrBaseVolume = (baseArea * this.ho) / 3;
//     return pyramidTrBaseVolume;
//   };
//   this.makeArea = function () {
//     let baseArea = (this.ap * this.hp) / 2;
//     let asideArea = (this.ap * this.hb) / 2;
//     let fullArea = baseArea + 3 * asideArea;
//     return fullArea;
//   };
// }

// function PyramidSquareBase(this: any, ap: string, hb: string, ho: string) {
//   this.ap = ap;
//   this.hb = hb;
//   this.ho = ho;
//   this.name = "ostrosłup o podstawie kwadratu";
//   this.makeVolume = function () {
//     let baseArea = this.ap * this.ap;
//     let pyramidSqBaseVolume = (baseArea * this.ho) / 3;
//     return pyramidSqBaseVolume;
//   };
//   this.makeArea = function () {
//     let baseArea = this.ap * this.ap;
//     let asideArea = (this.ap * this.hb) / 2;
//     let fullArea = baseArea + asideArea * 4;
//     return fullArea;
//   };
// }
// function PyramidPolygonBase(this: any, ap: any, hb: any, ho: any) {
//   this.ap = ap;
//   this.hb = hb;
//   this.ho = ho;
//   this.name = "ostrosłup o podstawie wielokąta foremnego";
//   this.makeVolume = function () {
//     let ctan = 1 / Math.tan((36 * Math.PI) / 180);
//     let baseArea = Math.pow(this.ap, 2) * ctan * 1.25;
//     let pyramidPolyBaseVolume = (baseArea * this.ho) / 3;
//     return pyramidPolyBaseVolume;
//   };
//   this.makeArea = function () {
//     let ctan = 1 / Math.tan((36 * Math.PI) / 180);
//     let baseArea = Math.pow(this.ap, 2) * ctan * 1.25;
//     let asideArea = (this.ap * this.hb) / 2;
//     let fullArea = baseArea + this.ap * asideArea * 5;
//     return fullArea;
//   };
// }
// Figure3d.prototype = Figure.prototype;
// Figure3d.prototype.constructor = Figure3d;

// PyramidTriangleBase.prototype = Figure3d.prototype;
// PyramidTriangleBase.prototype.constructor = PyramidTriangleBase;

// function make() {
//   const ap = (document.getElementById("ap") as HTMLInputElement).value;
//   const hp = (document.getElementById("hp") as HTMLInputElement).value;
//   const ho = (document.getElementById("ho") as HTMLInputElement).value;
//   const hb = (document.getElementById("hb") as HTMLInputElement).value;
//   const pyramidTrBase = new (PyramidTriangleBase as any)(ap, hp, ho, hb);
//   let fig = pyramidTrBase.toString();
//   let volume = pyramidTrBase.makeVolume();
//   let area = pyramidTrBase.makeArea();
//   (document.getElementById("ostro1") as HTMLParagraphElement).innerHTML = fig;
//   (document.getElementById("objetosc") as HTMLParagraphElement).innerHTML = volume;
//   (document.getElementById("pole") as HTMLParagraphElement).innerHTML = area;
// }
// const btn = document.getElementById("btn1") as HTMLButtonElement;
// btn.addEventListener("click", make);

// PyramidSquareBase.prototype = Figure3d.prototype;
// PyramidSquareBase.prototype.constructor = PyramidSquareBase;
// function make2() {
//   const ap = (document.getElementById("ap") as HTMLInputElement).value;
//   const hb = (document.getElementById("hb") as HTMLInputElement).value;
//   const ho = (document.getElementById("ho") as HTMLInputElement).value;
//   const pyramidSquareBase = new (PyramidSquareBase as any)(ap, hb, ho);
//   let fig = pyramidSquareBase.toString();
//   let volume = pyramidSquareBase.makeVolume();
//   let area = pyramidSquareBase.makeArea();
//   (document.getElementById("ostro2") as HTMLParagraphElement).innerHTML = fig;
//   (document.getElementById("objetosc2") as HTMLParagraphElement).innerHTML = volume;
//   (document.getElementById("pole2") as HTMLParagraphElement).innerHTML = area;
// }
// btn.addEventListener("click", make2);
// PyramidPolygonBase.prototype = Figure3d.prototype;
// PyramidPolygonBase.prototype.constructor = PyramidPolygonBase;
// function make3() {
//   const ap = (document.getElementById("ap") as HTMLInputElement).value;
//   const hb = (document.getElementById("hb") as HTMLInputElement).value;
//   const ho = (document.getElementById("ho") as HTMLInputElement).value;
//   const pyramidPoligonBase = new (PyramidPolygonBase as any)(ap, hb, ho);
//   let fig = pyramidPoligonBase.toString();
//   let volume = pyramidPoligonBase.makeVolume();
//   let area = pyramidPoligonBase.makeArea();

//   (document.getElementById("ostro3") as HTMLParagraphElement).innerHTML = fig;
//   (document.getElementById("objetosc3") as HTMLParagraphElement).innerHTML = volume;
//   (document.getElementById("pole3") as HTMLParagraphElement).innerHTML = area;
// }
// btn.addEventListener("click", make3);

// function Figure() {}
// Figure.prototype.name = "figure";
// Figure.prototype.toString = function () {
//   return this.name;
// };
// function Figure3d(this: any) {
//   this.name = "figure 3d";
// }
// function Cone(this: any, rp: number, l: number, hc: number) {
//   this.rp = rp;
//   this.l = l;
//   this.hc = hc;
//   this.name = "bryła stożka";
//   this.makeVolume = function () {
//     let partVolume = Math.PI * Math.pow(this.rp, 2) * this.hc;
//     let volume = partVolume / 3;
//     return volume;
//   };
//   this.makeArea = function () {
//     let baseArea = Math.PI * Math.pow(this.rp, 2);
//     let sideArea = Math.PI * this.rp * this.l;
//     let fullArea = baseArea + sideArea;
//     return fullArea;
//   };
// }
// const tempFun = function () {};
// // console.log("tempFunc:", tempFun);
// tempFun.prototype = Figure.prototype;
// Figure3d.prototype = new (tempFun as any)();
// Figure3d.prototype.constructor = Figure3d;
// tempFun.prototype = Figure3d.prototype;
// Cone.prototype = new (tempFun as any)();
// Cone.prototype.constructor = Cone;

// function make() {
//   const rp = (document.getElementById("rp") as HTMLInputElement).value;
//   const l = (document.getElementById("l") as HTMLInputElement).value;
//   const hc = (document.getElementById("hc") as HTMLInputElement).value;

//   const cone = new (Cone as any)(rp, l, hc);
//   let fig = cone.toString();
//   let volume = cone.makeVolume();
//   let area = cone.makeArea();

//   (document.getElementById("coneFigure") as HTMLParagraphElement).innerHTML = fig;
//   (document.getElementById("objetosc") as HTMLParagraphElement).innerHTML = volume;
//   (document.getElementById("pole") as HTMLParagraphElement).innerHTML = area;

//   const fig3d = new (Figure3d as any)();
//   let figure3d = fig3d.toString();
//   (document.getElementById("figure3d") as HTMLParagraphElement).innerHTML = figure3d;

//   const emptyFig = new (Figure as any)();
//   let figure = emptyFig.toString();
//   (document.getElementById("figure") as HTMLParagraphElement).innerHTML = figure;
// }
// const btn = document.getElementById("btn1") as HTMLButtonElement;
// btn.addEventListener("click", make);

// function Figure() {}
// Figure.prototype.name = "figure";
// Figure.prototype.toString = function () {
//   const resultArr = [];
//   if (this.constructor.parent) {
//     resultArr[resultArr.length] = this.constructor.parent.toString();
//   }
//   resultArr[resultArr.length] = this.name;
//   return resultArr.join(",");
// };
// function Figure3d(this: any) {
//   this.name = "figure 3d";
// }
// function Cylinder(this: any, rp: number, hw: number) {
//   this.rp = rp;
//   this.hw = hw;
//   this.name = "bryła walca";
//   this.makeVolume = function () {
//     return Math.PI * Math.pow(this.rp, 2) * this.hw;
//   };
//   this.makeArea = function () {
//     let asideArea = 2 * Math.PI * this.rp * this.hw;
//     let baseArea = Math.PI * Math.pow(this.rp, 2);
//     let fullArea = 2 * baseArea + asideArea;
//     return fullArea;
//   };
// }
// const tempFun = function () {};
// tempFun.prototype = Figure.prototype;
// Figure3d.prototype = new (tempFun as any)();
// Figure3d.prototype.constructor = Figure3d;
// Figure3d.parent = Figure.prototype;
// tempFun.prototype = Figure3d.prototype;
// Cylinder.prototype = new (tempFun as any)();
// Cylinder.prototype.constructor = Cylinder;
// Cylinder.parent = Figure3d.prototype;

// function make() {
//   const rp = (document.getElementById("rp") as HTMLInputElement).value;
//   const hw = (document.getElementById("hw") as HTMLInputElement).value;

//   const cylinder = new (Cylinder as any)(rp, hw);
//   let fig = cylinder.toString();
//   let volume = cylinder.makeVolume();
//   let area = cylinder.makeArea();

//   (document.getElementById("walec") as HTMLParagraphElement).innerHTML = fig;
//   (document.getElementById("objetosc") as HTMLParagraphElement).innerHTML = volume;
//   (document.getElementById("pole") as HTMLParagraphElement).innerHTML = area;
// }
// const btn = document.getElementById("btn1") as HTMLButtonElement;
// btn.addEventListener("click", make);

//* Classes
// class Circle {
//   r: number;
//   constructor(r: number) {
//     this.r = r;
//   }
//   makeVolume() {
//     return 2 * Math.PI * this.r;
//   }
//   makeArea() {
//     return Math.PI * Math.pow(this.r, 2);
//   }
// }
// function make() {
//   const r = (document.getElementById("r") as HTMLInputElement).value;
//   const circle = new Circle(Number(r));
//   // console.log({ circle });
//   const circleVolume = circle.makeVolume();
//   const circleArea = circle.makeArea();
//   (document.getElementById("okrag") as HTMLParagraphElement).innerHTML = "Okrąg !!!";
//   (document.getElementById("objetosc") as HTMLParagraphElement).innerHTML = String(circleVolume);
//   (document.getElementById("pole") as HTMLParagraphElement).innerHTML = String(circleArea);
// }
// const btn = document.getElementById("btn") as HTMLButtonElement;
// btn.addEventListener("click", make);
// class Triangle {
//   a: number;
//   h: number;
//   constructor(a: number, h: number) {
//     this.a = a;
//     this.h = h;
//   }
//   makeVolume() {
//     return 3 * this.a;
//   }
//   makeArea() {
//     let part = this.a * this.h;
//     let fullArea = part / 2;
//     return fullArea;
//   }
// }
// function make2() {
//   const a = (document.getElementById("a") as HTMLInputElement).value;
//   const h = a;
//   const triangle = new Triangle(Number(a), Number(h)) as Triangle;
//   // console.log({ triangle });
//   const triangleVolume = triangle.makeVolume();
//   const triangleArea = triangle.makeArea();

//   (document.getElementById("trojkat") as HTMLParagraphElement).innerHTML = "Trójkąt !!!";
//   (document.getElementById("objetosc2") as HTMLParagraphElement).innerHTML = triangleVolume.toString();
//   (document.getElementById("pole2") as HTMLParagraphElement).innerHTML = triangleArea.toString();
// }
// btn.addEventListener("click", make2);

class Figure {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  displayType() {
    return this.type;
  }
}
class Ball extends Figure {
  r: number;
  constructor(name: string, r: number) {
    super(name);
    this.r = r;
  }
  makeVolume() {
    let partVolume = Math.PI * Math.pow(this.r, 3);
    let volume = 1.3 * partVolume;
    return volume;
  }
  makeArea() {
    return 4 * Math.PI * Math.pow(this.r, 2);
  }
}

function make() {
  const r = (document.getElementById("r") as HTMLInputElement).value;
  const fig3d = new Figure("3d");
  const figure3d = fig3d.displayType();
  (document.getElementById("figura3d") as HTMLParagraphElement).innerHTML = figure3d;
  const ball: Ball = new Ball("Kula", Number(r));
  // console.log({ ball }, typeof ball);
  const nameOfKula = ball.displayType();
  const ballVolume = ball.makeVolume();
  const ballArea = ball.makeArea();
  (document.getElementById("figKula") as HTMLParagraphElement).innerHTML = nameOfKula;
  (document.getElementById("objetosc") as HTMLParagraphElement).innerHTML = String(ballVolume);
  (document.getElementById("pole") as HTMLParagraphElement).innerHTML = String(ballArea);
}
const btn = document.getElementById("btn") as HTMLButtonElement;
btn.addEventListener("click", make);
