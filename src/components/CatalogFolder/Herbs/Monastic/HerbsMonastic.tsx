import React from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './HerbsMonastic.module.scss';
import { Link } from 'react-router-dom';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

import herb1 from '../../../../assets/images/CatalogImg/herb1.png';
import herb2 from '../../../../assets/images/CatalogImg/herb2.png';
import herb3 from '../../../../assets/images/CatalogImg/herb3.png';
import herb4 from '../../../../assets/images/CatalogImg/herb4.png';
import herb5 from '../../../../assets/images/CatalogImg/herb5.png';
import herb6 from '../../../../assets/images/CatalogImg/herb6.png';
import herb7 from '../../../../assets/images/CatalogImg/herb7.png';
import herb8 from '../../../../assets/images/CatalogImg/herb8.png';

const HerbsMonastic = () => {
    return (
        <div>
            <div className={styles.monastic}>
                <Header />
                <div className={styles.monastic__content}>
                    <div className={styles.monastic__content__imgs1}>
                        <div className={styles.monastic__content__imgs1__1}>
                            <img src={cells10} />
                        </div>

                        <div className={styles.monastic__content__imgs1__2}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.monastic__content__mainblock}>
                        <div
                            className={
                                styles.monastic__content__mainblock__title
                            }
                        >
                            <Link
                                to='/catalog/honey/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.monastic__content__mainblock__title__2
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
                                        styles.monastic__content__mainblock__title__1
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
                                        styles.monastic__content__mainblock__title__2
                                    }
                                >
                                    Воск/Свечи
                                </div>
                            </Link>

                            <div
                                className={
                                    styles.monastic__content__mainblock__title__2
                                }
                            >
                                Подарочные наборы
                            </div>
                        </div>

                        <div
                            className={
                                styles.monastic__content__mainblock__categories
                            }
                        >
                            <Link
                                to='/catalog/herbs/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.monastic__content__mainblock__categories__2
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
                                        styles.monastic__content__mainblock__categories__1
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
                                        styles.monastic__content__mainblock__categories__2
                                    }
                                >
                                    Фитосборы
                                </div>
                            </Link>
                        </div>

                        <div
                            className={
                                styles.monastic__content__mainblock__items
                            }
                        >
                            <Link
                                to='/products/tea'
                                style={{ textDecoration: 'none' }}
                            >
                                <CatalogItem
                                    img={herb1}
                                    title='"Чай Монастырский" противодиабетический'
                                    price={520}
                                />
                            </Link>

                            <CatalogItem
                                img={herb2}
                                title='"Чай Монастырский" общеукрепляющий'
                                price={520}
                            />
                            <CatalogItem
                                img={herb3}
                                title='"Чай Монастырский" успокоительный'
                                price={520}
                            />
                            <CatalogItem
                                img={herb4}
                                title='"Чай Монастырский" грудной сбор'
                                price={520}
                            />
                            <CatalogItem
                                img={herb5}
                                title='"Чай Монастырский" травоочиститель'
                                price={520}
                            />
                            <CatalogItem
                                img={herb6}
                                title='"Чай Монастырский" бальзам здоровья'
                                price={520}
                            />
                            <CatalogItem
                                img={herb7}
                                title='"Чай Монастырский" от курения'
                                price={520}
                            />
                            <CatalogItem
                                img={herb8}
                                title='"Чай Монастырский" нормализующий давление'
                                price={520}
                            />
                        </div>
                    </div>

                    <div className={styles.monastic__content__imgs2}>
                        <div className={styles.monastic__content__imgs2__1}>
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

export default HerbsMonastic;
