import React from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './HerbsFitosbor.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

import herb9 from '../../../../assets/images/CatalogImg/herb9.png';
import herb10 from '../../../../assets/images/CatalogImg/herb10.png';
import herb11 from '../../../../assets/images/CatalogImg/herb11.png';
import herb12 from '../../../../assets/images/CatalogImg/herb12.png';
import herb13 from '../../../../assets/images/CatalogImg/herb13.png';
import herb14 from '../../../../assets/images/CatalogImg/herb14.png';

const HerbsFitosbor = () => {
    return (
        <div>
            <div className={styles.fitosbor}>
                <Header />
                <div className={styles.fitosbor__content}>
                    <div className={styles.fitosbor__content__imgs1}>
                        <div className={styles.fitosbor__content__imgs1__1}>
                            <img src={cells10} />
                        </div>
                    </div>

                    <div className={styles.fitosbor__content__mainblock}>
                        <div
                            className={
                                styles.fitosbor__content__mainblock__title
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.fitosbor__content__mainblock__title__2
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
                                        styles.fitosbor__content__mainblock__title__1
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
                                        styles.fitosbor__content__mainblock__title__2
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
                                        styles.fitosbor__content__mainblock__title__2
                                    }
                                >
                                    Подарочные наборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.fitosbor__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/herbs/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.fitosbor__content__mainblock__categories__2
                                    }
                                >
                                    Все
                                </div>
                            </Link>
                            <Link
                                to='/catalog/herbs/monastic'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.fitosbor__content__mainblock__categories__2
                                    }
                                >
                                    "Чай монастырский"
                                </div>
                            </Link>
                            <Link
                                to='/catalog/herbs/fitosbor'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.fitosbor__content__mainblock__categories__1
                                    }
                                >
                                    Фитосборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.fitosbor__content__mainblock__items
                            }
                        >
                            <CatalogItem
                                img={herb9}
                                title='"Солнышно детский, для ванны"'
                                price={450}
                            />
                            <CatalogItem
                                img={herb10}
                                title='Запарка банная "Легкое дыхание"'
                                price={300}
                            />
                            <CatalogItem
                                img={herb11}
                                title='Запарка банная "Здоровье"'
                                price={300}
                            />
                            <CatalogItem
                                img={herb12}
                                title='"Укрепление волос"'
                                price={450}
                            />
                            <CatalogItem
                                img={herb13}
                                title='"Противоалкогольный сбор"'
                                price={450}
                            />
                            <CatalogItem
                                img={herb14}
                                title='"Кизиловый сад"'
                                price={520}
                            />
                        </div>
                    </div>

                    <div className={styles.fitosbor__content__imgs2}>
                        <div className={styles.fitosbor__content__imgs2__1}>
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

export default HerbsFitosbor;
