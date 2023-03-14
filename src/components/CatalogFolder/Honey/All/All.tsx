import React from 'react';
import Header from '../../../MainPageFolder/Header/Header';
import styles from './All.module.scss';

import sunflower1 from '../../../../assets/images/sunflower1.png';
import sunflower5 from '../../../../assets/images/sunflower5.png';
import honey1 from '../../../../assets/images/CatalogImg/honey1.png';
import cells10 from '../../../../assets/images/cells10.png';
import Footer from '../../../MainPageFolder/Footer/Footer';
import CatalogItem from '../../CatalogItem/CatalogItem';

const All = () => {
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

                        <div className={styles.all__content__imgs1__3}>
                            <img src={sunflower1} width={150} />
                        </div>
                    </div>

                    <div className={styles.all__content__mainblock}>
                        <div className={styles.all__content__mainblock__title}>
                            Мёд
                        </div>

                        <div
                            className={
                                styles.all__content__mainblock__categories
                            }
                        >
                            <div
                                className={
                                    styles.all__content__mainblock__categories__1
                                }
                            >
                                Все
                            </div>
                            <div
                                className={
                                    styles.all__content__mainblock__categories__2
                                }
                            >
                                Горный Эко
                            </div>
                            <div
                                className={
                                    styles.all__content__mainblock__categories__2
                                }
                            >
                                Крымская коллекция
                            </div>
                            <div
                                className={
                                    styles.all__content__mainblock__categories__2
                                }
                            >
                                Лавандовый
                            </div>
                            <div
                                className={
                                    styles.all__content__mainblock__categories__2
                                }
                            >
                                Сады Тавриды
                            </div>
                        </div>

                        <div className={styles.all__content__mainblock__items}>
                            <CatalogItem
                                img={honey1}
                                title='Мёд Горный ЭКО 150 гр.'
                                price={264}
                            />
                            <CatalogItem
                                img={honey1}
                                title='Мёд Горный ЭКО 150 гр.'
                                price={264}
                            />
                            <CatalogItem
                                img={honey1}
                                title='Мёд Горный ЭКО 150 гр.'
                                price={264}
                            />
                            <CatalogItem
                                img={honey1}
                                title='Мёд Горный ЭКО 150 гр.'
                                price={264}
                            />
                            <CatalogItem
                                img={honey1}
                                title='Мёд Горный ЭКО 150 гр.'
                                price={264}
                            />
                            <CatalogItem
                                img={honey1}
                                title='Мёд Горный ЭКО 150 гр.'
                                price={264}
                            />
                            <CatalogItem
                                img={honey1}
                                title='Мёд Горный ЭКО 150 гр.'
                                price={264}
                            />
                            <CatalogItem
                                img={honey1}
                                title='Мёд Горный ЭКО 150 гр.'
                                price={264}
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

export default All;
