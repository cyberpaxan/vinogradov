import React from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './HoneyTavrida.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import honey16 from '../../../../assets/images/CatalogImg/honey16.png';
import honey17 from '../../../../assets/images/CatalogImg/honey17.png';
import honey18 from '../../../../assets/images/CatalogImg/honey18.png';
import honey19 from '../../../../assets/images/CatalogImg/honey19.png';
import honey20 from '../../../../assets/images/CatalogImg/honey20.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

const HoneyTavrida = () => {
    return (
        <div>
            <div className={styles.tavrida}>
                <Header />
                <div className={styles.tavrida__content}>
                    <div className={styles.tavrida__content__imgs1}>
                        <div className={styles.tavrida__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.tavrida__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.tavrida__content__mainblock}>
                        <div
                            className={
                                styles.tavrida__content__mainblock__title
                            }
                        >
                            <div
                                className={
                                    styles.tavrida__content__mainblock__title__1
                                }
                            >
                                Мёд
                            </div>
                            <div
                                className={
                                    styles.tavrida__content__mainblock__title__2
                                }
                            >
                                Травы
                            </div>
                            <div
                                className={
                                    styles.tavrida__content__mainblock__title__2
                                }
                            >
                                Воск/Свечи
                            </div>
                            <div
                                className={
                                    styles.tavrida__content__mainblock__title__2
                                }
                            >
                                Подарочные наборы
                            </div>
                        </div>

                        <div
                            className={
                                styles.tavrida__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.tavrida__content__mainblock__categories__2
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
                                        styles.tavrida__content__mainblock__categories__2
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
                                        styles.tavrida__content__mainblock__categories__2
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
                                        styles.tavrida__content__mainblock__categories__2
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
                                        styles.tavrida__content__mainblock__categories__1
                                    }
                                >
                                    Сады Тавриды
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.tavrida__content__mainblock__items
                            }
                        >
                            <CatalogItem
                                img={honey16}
                                title='Мёд “Сада Тавриды” 150 гр.'
                                price={211}
                            />

                            <CatalogItem
                                img={honey17}
                                title='Мёд “Сада Тавриды” 250 гр.'
                                price={318}
                            />
                            <CatalogItem
                                img={honey18}
                                title='Мёд “Сада Тавриды” 350 гр.'
                                price={425}
                            />
                            <CatalogItem
                                img={honey19}
                                title='Мёд “Сада Тавриды” 550 гр.'
                                price={639}
                            />
                            <CatalogItem
                                img={honey20}
                                title='Мёд “Сада Тавриды” 1000 гр.'
                                price={1121}
                            />
                        </div>
                    </div>

                    <div className={styles.tavrida__content__imgs2}>
                        <div className={styles.tavrida__content__imgs2__1}>
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

export default HoneyTavrida;
