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

import HoneyAll from './components/CatalogFolder/Honey/All/HoneyAll';
import HoneyEco from './components/CatalogFolder/Honey/HoneyEco/HoneyEco';
import HoneyCrimea from './components/CatalogFolder/Honey/Crimea/HoneyCrimea';
import HoneyLavender from './components/CatalogFolder/Honey/Lavender/HoneyLavender';
import HoneyTavrida from './components/CatalogFolder/Honey/Tavrida/HoneyTavrida';

import HerbsAll from './components/CatalogFolder/Herbs/All/HerbsAll';
import HerbsMonastic from './components/CatalogFolder/Herbs/Monastic/HerbsMonastic';
import HerbsFitosbor from './components/CatalogFolder/Herbs/Fitosbor/HerbsFitosbor';
import WaxAll from './components/CatalogFolder/Wax/All/WaxAll';
import WaxOnly from './components/CatalogFolder/Wax/Wax/WaxOnly';
import WaxCandles from './components/CatalogFolder/Wax/Candles/WaxCandles';
import GiftsAll from './components/CatalogFolder/Gifts/All/GiftsAll';
import Registration from './components/AuthReg/Registration/Registration';
import Auth from './components/AuthReg/Auth/Auth';

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

                <Route path='/catalog/honey/all' element={<HoneyAll />} />
                <Route path='/catalog/honey/eco' element={<HoneyEco />} />
                <Route path='/catalog/honey/crimea' element={<HoneyCrimea />} />
                <Route
                    path='/catalog/honey/tavrida'
                    element={<HoneyTavrida />}
                />
                <Route
                    path='/catalog/honey/lavender'
                    element={<HoneyLavender />}
                />

                <Route path='/catalog/herbs/all' element={<HerbsAll />} />
                <Route
                    path='/catalog/herbs/fitosbor'
                    element={<HerbsFitosbor />}
                />
                <Route
                    path='/catalog/herbs/monastic'
                    element={<HerbsMonastic />}
                />

                <Route path='/catalog/wax/all' element={<WaxAll />} />
                <Route path='/catalog/wax/wax' element={<WaxOnly />} />
                <Route path='/catalog/wax/candles' element={<WaxCandles />} />

                <Route path='/catalog/gifts/all' element={<GiftsAll />} />

                <Route path='/registration' element={<Registration />} />
                <Route path='/auth' element={<Auth />} />
            </Routes>
        </div>
    );
}

export default App;
