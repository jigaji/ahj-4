import cardValidator from '../js/cardValidator';

test('Valid', () => {
  const number = '5555555555554444';
  expect(cardValidator(number)).toBe(true);
});

test('Invalid', () => {
  const number = '555555555555444';
  expect(cardValidator(number)).toBe(false);
});
