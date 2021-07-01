const wordCounter = document.querySelector(".word-counter");
const stringReversal = document.querySelector(".string-reversal");
const menu1Btn = document.querySelector(".text-tools-1");
const menu2Btn = document.querySelector(".text-tools-2");
const counter = document.querySelector("#counter");
const counterSpan = document.querySelector(".counter-span");
const reversalInput = document.querySelector("#reversal-input");
const reversalOutput = document.querySelector("#reversal-output");

wordCounter.addEventListener("click", (e) => {
  menu1Btn.classList.remove("hide");
  stringReversal.style.background = "white";
  stringReversal.style.color = "black";
  wordCounter.style.background = "rgb(48, 1, 102)";
  wordCounter.style.color = "white";
  menu2Btn.classList.add("hide");
});
stringReversal.addEventListener("click", (e) => {
  menu2Btn.classList.remove("hide");
  wordCounter.style.background = "white";
  wordCounter.style.color = "black";
  stringReversal.style.background = "rgb(48, 1, 102)";
  stringReversal.style.color = "white";
  menu1Btn.classList.add("hide");
});

counter.addEventListener("change", (e) => {
  let inputString = counter.value;
  let count = 0;
  let stringSplitted = inputString.split(" ");
  for (let i = 0; i < stringSplitted.length; i++) {
    if (stringSplitted[i] !== "" && stringSplitted[i] !== "\n") {
      count++;
    }
  }
  counterSpan.innerText = `${count}`;
});

reversalInput.addEventListener("change", (e) => {
  let newString,
    oldString = reversalInput.value;
  newString = "";
  for (let i = oldString.length - 1; i >= 0; i--) {
    newString = newString + oldString[i];
  }
  reversalOutput.value = newString;
});
