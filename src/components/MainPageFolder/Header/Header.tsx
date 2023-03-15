import React from 'react';
import styles from './Header.module.scss';
import cart from '../../../assets/images/cart.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header__logoAndCart}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h1>Виноградовъ</h1>
                    </Link>
                    <div className={styles.header__logoAndCart__headerContent}>
                        <h2>О компании</h2>
                        <Link
                            to='/catalog/honey/all'
                            style={{ textDecoration: 'none' }}
                        >
                            <h2>Каталог</h2>
                        </Link>
                        <h2>Оплата и доставка</h2>
                        <h2>Контакты</h2>
                    </div>
                    <Link to='/cart'>
                        <img src={cart} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
