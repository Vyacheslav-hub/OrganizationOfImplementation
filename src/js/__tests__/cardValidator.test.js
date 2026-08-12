import {isValidCardNumber} from "../cardValidator.js";

test.each([
    ['4111111111111111', true],
    ['4111111111111112', false],
    ['4532015112830366', true],
    ['4012888888881881', true],
    ['abc123', false],
    ['4111abcd11111111', false],
    ['', false],
    ['411111111111', false],
    ['41111111111111111111', false],
])('номер %s → %s', (cardNumber, expected) => {
    expect(isValidCardNumber(cardNumber)).toBe(expected);
});
