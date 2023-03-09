import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Cart from './components/CartFolder/Cart/Cart';
import FinishOrder from './components/CartFolder/FinishOrder/FinishOrder';
import OrderMaker from './components/CartFolder/OrderMaker/OrderMaker';
import MainPage from './components/MainPageFolder/MainPage/MainPage';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/ordermaker' element={<OrderMaker />} />
                <Route path='/finishorder' element={<FinishOrder />} />
            </Routes>
        </div>
    );
}

export default App;
