import React from 'react';
import Header from '../../../MainPageFolder/Header/Header';
import styles from './HoneyCrimea.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import honey6 from '../../../../assets/images/CatalogImg/honey6.png';
import honey7 from '../../../../assets/images/CatalogImg/honey7.png';
import honey8 from '../../../../assets/images/CatalogImg/honey8.png';
import honey9 from '../../../../assets/images/CatalogImg/honey9.png';
import honey10 from '../../../../assets/images/CatalogImg/honey10.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

const HoneyCrimea = () => {
    return (
        <div>
            <div className={styles.crimea}>
                <Header />
                <div className={styles.crimea__content}>
                    <div className={styles.crimea__content__imgs1}>
                        <div className={styles.crimea__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.crimea__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.crimea__content__mainblock}>
                        <div
                            className={styles.crimea__content__mainblock__title}
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__title__1
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
                                        styles.crimea__content__mainblock__title__2
                                    }
                                >
                                    Травы
                                </div>
                            </Link>
                            <div
                                className={
                                    styles.crimea__content__mainblock__title__2
                                }
                            >
                                Воск/Свечи
                            </div>
                            <div
                                className={
                                    styles.crimea__content__mainblock__title__2
                                }
                            >
                                Подарочные наборы
                            </div>
                        </div>

                        <div
                            className={
                                styles.crimea__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.crimea__content__mainblock__categories__2
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
                                        styles.crimea__content__mainblock__categories__2
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
                                        styles.crimea__content__mainblock__categories__1
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
                                        styles.crimea__content__mainblock__categories__2
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
                                        styles.crimea__content__mainblock__categories__2
                                    }
                                >
                                    Сады Тавриды
                                </div>
                            </Link>
                        </div>

                        <div
                            className={styles.crimea__content__mainblock__items}
                        >
                            <CatalogItem
                                img={honey6}
                                title='Мёд “Крымская коллекция” 150 гр.'
                                price={211}
                            />
                            <CatalogItem
                                img={honey7}
                                title='Мёд “Крымская коллекция” 250 гр.'
                                price={318}
                            />
                            <CatalogItem
                                img={honey8}
                                title='Мёд “Крымская коллекция” 350 гр.'
                                price={425}
                            />
                            <CatalogItem
                                img={honey9}
                                title='Мёд “Крымская коллекция” 550 гр.'
                                price={639}
                            />
                            <CatalogItem
                                img={honey10}
                                title='Мёд “Крымская коллекция” 1000 гр.'
                                price={1121}
                            />
                        </div>
                    </div>

                    <div className={styles.crimea__content__imgs2}>
                        <div className={styles.crimea__content__imgs2__1}>
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

export default HoneyCrimea;
