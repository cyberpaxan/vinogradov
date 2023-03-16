import React from 'react';
import Header from '../../../MainPageFolder/Header/Header';
import styles from './HoneyLavender.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import honey11 from '../../../../assets/images/CatalogImg/honey11.png';
import honey12 from '../../../../assets/images/CatalogImg/honey12.png';
import honey13 from '../../../../assets/images/CatalogImg/honey13.png';
import honey14 from '../../../../assets/images/CatalogImg/honey14.png';
import honey15 from '../../../../assets/images/CatalogImg/honey15.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

const HoneyLavender = () => {
    return (
        <div>
            <div className={styles.lavender}>
                <Header />
                <div className={styles.lavender__content}>
                    <div className={styles.lavender__content__imgs1}>
                        <div className={styles.lavender__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.lavender__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.lavender__content__mainblock}>
                        <div
                            className={
                                styles.lavender__content__mainblock__title
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.lavender__content__mainblock__title__1
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
                                        styles.lavender__content__mainblock__title__2
                                    }
                                >
                                    Травы
                                </div>
                            </Link>
                            <div
                                className={
                                    styles.lavender__content__mainblock__title__2
                                }
                            >
                                Воск/Свечи
                            </div>
                            <div
                                className={
                                    styles.lavender__content__mainblock__title__2
                                }
                            >
                                Подарочные наборы
                            </div>
                        </div>

                        <div
                            className={
                                styles.lavender__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.lavender__content__mainblock__categories__2
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
                                        styles.lavender__content__mainblock__categories__2
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
                                        styles.lavender__content__mainblock__categories__2
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
                                        styles.lavender__content__mainblock__categories__1
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
                                        styles.lavender__content__mainblock__categories__2
                                    }
                                >
                                    Сады Тавриды
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.lavender__content__mainblock__items
                            }
                        >
                            <CatalogItem
                                img={honey11}
                                title='Мёд “Крымская коллекция” 150 гр.'
                                price={264}
                            />
                            <CatalogItem
                                img={honey12}
                                title='Мёд “Крымская коллекция” 250 гр.'
                                price={407}
                            />
                            <CatalogItem
                                img={honey13}
                                title='Мёд “Крымская коллекция” 350 гр.'
                                price={550}
                            />
                            <CatalogItem
                                img={honey14}
                                title='Мёд “Крымская коллекция” 550 гр.'
                                price={836}
                            />
                            <CatalogItem
                                img={honey15}
                                title='Мёд “Крымская коллекция” 1000 гр.'
                                price={1479}
                            />
                        </div>
                    </div>

                    <div className={styles.lavender__content__imgs2}>
                        <div className={styles.lavender__content__imgs2__1}>
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

export default HoneyLavender;
