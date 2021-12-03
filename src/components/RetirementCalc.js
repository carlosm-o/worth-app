import React, { useState } from 'react';
import retirementText from '../data/retirement-text';

function RetirementCalc() {
    const [income, setIncome] = useState('');
    const [expense, setExpense] = useState('');
    const [totalYears, setYears] = useState('');

    const calcTimeToRetirement = (e) => {
        e.preventDefault();
        const incomeInt = parseInt(income);
        const expenseInt = parseInt(expense);

        const savingsPercent = parseInt(100 - (expenseInt / incomeInt) * 100);
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
        setYears(text);
    };

    return (
        <div>
            <header>
                <form>
                    <br />
                    <fieldset>
                        <label>
                            What is your monthly income?
                            <br />
                            <input
                                type="number"
                                placeholder="12345"
                                value={income}
                                maxLength="7"
                                onChange={(e) => setIncome(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            What is your monthly expense?
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
                    <button onClick={calcTimeToRetirement}>Submit</button>
                </form>
                <p class="text">{totalYears}</p>
            </header>
        </div>
    );
}

export default RetirementCalc;
