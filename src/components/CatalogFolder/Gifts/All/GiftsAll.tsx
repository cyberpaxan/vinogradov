import React from 'react';

import Header from '../../../MainPageFolder/Header/Header';
import styles from './GiftsAll.module.scss';
import { Link } from 'react-router-dom';

import sunflower5 from '../../../../assets/images/sunflower5.png';

import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

import gift1 from '../../../../assets/images/CatalogImg/gift1.png';
import gift2 from '../../../../assets/images/CatalogImg/gift2.png';
import gift3 from '../../../../assets/images/CatalogImg/gift3.png';
import gift4 from '../../../../assets/images/CatalogImg/gift4.png';
import gift5 from '../../../../assets/images/CatalogImg/gift5.png';
import gift6 from '../../../../assets/images/CatalogImg/gift6.png';
import gift7 from '../../../../assets/images/CatalogImg/gift7.png';
import gift8 from '../../../../assets/images/CatalogImg/gift8.png';
import gift9 from '../../../../assets/images/CatalogImg/gift9.png';

const GiftsAll = () => {
    return (
        <div>
            <div className={styles.all}>
                <Header />
                <div className={styles.all__content}>
                    <div className={styles.all__content__imgs1}>
                        <div className={styles.all__content__imgs1__1}>
                            <img src={cells10} />
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

                            <Link
                                to='/catalog/wax/all'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className={
                                        styles.all__content__mainblock__title__2
                                    }
                                >
                                    Воск/Свечи
                                </div>
                            </Link>

                            <div
                                className={
                                    styles.all__content__mainblock__title__1
                                }
                            >
                                Подарочные наборы
                            </div>
                        </div>

                        <div className={styles.all__content__mainblock__items}>
                            <Link
                                to='/products/gift'
                                style={{ textDecoration: 'none' }}
                            >
                                <CatalogItem
                                    img={gift3}
                                    title='Мёд подарочный "Солнечный Крым", базилика'
                                    price={2000}
                                />
                            </Link>

                            <CatalogItem
                                img={gift2}
                                title='Мёд подарочный "Генуэзская крепость"'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift1}
                                title='Мёд подарочный гора "Аю-Даг"'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift4}
                                title='Мёд подарочный памятник "Затопленным кораблям"'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift5}
                                title='Мёд подарочный крепость "Чембало" в Балаклаве'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift6}
                                title='Мёд подарочный замок "Ласточкино гнездо"'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift7}
                                title='Мёд подарочный "скала Св. Явления, мыс Фиолент"'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift8}
                                title='Мёд подарочный собор св. равноап. Кн. Владимира'
                                price={2000}
                            />
                            <CatalogItem
                                img={gift9}
                                title='Мёд подарочный скала "Золотые ворота"'
                                price={2000}
                            />
                        </div>
                    </div>

                    <div className={styles.all__content__imgs2}>
                        <div className={styles.all__content__imgs2__1}>
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

export default GiftsAll;
