export const isValidCardNumber = (cardNumber) => {
    if (!/^\d+$/.test(cardNumber)) {
        return false;
    }

    if (cardNumber.length < 13 || cardNumber.length > 19) {
        return false;
    }

    const arr = cardNumber.split('');

    let sum = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if ((arr.length - 1 - i) % 2 !== 0) {
            const digit = +arr[i];
            const doubled = digit * 2;
            let result= doubled;
            if (doubled > 9) {
                result = doubled - 9
            }
            sum += result;
        }else {
            const digit = +arr[i];
            sum += digit;
        }
    }

    return sum % 10 === 0;
}
