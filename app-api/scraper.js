'use strict';

const puppeteer = require('puppeteer');

const scrapeSite = async () => {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-gpu'],
            defaultViewport: null,
        });
        const page = await browser.newPage();

        await page.goto('https://www.macrotrends.net/2526/sp-500-historical-annual-returns');

        const returnsList = [];
        const tableSelector = '#style-1 > table > tbody';

        // iterate over tr:nth-child(${i}) on all rows
        for (let i = 1; i < 11; i++) {
            const id = i;
            const year = await page.evaluate(
                (el) => el.innerText,
                await page.$(`${tableSelector} > tr:nth-child(${i}) > td:nth-child(1)`)
            );
            const returns = await page.evaluate(
                (el) => el.innerText,
                await page.$(`${tableSelector} > tr:nth-child(${i}) > td:nth-child(7)`)
            );

            // const returns = new Returns(year, returns);
            returnsList.push(returns);
        }

        await page.close();
        await browser.close();

        const returnInNumbers = [];

        for (const num of returnsList) {
            const converted = parseFloat(num);
            returnInNumbers.push(converted);
        }

        const average = returnInNumbers.reduce((a, b) => a + b) / returnInNumbers.length;

        const newJSON = JSON.stringify(parseInt(average));

        console.log('The scraper service was called and the average stock return has been returned.');

        return newJSON;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    scrapeSite,
};
