'use strict';

const PORT = 3000;

const retirementText = require('./retirement-text').retirementText;
const got = require('got');
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

    (async () => {
        try {
            const response = await got('http://localhost:4000/returns');

            const averageRate = response.body / 100;

            const weeklyYearTotal = expense * 52;
            const investmentValueWeekly = weeklyYearTotal * (1 + averageRate) ** 10;

            const monthlyYearTotal = expense * 12;
            const investmentValueMonthly = monthlyYearTotal * (1 + averageRate) ** 10;

            let investmentValue;

            selection === 'weekly'
                ? (investmentValue = investmentValueWeekly)
                : (investmentValue = investmentValueMonthly);

            res.send(
                `If you were to invest your ${selection} expense of $${expense} in the S&P 500, your investment would total $${parseInt(
                    investmentValue
                )} after 10 years based on the average returns of the S&P 500 over the last 10 years.`
            );
        } catch (error) {
            console.log(error.response.body);
            //=> 'Internal server error ...'
        }
    })();
});

app.post('/retirement', (req, res) => {
    const request = req.body;
    const income = parseInt(request.income);
    const expense = parseInt(request.expense);

    if (expense > income) {
        res.send("Your spend is greater than your income, you'll never retire at this rate.");
    } else {
        const savingsPercent = parseInt(100 - (expense / income) * 100);
        const initialText = "You'll retire in";
        let text;

        switch (true) {
            case savingsPercent <= 5:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 66 years, ${retirementText[1]}`;
                break;
            case savingsPercent <= 10:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 51 to 66 years, ${retirementText[1]}`;
                break;
            case savingsPercent <= 15:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 43 to 50 years, ${retirementText[1]}`;
                break;
            case savingsPercent <= 20:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 37 to 42 years, ${retirementText[1]}`;
                break;
            case savingsPercent <= 25:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 32 to 36 years, ${retirementText[1]}`;
                break;
            case savingsPercent <= 30:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 28 to 31 years, ${retirementText[1]}`;
                break;
            case savingsPercent <= 35:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 25 to 27 years, ${retirementText[2]}`;
                break;
            case savingsPercent <= 40:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 22 to 24 years, ${retirementText[2]}`;
                break;
            case savingsPercent <= 45:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 19 to 21 years, ${retirementText[2]}`;
                break;
            case savingsPercent <= 50:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 17 to 18 years, ${retirementText[2]}`;
                break;
            case savingsPercent <= 55:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 14.5 to 16 years, ${retirementText[3]}`;
                break;
            case savingsPercent <= 60:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 12.5 to 14.5 years, ${retirementText[3]}`;
                break;
            case savingsPercent <= 65:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 10.5 to 12.5 years, ${retirementText[3]}`;
                break;
            case savingsPercent <= 70:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 8.5 to 10.5 years, ${retirementText[4]}`;
                break;
            case savingsPercent <= 75:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 7 to 8.5 years, ${retirementText[4]}`;
                break;
            case savingsPercent <= 80:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 5.5 to 7 years, ${retirementText[4]}`;
                break;
            case savingsPercent <= 85:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 4 to 5.5 years, ${retirementText[5]}`;
                break;
            case savingsPercent <= 90:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 3 to 4 years, ${retirementText[6]}`;
                break;
            case savingsPercent <= 95:
                text = `Your savings rate is ${savingsPercent}%. ${initialText} 2 to 3 years, ${retirementText[6]}`;
                break;
            case savingsPercent <= 100:
                text = `Your savings rate is ${savingsPercent}%. ${retirementText[7]}`;
                break;
        }

        res.send(text);
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
