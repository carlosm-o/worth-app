'use strict';

const PORT = 3000;

const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.static('public'));

app.post('/investment_returns', (req, res) => {
    const request = req.body;
    const selection = request.optradio;
    const expense = request.expense;
    let investmentValue;

    selection === 'weekly' ? (investmentValue = expense * 752) : (investmentValue = expense * 173);

    console.log(investmentValue);

    res.send(
        `If you were to invest your ${selection} expense of $${expense}, your investment would total $${investmentValue} after 10 years.`
    );
});

app.post('/stock_search', (req, res) => {
    const request = req.body;
    const selection = request.optradio;

    const findStockByPrice = (selection) => {
        const maxCost = stocks.reduce((prev, curr) => (prev.price > curr.price ? prev : curr));
        const minCost = stocks.reduce((prev, curr) => (prev.price < curr.price ? prev : curr));

        return selection === 'Max' ? maxCost : minCost;
    };

    res.send(findStockByPrice(selection));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
