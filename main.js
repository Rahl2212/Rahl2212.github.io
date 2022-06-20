const inpDol = document.querySelector("#inp_dol");
const inpWyl = document.querySelector("#inp_wyl");
const inpDolPop = document.querySelector("#inp_pop_dol");
const inpWylPop = document.querySelector("#inp_pop_wyl");
const btnDol = document.querySelector("#btn-dol");
const btnWyl = document.querySelector("#btn-wyl");
const outDol = document.querySelector("#out_dol");
const outWyl = document.querySelector("#out_wyl");
const outDol1 = document.querySelector("#out_dol_1");
const outWyl1 = document.querySelector("#out_wyl_1");

const end = " mm";
let a = 0;
let zawWyl = 0;
let zawDol = 0;
let szukWylPop = 0;
let szukDolPop = 0;
const tabelaPop = [];
const x = 0.02;
let y = 5.06;
for (let n = 0; n <= 34; n++) {
  tabelaPop[n] = Number((y + x * n).toFixed(2));
}
console.log(tabelaPop);
btnWyl.addEventListener("click", () => {
  a = Number(inpWyl.value);
  zawWylPop = Number(inpWylPop.value);
  zawWyl = a - 0.3;
  szukWylPop = zawWyl + zawWylPop;
  outWyl.textContent = szukWylPop + end; //idealny rozmiar

  var propPop = tabelaPop.reduce(function (prev, curr) {
    return Math.abs(curr - szukWylPop) < Math.abs(prev - szukWylPop)
      ? curr
      : prev;
  });

  outWyl1.textContent = Number((propPop + 0.02).toFixed(2)) + end;
});
btnDol.addEventListener("click", () => {
  a = Number(inpDol.value);
  zawDolPop = Number(inpDolPop.value);
  zawDol = a - 0.2;
  szukDolPop = zawDol + zawDolPop;
  outDol.textContent = szukDolPop + end; //idealny rozmiar

  var propPop = tabelaPop.reduce(function (prev, curr) {
    return Math.abs(curr - szukDolPop) < Math.abs(prev - szukDolPop)
      ? curr
      : prev;
  });

  outDol1.textContent = Number((propPop + 0.02).toFixed(2)) + end;
});
