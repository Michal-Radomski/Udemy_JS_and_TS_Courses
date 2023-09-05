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
