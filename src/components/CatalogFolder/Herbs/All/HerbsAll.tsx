import React from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './HerbsAll.module.scss';
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
import herb9 from '../../../../assets/images/CatalogImg/herb9.png';
import herb10 from '../../../../assets/images/CatalogImg/herb10.png';
import herb11 from '../../../../assets/images/CatalogImg/herb11.png';
import herb12 from '../../../../assets/images/CatalogImg/herb12.png';
import herb13 from '../../../../assets/images/CatalogImg/herb13.png';
import herb14 from '../../../../assets/images/CatalogImg/herb14.png';

const HerbsAll = () => {
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
                                        styles.all__content__mainblock__title__1
                                    }
                                >
                                    Травы
                                </div>
                            </Link>
                            <div
                                className={
                                    styles.all__content__mainblock__title__2
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
                                to='/catalog/herbs/all'
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
                                to='/catalog/herbs/monastic'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.all__content__mainblock__categories__2
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
                                        styles.all__content__mainblock__categories__2
                                    }
                                >
                                    Фитосборы
                                </div>
                            </Link>
                        </div>

                        <div className={styles.all__content__mainblock__items}>
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

export default HerbsAll;
