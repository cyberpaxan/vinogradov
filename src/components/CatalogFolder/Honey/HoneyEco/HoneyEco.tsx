import React from 'react';
import Header from '../../../MainPageFolder/Header/Header';
import styles from './HoneyEco.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import honey1 from '../../../../assets/images/CatalogImg/honey1.png';
import honey2 from '../../../../assets/images/CatalogImg/honey2.png';
import honey3 from '../../../../assets/images/CatalogImg/honey3.png';
import honey4 from '../../../../assets/images/CatalogImg/honey4.png';
import honey5 from '../../../../assets/images/CatalogImg/honey5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

const HoneyEco = () => {
    return (
        <div>
            <div className={styles.eco}>
                <Header />
                <div className={styles.eco__content}>
                    <div className={styles.eco__content__imgs1}>
                        <div className={styles.eco__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.eco__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.eco__content__mainblock}>
                        <div className={styles.eco__content__mainblock__title}>
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.eco__content__mainblock__title__1
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
                                        styles.eco__content__mainblock__title__2
                                    }
                                >
                                    Травы
                                </div>
                            </Link>
                            <div
                                className={
                                    styles.eco__content__mainblock__title__2
                                }
                            >
                                Воск/Свечи
                            </div>
                            <div
                                className={
                                    styles.eco__content__mainblock__title__2
                                }
                            >
                                Подарочные наборы
                            </div>
                        </div>

                        <div
                            className={
                                styles.eco__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.eco__content__mainblock__categories__2
                                    }
                                >
                                    Все
                                </div>
                            </Link>
                            <Link
                                to='/catalog/honey/eco'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.eco__content__mainblock__categories__1
                                    }
                                >
                                    Горный Эко
                                </div>
                            </Link>
                            <Link
                                to='/catalog/honey/crimea'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.eco__content__mainblock__categories__2
                                    }
                                >
                                    Крымская коллекция
                                </div>
                            </Link>

                            <Link
                                to='/catalog/honey/lavender'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.eco__content__mainblock__categories__2
                                    }
                                >
                                    Лавандовый
                                </div>
                            </Link>

                            <Link
                                to='/catalog/honey/tavrida'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.eco__content__mainblock__categories__2
                                    }
                                >
                                    Сады Тавриды
                                </div>
                            </Link>
                        </div>

                        <div className={styles.eco__content__mainblock__items}>
                            <CatalogItem
                                img={honey1}
                                title='Мёд Горный ЭКО 150 гр.'
                                price={264}
                            />
                            <CatalogItem
                                img={honey2}
                                title='Мёд Горный ЭКО 250 гр.'
                                price={407}
                            />
                            <CatalogItem
                                img={honey3}
                                title='Мёд Горный ЭКО 350 гр.'
                                price={550}
                            />
                            <CatalogItem
                                img={honey4}
                                title='Мёд Горный ЭКО 550 гр.'
                                price={836}
                            />
                            <CatalogItem
                                img={honey5}
                                title='Мёд Горный ЭКО 1000 гр.'
                                price={1479}
                            />
                        </div>
                    </div>

                    <div className={styles.eco__content__imgs2}>
                        <div className={styles.eco__content__imgs2__1}>
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

export default HoneyEco;
