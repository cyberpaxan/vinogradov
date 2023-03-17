import React from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './WaxOnly.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

import wax1 from '../../../../assets/images/CatalogImg/wax1.png';
import wax2 from '../../../../assets/images/CatalogImg/wax2.png';
import wax3 from '../../../../assets/images/CatalogImg/wax3.png';
import wax4 from '../../../../assets/images/CatalogImg/wax4.png';

const WaxOnly = () => {
    return (
        <div>
            <div className={styles.wax}>
                <Header />
                <div className={styles.wax__content}>
                    <div className={styles.wax__content__imgs1}>
                        <div className={styles.wax__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.wax__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.wax__content__mainblock}>
                        <div className={styles.wax__content__mainblock__title}>
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.wax__content__mainblock__title__2
                                    }
                                >
                                    Мёд
                                </div>
                            </Link>

                            <Link
                                to='/catalog/herbs/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.wax__content__mainblock__title__2
                                    }
                                >
                                    Травы
                                </div>
                            </Link>

                            <Link
                                to='/catalog/wax/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.wax__content__mainblock__title__1
                                    }
                                >
                                    Воск/Свечи
                                </div>
                            </Link>

                            <Link
                                to='/catalog/gifts/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.wax__content__mainblock__title__2
                                    }
                                >
                                    Подарочные наборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.wax__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/wax/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.wax__content__mainblock__categories__2
                                    }
                                >
                                    Все
                                </div>
                            </Link>
                            <Link
                                to='/catalog/wax/wax'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.wax__content__mainblock__categories__1
                                    }
                                >
                                    Воск
                                </div>
                            </Link>
                            <Link
                                to='/catalog/wax/candles'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.wax__content__mainblock__categories__2
                                    }
                                >
                                    Свечи
                                </div>
                            </Link>
                        </div>

                        <div className={styles.wax__content__mainblock__items}>
                            <CatalogItem
                                img={wax1}
                                title='Воск 25 гр.'
                                price={50}
                            />

                            <CatalogItem
                                img={wax2}
                                title='Воск 100 гр.'
                                price={200}
                            />
                            <CatalogItem
                                img={wax3}
                                title='Воск 250 гр.'
                                price={500}
                            />
                            <CatalogItem
                                img={wax4}
                                title='Воск 5000 гр.'
                                price={10000}
                            />
                        </div>
                    </div>

                    <div className={styles.wax__content__imgs2}>
                        <div className={styles.wax__content__imgs2__1}>
                            <img src={sunflower5} width={150} />
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default WaxOnly;
