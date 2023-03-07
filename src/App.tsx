import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Cart from './components/CartFolder/Cart/Cart';
import OrderMaker from './components/CartFolder/OrderMaker/OrderMaker';
import MainPage from './components/MainPageFolder/MainPage/MainPage';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/ordermaker' element={<OrderMaker />} />
            </Routes>
        </div>
    );
}

export default App;
