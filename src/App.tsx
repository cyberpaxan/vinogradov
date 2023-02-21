import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import History from './components/History/History';
import Home from './components/Home/Home';
import WhyWe from './components/WhyWe/WhyWe';

function App() {
    return (
        <div className='App'>
            <Header />
            <Home />
            <History />
            <WhyWe />
        </div>
    );
}

export default App;
