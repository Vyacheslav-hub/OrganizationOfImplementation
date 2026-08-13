import puppeteer from 'puppeteer';

describe('Проверка карты', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
        });

        page = await browser.newPage();

        await page.goto('http://localhost:8080');
    });

    afterAll(async () => {
        await browser.close();
    });

    test('валидный номер карты', async () => {
        await page.type('#card-number', '4111111111111111');

        await page.click('button[type="submit"]');

        const result = await page.$eval(
            '.result',
            element => element.textContent,
        );

        expect(result).toBe('Карта валидна');
    });
});
