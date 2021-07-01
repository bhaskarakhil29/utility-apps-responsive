const binary = document.querySelector("#binary");
const octal = document.querySelector("#octal");
const decimal = document.querySelector("#decimal");
const hexDec = document.querySelector("#hex-dec");
const baseClear = document.querySelector("#base-clear");
binary.addEventListener("change", (e) => {
  let valInput = parseInt(binary.value);
  octal.value = parseInt(valInput, 2).toString(8);
  decimal.value = parseInt(valInput, 2).toString(10);
  hexDec.value = parseInt(valInput, 2).toString(16).toUpperCase();
});

octal.addEventListener("change", (e) => {
  let valInput = parseInt(octal.value);
  binary.value = parseInt(valInput, 8).toString(2);
  decimal.value = parseInt(valInput, 8).toString(10);
  hexDec.value = parseInt(valInput, 8).toString(16).toUpperCase();
});
decimal.addEventListener("change", (e) => {
  let valInput = parseInt(decimal.value);
  binary.value = parseInt(valInput, 10).toString(2);
  octal.value = parseInt(valInput, 10).toString(8);
  hexDec.value = parseInt(valInput, 10).toString(16).toUpperCase();
});
hexDec.addEventListener("change", (e) => {
  binary.value = parseInt(hexDec.value, 16).toString(2);
  octal.value = parseInt(hexDec.value, 16).toString(8);
  decimal.value = parseInt(hexDec.value, 16).toString(10);
});
baseClear.addEventListener("click", (e) => {
  binary.value = "";
  octal.value = "";
  decimal.value = "";
  hexDec.value = "";
});
