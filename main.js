/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/paymentSystemValidator.js
function paymentSystemValidator(number) {
  let result = false;

  if (/^4/.test(number)) {
    result = 'visa';
    return result;
  }

  if (/^5[1-5]/.test(number)) {
    result = 'mastercard';
    return result;
  }

  if (/^2/.test(number)) {
    result = 'mir';
    return result;
  }

  if (/^3[15]/.test(number)) {
    result = 'jcb';
    return result;
  }

  if (/^3[068]/.test(number)) {
    result = 'diners_club';
    return result;
  }

  if (/^60/.test(number)) {
    result = 'discover';
    return result;
  }

  if (/^3[47]/.test(number)) {
    result = 'american';
    return result;
  }

  return result;
}
;// CONCATENATED MODULE: ./src/js/cardValidator.js
function cardValidator(number) {
  let check = 0;
  let nDigit = 0;
  let even = false;

  for (let i = number.length - 1; i >= 0; i -= 1) {
    const cDigit = number[i];
    nDigit = parseInt(cDigit, 10);

    if (even) {
      nDigit *= 2;

      if (nDigit > 9) {
        nDigit -= 9;
      }
    }

    check += nDigit;
    even = !even;
  }

  return check % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/app.js



if (typeof document !== 'undefined') {
  const input = document.querySelector('input.number');
  input.addEventListener('input', () => {
    const images = Array.from(document.querySelectorAll('img'));
    images.forEach(item => {
      item.style.opacity = 0.2;
    });
    const type = paymentSystemValidator(input.value);
    if (type) document.getElementById(type).querySelector('img').style.opacity = 1;
  });
  input.parentNode.addEventListener('submit', e => {
    e.preventDefault();
    const result = document.getElementById('result');
    result.textContent = '';
    cardValidator(input.value) ? result.textContent = 'Valid' : result.textContent = 'Not valid';
  });
}
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;