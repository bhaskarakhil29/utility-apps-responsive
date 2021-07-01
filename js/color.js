const hexInput = document.querySelector("#Hex-op");
const rgbInput = document.querySelector("#Rgb-op");
const colorSec = document.querySelector(".color-container");
const clearBtn = document.querySelector(".color-section button");

let stringVal, rgbVal;

hexInput.addEventListener("change", (e) => {
  rgbInput.value = "";
  stringVal = hexInput.value;
  rgbVal = hexToRgb(stringVal);
  rgbInput.value = `rgb(${rgbVal})`;
  colorSec.style.background = `rgb(${rgbVal})`;
});

rgbInput.addEventListener("change", (e) => {
  rgbVal = rgbInput.value;
  const stringNow = rgbVal.split(",");
  const stringVal = `#${hexConvert(stringNow[0])}${hexConvert(
    stringNow[1]
  )}${hexConvert(stringNow[2])}`;
  hexInput.value = `${stringVal}`;
  colorSec.style.background = `${stringVal}`;
});

function hexToRgb(hex_val) {
  const aRgbHex = hex_val.substring(1).match(/.{1,2}/g);
  const aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  if (aRgb[0] === NaN || aRgb[1] === NaN || aRgb[2] === NaN) {
    return null;
  }
  return aRgb;
}
function hexConvert(val) {
  const hexa = Number(val).toString(16);
  return hexa.length === 1 ? `0${hexa}` : hexa;
}
clearBtn.addEventListener("click", (e) => {
  hexInput.value = "";
  rgbInput.value = "";
  colorSec.style.background = "white";
});
