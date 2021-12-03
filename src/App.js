import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import InvestmentPage from './pages/InvestmentPage';
import RetirementPage from './pages/RetirementPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/retirement-calc">
                        <RetirementPage />
                    </Route>
                    <Route path="/investment-calc">
                        <InvestmentPage />
                    </Route>
                </header>
            </Router>
        </div>
    );
}

export default App;
