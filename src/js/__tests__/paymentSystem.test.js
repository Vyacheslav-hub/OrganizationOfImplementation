import {getPaymentSystem} from "../paymentSystem.js";

describe('getPaymentSystem()', () => {
    test('Определяет платежную систему Visa', () => {
        const result = getPaymentSystem('4111111111111111');
        expect(result).toBe('Visa');
    });
});
