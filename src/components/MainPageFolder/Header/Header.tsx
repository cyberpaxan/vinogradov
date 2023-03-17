import React from 'react';
import styles from './Header.module.scss';
import cart from '../../../assets/images/cart.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
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
            <div className={styles.header}>
                <div className={styles.header__logoAndCart}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h1>Виноградовъ</h1>
                    </Link>
                    <div className={styles.header__logoAndCart__headerContent}>
                        <Link
                            to='/'
                            style={{ textDecoration: 'none' }}
                            onClick={() =>
                                window.scrollTo({
                                    top: 940,
                                    behavior: 'smooth',
                                })
                            }
                        >
                            <h2>О компании</h2>
                        </Link>

                        <Link
                            to='/catalog/honey/all'
                            style={{ textDecoration: 'none' }}
                        >
                            <h2>Каталог</h2>
                        </Link>
                        <Link
                            to='/'
                            style={{ textDecoration: 'none' }}
                            onClick={() =>
                                window.scrollTo({
                                    top: 4150,
                                    behavior: 'smooth',
                                })
                            }
                        >
                            <h2>Оплата и доставка</h2>
                        </Link>

                        <Link
                            to='/'
                            style={{ textDecoration: 'none' }}
                            onClick={() =>
                                window.scrollTo({
                                    top: 8295,
                                    behavior: 'smooth',
                                })
                            }
                        >
                            <h2>Контакты</h2>
                        </Link>
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
