import '../css/style.css';

import visa from '../img/icons8-виза-48.png'
import mastercard from '../img/mastercard-credit-card-payment-method-19676_32.png';
import mir from '../img/icons8-мир-48.png';

import { getPaymentSystem } from '../js/paymentSystem.js';
import { isValidCardNumber } from '../js/cardValidator.js';

const paymentSystems = {
    visa,
    mastercard,
    mir,
};

const cards = document.querySelectorAll('.card');
cards.forEach(item => {
    const img = item.querySelector('img');
    const paymentSystem = item.dataset.paymentSystem;
    img.src = paymentSystems[paymentSystem];
});

const form = document.querySelector('.form');
const resultElement = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = e.target.querySelector('input');
    const cardNumber = input.value.replace(/\s/g, '');

    const paymentSystem = getPaymentSystem(cardNumber);
    const isValid = isValidCardNumber(cardNumber);

    cards.forEach(item => {
        item.classList.remove('active')
    });

    if (paymentSystem === null) {
        resultElement.textContent = 'Неизвестная система платежа';
    }else {
        const arr = Array.from(cards);

        const result = arr.find(item => {
            return item.dataset.paymentSystem === paymentSystem.toLowerCase();
        });

        result.classList.add('active');

        if (isValid) {
            resultElement.textContent = 'Карта валидна';
        } else {
         resultElement.textContent = 'Карта невалидна';
        }
    }
});
