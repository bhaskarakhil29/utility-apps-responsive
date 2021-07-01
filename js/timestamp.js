const epochh3 = document.querySelector(".epoch");
const humanh3 = document.querySelector(".human");
const menu1Btn = document.querySelector(".menu-layout-1");
const menu2Btn = document.querySelector(".menu-layout-2");
const yinput = document.querySelector("#year-input-id");
const moinput = document.querySelector("#month-input-id");
const dinput = document.querySelector("#day-input-id");
const hinput = document.querySelector("#hour-input-id");
const miinput = document.querySelector("#minute-input-id");
const sinput = document.querySelector("#second-input-id");
const epochoutput = document.querySelector("#epoch-output-id");
const btn = document.querySelector("#epochtodate-button-id");
const inputEpoch = document.querySelector("#inputFrom");
const outputDate = document.querySelector("#dateOutput");
const dateBtn = document.querySelector("#dateGenerate");

epochh3.addEventListener("click", (e) => {
  menu1Btn.classList.remove("hide");
  humanh3.style.background = "white";
  humanh3.style.color = "black";
  epochh3.style.background = "rgb(48, 1, 102)";
  epochh3.style.color = "white";
  menu2Btn.classList.add("hide");
});
humanh3.addEventListener("click", (e) => {
  menu2Btn.classList.remove("hide");
  epochh3.style.background = "white";
  epochh3.style.color = "black";
  humanh3.style.background = "rgb(48, 1, 102)";
  humanh3.style.color = "white";
  menu1Btn.classList.add("hide");
});

btn.onclick = (event) => {
  const y = parseFloat(yinput.value);
  const m = parseFloat(moinput.value) - 1;
  const d = parseFloat(dinput.value);
  const h = parseFloat(hinput.value);
  const minute = parseFloat(miinput.value);
  const s = parseFloat(sinput.value);
  var myDate = new Date(y, m, d, h, minute, s);
  epochoutput.value = myDate.getTime() / 1000.0;
};

dateBtn.addEventListener("click", (e) => {
  outputDate.value = new Date(inputEpoch.value * 1000);
});
