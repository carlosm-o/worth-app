import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <h1>Home Page</h1>
            <p>What do you want to do?</p>
            <Link className="App-link" to="/investment-calc">
                How much I can make by investing instead of frivolous spending?
            </Link>
            <Link className="App-link" to="/retirement-calc">
                <br />
                See how long it will take until I retire.
            </Link>
        </>
    );
}

export default HomePage;
