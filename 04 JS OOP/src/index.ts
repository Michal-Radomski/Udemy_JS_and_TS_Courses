// console.log("test");
const Funcs = {
  funArr: ["2x+3", "2x^2+3x+4"],

  derrMethod: function (farr: string[], kof: string, id: string) {
    if (kof == "liniowa") {
      let funEl = farr[0];
      let a = funEl.slice(0, -3);
      let b = parseInt(a) as number;
      let rd = b;
      document.getElementById(id)!.innerHTML += "Pochodna funkcji liniowej " + farr[0] + "=> dy= " + rd + "<br>";
    } else if (kof == "kwadratowa") {
      let funEl = farr[1];
      let a = funEl.slice(0, -8);
      let a_2 = parseInt(a);
      let power = funEl.slice(3, -5);
      let power_2 = parseInt(power);
      let b = funEl.slice(5, -3);
      let b_2 = parseInt(b);
      document.getElementById(id)!.innerHTML +=
        "Pochodna funkcji kwadratowej " + farr[1] + "=> dy= " + power_2 * a_2 + "x + " + b_2 + "<br>";
    }
  },
};
Funcs.derrMethod(Funcs.funArr, "kwadratowa", "Pochodna");
Funcs.derrMethod(Funcs.funArr, "liniowa", "Pochodna2");

const obj = {
  funEx1: "2x^2+4x+3",
  funEx2: "",
  afactor: 2,
  bfactor: 4,
  cfactor: 3,
  deltaMethod: function (f: any) {
    let a = f.slice(0, -8);
    a = parseInt(a);
    let b = f.slice(5, -3);
    b = parseInt(b);
    let c = f.slice(8);
    c = parseInt(c);
    // console.log("this:", this);
    // console.log("obj:", obj);
    console.log("this === obj:", this === obj);
    if (a == this.afactor && b == this.bfactor && c == this.cfactor) {
      document.getElementById("Answer")!.innerHTML = "Współczynniki się zgadzają !!!";
      let delta = Math.pow(b, 2) - 4 * a * c;
      document.getElementById("Delta")!.innerHTML = "Delta jest równa: " + delta;
    } else {
      document.getElementById("Answer")!.innerHTML = "Współczynniki się nie zgadzają !!!";
      document.getElementById("Delta")!.innerHTML = "Zatem jak na złość nie będzie też Delty !!!";
    }
  },
};

// obj.funEx1 = "2x^2+4x+3";
obj.funEx2 = "3x^2+5x+4";
obj.deltaMethod(obj.funEx1);
