import {getPaymentSystem} from "../paymentSystem.js";

describe('getPaymentSystem()', () => {
    test('Определяет платежную систему Visa', () => {
        const result = getPaymentSystem('4111111111111111');
        expect(result).toBe('Visa');
    });

    test.each([
        ['51008848484848', 'MasterCard'],
        ['52015905905850', 'MasterCard'],
        ['53025095905950', 'MasterCard'],
        ['54033090939339', 'MasterCard'],
        ['55044988944984', 'MasterCard'],
        ['50000000000000', null],
        ['56000000000000', null],
    ])('номер %s → %s', (cardNumber, expected) => {
        expect(getPaymentSystem(cardNumber)).toBe(expected);
    });

    test.each([
        ['22008848484848', 'Mir'],
        ['22015905905850', 'Mir'],
        ['22025095905950', 'Mir'],
        ['22033090939339', 'Mir'],
        ['22044988944984', 'Mir'],
        ['21999999999999', null],
        ['22050000000000', null],
    ])('номер %s → %s', (cardNumber, expected) => {
        expect(getPaymentSystem(cardNumber)).toBe(expected);
    });

    test('Определяет null', () => {
        const result = getPaymentSystem('3555555555554444');
        expect(result).toBe(null);
    });
});
