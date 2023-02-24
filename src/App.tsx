import React from 'react';

import './App.scss';
import DeliveryAndPay from './components/DeliveryAndPay/DeliveryAndPay';
import Header from './components/Header/Header';
import History from './components/History/History';
import Home from './components/Home/Home';
import OurProducts from './components/OurProducts/OurProducts';
import WhyWe from './components/WhyWe/WhyWe';
import CallForm from './components/CallForm/CallForm';
import Documents from './components/Documents/Documents';
import Reviews from './components/Reviews/Reviews';

function App() {
    return (
        <div className='App'>
            <Header />
            <Home />
            <History />
            <WhyWe />
            <OurProducts />
            <DeliveryAndPay />
            <CallForm />
            <Documents />
            <Reviews />
        </div>
    );
}

export default App;
