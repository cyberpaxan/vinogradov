import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import History from './components/History/History';
import Home from './components/Home/Home';
import OurProducts from './components/OurProducts/OurProducts';
import WhyWe from './components/WhyWe/WhyWe';

function App() {
    return (
        <div className='App'>
            <Header />
            <Home />
            <History />
            <WhyWe />
            <OurProducts />
        </div>
    );
}

export default App;
