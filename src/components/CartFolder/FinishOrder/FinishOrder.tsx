import React from 'react';
import styles from './FinishOrder.module.scss';
import Header from '../../MainPageFolder/Header/Header';
import pot2 from '../../../assets/images/pot2.png';
import cells9 from '../../../assets/images/cells9.png';
import robokassa from '../../../assets/images/robokassa.png';
import Footer from '../../MainPageFolder/Footer/Footer';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FinishOrder = () => {
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
            <div className={styles.finish}>
                <Header />
                <div className={styles.finish__content}>
                    <div className={styles.finish__content__img1}>
                        <img src={cells9} />
                    </div>

                    <div className={styles.finish__content__text}>
                        <h1>Спасибо! Ваш заказ принят.</h1>
                        <img src={robokassa} />
                        <button>Оплатить</button>
                    </div>

                    <div className={styles.finish__content__img2}>
                        <img src={pot2} />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default FinishOrder;
