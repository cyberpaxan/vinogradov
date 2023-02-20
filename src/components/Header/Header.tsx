import React from 'react';
import styles from './Header.module.scss';
import cart from '../../assets/images/cart.png';

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header__logoAndCart}>
                    <h1>Виноградовъ</h1>
                    <div className={styles.header__logoAndCart__headerContent}>
                        <h2>О компании</h2>
                        <h2>Каталог</h2>
                        <h2>Оплата и доставка</h2>
                        <h2>Контакты</h2>
                    </div>
                    <img src={cart} />
                </div>
            </div>
        </div>
    );
};

export default Header;
