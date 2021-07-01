"use strict";
const encodeOperations = [
  {
    name: "URL Encoder/Decoder",
    label: "Enter the URL to Encode or Decode",
    fromPlaceholder: "https://www.google.co.in",
    toPlaceholder: "Your Output...",
    Btn1: "Encode",
    Btn2: "Decode",
  },
  {
    name: "Base 64 Encoder/Decoder",
    label: "Enter the URL to Encode or Decode using Base64",
    fromPlaceholder: "https://www.google.co.in",
    toPlaceholder: "Your Output...",
    Btn1: "Encode",
    Btn2: "Decode",
  },
  {
    name: "MD5 and SHA-1 Hashing",
    label: "Enter the URL to Hash and Press respective button",
    fromPlaceholder: "https://www.google.co.in",
    toPlaceholder: "Your Output...",
    Btn1: "MD-5",
    Btn2: "SHA-1",
  },
  {
    name: "SHA-256 and SHA-512 Hashing",
    label: "Enter the URL to Hash and Press respective button",
    fromPlaceholder: "https://www.google.co.in",
    toPlaceholder: "Your Output...",
    Btn1: "SHA-256",
    Btn2: "SHA-512",
  },
];

const encodeMethods = [
  encodeDecode,
  base64EncoderDecoder,
  stringHashingmd5,
  stringHashingsha256,
];

const encodeMenu = document.querySelector(".encode-menu");
encodeOperations.forEach((op, idx) => {
  let encodeTitle = document.createElement("h3");
  encodeTitle.innerText = op.name;
  encodeMenu.appendChild(encodeTitle);
});
const h3Btns = document.querySelectorAll(".encode-menu h3");
const menuLayout = document.querySelector(".menu-layout");

h3Btns.forEach((Btn, index) => {
  let counter = 0;
  Btn.addEventListener("click", (e) => {
    menuLayout.classList.remove("hide");
    document.querySelector(".menu-layout h2").innerText =
      encodeOperations[index].name;
    document.querySelector(".menu-layout #from").innerText =
      encodeOperations[index].label;
    document.querySelector(".menu-layout #inputFrom").placeholder =
      encodeOperations[index].fromPlaceholder;
    document.querySelector(".menu-layout #outputTo").placeholder =
      encodeOperations[index].toPlaceholder;
    document.querySelector(".menu-layout #encode").innerText =
      encodeOperations[index].Btn1;
    document.querySelector(".menu-layout #decode").innerText =
      encodeOperations[index].Btn2;
  });
});

h3Btns.forEach((Btn, index) => {
  const inputURL = document.querySelector(".menu-layout #inputFrom");
  const encodeBtn = document.querySelector(".menu-layout #encode");
  const decodeBtn = document.querySelector(".menu-layout #decode");
  const outputURL = document.querySelector(".menu-layout #outputTo");
  Btn.addEventListener("click", () => {
    inputURL.value = "";
    outputURL.value = "";
    encodeBtn.addEventListener("click", (e) => {
      outputURL.value = encodeMethods[index](inputURL.value, 1);
    });
    decodeBtn.addEventListener("click", (e) => {
      outputURL.value = encodeMethods[index](inputURL.value, 2);
    });
  });
});

function encodeDecode(urlToWork, chosenOp) {
  if (chosenOp === 1) {
    return encodeURIComponent(urlToWork);
  } else {
    return decodeURIComponent(urlToWork);
  }
}

function base64EncoderDecoder(url, chosenOp) {
  if (chosenOp === 1) {
    return btoa(url);
  } else {
    return atob(url);
  }
}

function stringHashingmd5(url, chosenOp) {
  if (chosenOp === 1) {
    return CryptoJS.MD5(url);
  } else {
    return CryptoJS.SHA1(url);
  }
}
function stringHashingsha256(url, chosenOp) {
  if (chosenOp === 1) {
    return CryptoJS.SHA256(url);
  } else {
    return CryptoJS.SHA512(url);
  }
}
