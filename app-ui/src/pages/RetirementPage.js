import React from 'react';
import { Link } from 'react-router-dom';
import RetirementCalc from '../components/RetirementCalc';

function RetirementPage() {
    return (
        <>
            <h1>When can I retire?</h1>
            <Link className="App-link" to="/">
                Return to Home Page
            </Link>

            <br />
            <RetirementCalc></RetirementCalc>
        </>
    );
}

export default RetirementPage;
