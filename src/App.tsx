import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Cart from './components/CartFolder/Cart/Cart';
import MainPage from './components/MainPageFolder/MainPage/MainPage';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
