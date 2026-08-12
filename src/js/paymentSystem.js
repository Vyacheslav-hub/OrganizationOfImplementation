export const getPaymentSystem = (cardNumber) =>{
    if (cardNumber.startsWith('4')) return 'Visa';
    if (/^5[1-5]\d*$/.test(cardNumber)) return 'MasterCard';
    if (/^220[0-4]\d*$/.test(cardNumber)) return 'Mir';
    return null;
}
