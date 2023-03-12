import React from 'react';
import Footer from '../../MainPageFolder/Footer/Footer';
import Header from '../../MainPageFolder/Header/Header';
import styles from './Cart.module.scss';
import cells8 from '../../../assets/images/cells8.png';
import sunflower4 from '../../../assets/images/sunflower4.png';
import CartItem from '../CartItem/CartItem';
import cartitem1 from '../../../assets/images/cartitem1.png';
import cartitem2 from '../../../assets/images/cartitem2.png';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titleItem1: string = 'Мёд Горный ЭКО 550 гр.';
const priceItem1: number = 836;
const countItem1: number = 2;
const totalPriceItem1: number = 1672;

const titleItem2: string = '"Чай Монастырский" успокоительный';
const priceItem2: number = 520;
const countItem2: number = 1;
const totalPriceItem2: number = 520;

const Cart = () => {
    function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    ScrollToTop();

    return (
        <div>
            <div className={styles.cart}>
                <Header />
                <div className={styles.cart__content}>
                    <div className={styles.cart__content__img1}>
                        <img src={sunflower4} />
                    </div>

                    <div className={styles.cart__content__block}>
                        <div className={styles.cart__content__block__info}>
                            <h1>Корзина</h1>
                        </div>

                        <div className={styles.cart__content__block__items}>
                            <CartItem
                                img={cartitem1}
                                title={titleItem1}
                                price={priceItem1}
                                count={countItem1}
                                totalPrice={totalPriceItem1}
                            />
                            <CartItem
                                img={cartitem2}
                                title={titleItem2}
                                price={priceItem2}
                                count={countItem2}
                                totalPrice={totalPriceItem2}
                            />
                        </div>

                        <div className={styles.cart__content__block__hr}>
                            <hr />
                        </div>

                        <div className={styles.cart__content__block__finals}>
                            <h1>Итого 2 192 руб.</h1>
                            <Link to='/ordermaker'>
                                <button>Оформить заказ</button>
                            </Link>
                            <h2>
                                Оплата доставки производится Покупателем при
                                получении заказа.
                            </h2>
                        </div>
                    </div>

                    <div className={styles.cart__content__img2}>
                        <img src={cells8} />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Cart;
