import puppeteer from 'puppeteer';

describe('Проверка карты', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        page = await browser.newPage();

        await page.goto('http://localhost:8080');
    });

    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });

    test('валидный номер карты', async () => {
        await page.type('#card-number', '4111111111111111');

        await page.click('button[type="submit"]');

        await page.waitForFunction(() => {
            return document.querySelector('.card.active') !== null;
        });

        const result = await page.$eval(
            '.result',
            element => element.textContent,
        );

        expect(result).toBe('Карта валидна');
    });

    test('невалидный номер карты', async () => {
        await page.$eval('#card-number', element => {
            element.value = '';
        });

        await page.type('#card-number', '4111111111111112');

        await page.click('button[type="submit"]');

        await page.waitForFunction(() => {
            return document.querySelector('.card.active') !== null;
        });

        const result = await page.$eval(
            '.result',
            element => element.textContent,
        );

        expect(result).toBe('Карта невалидна');
    });
});
