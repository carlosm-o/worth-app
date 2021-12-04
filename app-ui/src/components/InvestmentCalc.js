import React, { useState } from 'react';

function InvestmentCalc() {
    const [item, setItem] = useState('');
    const [expense, setExpense] = useState('');
    const [selection, setSelection] = useState('');
    const [oneTimeInvestmentTotal, setOneTimeInvestmentTotal] = useState('');
    const [text, setText] = useState('');

    const calcInvestmentTotal = async (e) => {
        if (selection === '') {
            e.preventDefault();
            alert('You must make a frequency selection ');
        } else if (item === '') {
            e.preventDefault();
            alert('You must enter a Name for your frivolous expense');
        } else if (expense === '') {
            e.preventDefault();
            alert('You must enter a COST for your frivolous expense');
        } else {
            e.preventDefault();
            const response = await fetch('/returns');
            const tableData = await response.json();

            const returnsAveragePercent = tableData / 12 / 100;

            const weeklyMonthTotal = expense * 4;

            const futureValueWeekly =
                (weeklyMonthTotal * (Math.pow(1 + returnsAveragePercent, 120) - 1)) / returnsAveragePercent;
            const futureValueMonthly =
                (expense * (Math.pow(1 + returnsAveragePercent, 120) - 1)) / returnsAveragePercent;

            let futureValue;

            selection === 'weekly'
                ? (futureValue = parseInt(futureValueWeekly))
                : (futureValue = parseInt(futureValueMonthly));

            setOneTimeInvestmentTotal(futureValue);

            setText(
                `If you were to invest your ${selection} ${item} expense of $${expense} in the S&P 500, your investment would total $${parseInt(
                    futureValue
                )} after 10 years based on the average returns of the S&P 500 over the last 10 years.`
            );
        }
    };

    return (
        <div>
            <header>
                <form>
                    <br />
                    <fieldset>
                        Frequency of expense:
                        <input
                            type="radio"
                            value="weekly"
                            name="frequency"
                            onChange={(e) => setSelection(e.target.value)}
                        />{' '}
                        Weekly
                        <input
                            type="radio"
                            value="monthly"
                            name="frequency"
                            onChange={(e) => setSelection(e.target.value)}
                        />{' '}
                        Monthly
                        <br />
                        <br />
                        <label>
                            What is your frivolous expense?
                            <br />
                            <input
                                type="text"
                                placeholder="Coffee, Subscription, etc."
                                value={item}
                                maxLength="50"
                                onChange={(e) => setItem(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            How much does it cost?
                            <br />
                            <input
                                type="number"
                                placeholder="12345"
                                value={expense}
                                maxLength="7"
                                onChange={(e) => setExpense(e.target.value)}
                            />
                        </label>
                    </fieldset>
                    <button onClick={calcInvestmentTotal}>Submit</button>
                    <p class="text">{text}</p>
                </form>
            </header>
        </div>
    );
}

export default InvestmentCalc;
