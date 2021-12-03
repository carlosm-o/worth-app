import React from 'react';
import { Link } from 'react-router-dom';
import InvestmentCalc from '../components/InvestmentCalc';

function InvestmentPage() {
    return (
        <>
            <h1>Investment Calculator</h1>
            <Link className="App-link" to="/">
                Return to Home Page
            </Link>
            <br />

            <InvestmentCalc></InvestmentCalc>
        </>
    );
}

export default InvestmentPage;
