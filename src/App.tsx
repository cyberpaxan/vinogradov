import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Cart from './components/CartFolder/Cart/Cart';
import FinishOrder from './components/CartFolder/FinishOrder/FinishOrder';
import OrderMaker from './components/CartFolder/OrderMaker/OrderMaker';
import Privacy from './components/CartFolder/Privacy/Privacy';
import MainPage from './components/MainPageFolder/MainPage/MainPage';
import Candle from './components/ProductsFolder/Candle/Candle';
import Gift from './components/ProductsFolder/Gift/Gift';
import Honey from './components/ProductsFolder/Honey/Honey';
import Tea from './components/ProductsFolder/Tea/Tea';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/ordermaker' element={<OrderMaker />} />
                <Route path='/finishorder' element={<FinishOrder />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/products/honey' element={<Honey />} />
                <Route path='/products/tea' element={<Tea />} />
                <Route path='/products/candle' element={<Candle />} />
                <Route path='/products/gift' element={<Gift />} />
            </Routes>
        </div>
    );
}

export default App;
