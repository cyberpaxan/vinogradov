import React from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './WaxAll.module.scss';
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
import wax5 from '../../../../assets/images/CatalogImg/wax5.png';
import wax6 from '../../../../assets/images/CatalogImg/wax6.png';
import wax7 from '../../../../assets/images/CatalogImg/wax7.png';
import wax8 from '../../../../assets/images/CatalogImg/wax8.png';
import wax9 from '../../../../assets/images/CatalogImg/wax9.png';
import wax10 from '../../../../assets/images/CatalogImg/wax10.png';
import wax11 from '../../../../assets/images/CatalogImg/wax11.png';
import wax12 from '../../../../assets/images/CatalogImg/wax12.png';
import wax13 from '../../../../assets/images/CatalogImg/wax13.png';
import wax14 from '../../../../assets/images/CatalogImg/wax14.png';
import wax15 from '../../../../assets/images/CatalogImg/wax15.png';
import wax16 from '../../../../assets/images/CatalogImg/wax16.png';

const WaxAll = () => {
    return (
        <div>
            <div className={styles.all}>
                <Header />
                <div className={styles.all__content}>
                    <div className={styles.all__content__imgs1}>
                        <div className={styles.all__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.all__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.all__content__mainblock}>
                        <div className={styles.all__content__mainblock__title}>
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.all__content__mainblock__title__2
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
                                        styles.all__content__mainblock__title__2
                                    }
                                >
                                    Травы
                                </div>
                            </Link>
                            <div
                                className={
                                    styles.all__content__mainblock__title__1
                                }
                            >
                                Воск/Свечи
                            </div>
                            <div
                                className={
                                    styles.all__content__mainblock__title__2
                                }
                            >
                                Подарочные наборы
                            </div>
                        </div>

                        <div
                            className={
                                styles.all__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/wax/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.all__content__mainblock__categories__1
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
                                        styles.all__content__mainblock__categories__2
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
                                        styles.all__content__mainblock__categories__2
                                    }
                                >
                                    Свечи
                                </div>
                            </Link>
                        </div>

                        <div className={styles.all__content__mainblock__items}>
                            <Link
                                to='/products/candle'
                                style={{ textDecoration: 'none' }}
                            >
                                <CatalogItem
                                    img={wax7}
                                    title='Свеча восковая "Вощина" 100 мм'
                                    price={120}
                                />
                            </Link>

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
                            <CatalogItem
                                img={wax5}
                                title='Свеча восковая "Горшочек"'
                                price={250}
                            />
                            <CatalogItem
                                img={wax6}
                                title='Свеча восковая "Чайная"'
                                price={49}
                            />
                            <CatalogItem
                                img={wax1}
                                title='Воск 25 гр.'
                                price={50}
                            />
                            <CatalogItem
                                img={wax8}
                                title='Свеча восковая "Куб" 50 мм'
                                price={400}
                            />
                            <CatalogItem
                                img={wax9}
                                title='Свеча восковая "Куб" 80 мм'
                                price={550}
                            />
                            <CatalogItem
                                img={wax10}
                                title='Свеча восковая "Цилиндр" 70 мм'
                                price={480}
                            />
                            <CatalogItem
                                img={wax11}
                                title='Свеча восковая "Ёлка", 90 мм'
                                price={500}
                            />
                            <CatalogItem
                                img={wax12}
                                title='Свеча восковая "Ёлка", 125 мм'
                                price={750}
                            />
                            <CatalogItem
                                img={wax13}
                                title='Свеча восковая литая "Круглая" 270 мм'
                                price={270}
                            />
                            <CatalogItem
                                img={wax14}
                                title='Свеча восковая литая "Квадрат" 200 мм'
                                price={200}
                            />
                            <CatalogItem
                                img={wax15}
                                title='Свеча восковая "Вощина", 210 мм'
                                price={200}
                            />
                            <CatalogItem
                                img={wax16}
                                title='Свеча восковая "Цветок"'
                                price={80}
                            />
                        </div>
                    </div>

                    <div className={styles.all__content__imgs2}>
                        <div className={styles.all__content__imgs2__1}>
                            <img src={sunflower5} width={150} />
                        </div>

                        <div className={styles.all__content__imgs2__2}>
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

export default WaxAll;
