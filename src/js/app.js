import paymentSystemValidator from './paymentSystemValidator';
import cardValidator from './cardValidator';

if (typeof document !== 'undefined') {
  const input = document.querySelector('input.number');

  input.addEventListener('input', () => {
    const images = Array.from(document.querySelectorAll('img'));
    images.forEach((item) => {
      item.style.opacity = 0.2;
    });
    const type = paymentSystemValidator(input.value);
    if (type) document.getElementById(type).querySelector('img').style.opacity = 1;
  });

  input.parentNode.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = document.getElementById('result');
    result.textContent = '';
    cardValidator(input.value)
      ? (result.textContent = 'Valid')
      : (result.textContent = 'Not valid');
  });
}
