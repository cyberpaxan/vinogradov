import React from 'react';
import Header from '../../MainPageFolder/Header/Header';
import styles from './Honey.module.scss';
import cells10 from '../../../assets/images/cells10.png';
import cells8 from '../../../assets/images/cells8.png';
import arrow_l from '../../../assets/images/arrow_l.png';
import honey1 from '../../../assets/images/ProductsImg/honey1.png';
import honey2 from '../../../assets/images/ProductsImg/honey2.png';
import honey3 from '../../../assets/images/ProductsImg/honey3.png';
import honey4 from '../../../assets/images/ProductsImg/honey4.png';
import Footer from '../../MainPageFolder/Footer/Footer';

const Honey = () => {
    return (
        <div>
            <div className={styles.honey}>
                <Header />
                <div className={styles.honey__content}>
                    <div className={styles.honey__content__img1}>
                        <img src={cells10} />
                    </div>

                    <div className={styles.honey__content__mainblock}>
                        <div className={styles.honey__content__mainblock__path}>
                            <h1>
                                <img src={arrow_l} width={12} /> Назад
                            </h1>
                            <h2>
                                | Главная / Мёд / Горный Эко / Мёд Горный ЭКО
                                550 гр.
                            </h2>
                        </div>

                        <div
                            className={
                                styles.honey__content__mainblock__product
                            }
                        >
                            <div
                                className={
                                    styles.honey__content__mainblock__product__images
                                }
                            >
                                <div
                                    className={
                                        styles.honey__content__mainblock__product__images__big
                                    }
                                >
                                    <div className={styles.left}>
                                        <img src={arrow_l} width={25} />
                                    </div>
                                    <img src={honey1} />
                                    <div className={styles.right}>
                                        <img src={arrow_l} width={25} />
                                    </div>
                                </div>
                                <div
                                    className={
                                        styles.honey__content__mainblock__product__images__small
                                    }
                                >
                                    <img src={honey2} />
                                    <img src={honey3} />
                                    <img src={honey4} />
                                </div>
                            </div>

                            <div
                                className={
                                    styles.honey__content__mainblock__product__desc
                                }
                            >
                                <h1>Мёд цветочный, горный (разнотравье)</h1>
                                <h3>Урожай 2022 года</h3>
                                <h2>836 руб.</h2>
                                <h4>Масса нетто</h4>
                                <h5>550 гр.</h5>
                                <h4>Состав</h4>
                                <h5>
                                    Мёд натуральный цветочный, горное
                                    разнотравье
                                </h5>
                                <h4>Упаковка</h4>
                                <h5>
                                    Стеклянная банка, металлическая крышка,
                                    пакет крафт
                                </h5>
                                <button>В корзину</button>
                            </div>
                        </div>
                        <div className={styles.honey__content__mainblock__text}>
                            <h1>Описание</h1>
                            <h2>
                                Мёд крымский горный 2022 года относится к тёмным
                                видам мёда. Цвет мёда 2022 года — очень тёмный,
                                близкий к чёрному благодаря богатому
                                разнообразию горных трав. Вкус мёда умерено
                                сладкий, нежный, изысканный, с пикантной
                                кислинкой, долгим солоноватым послевкусием Этот
                                мёд, схожий по уникальным свойствам с мёдом
                                акации, обладает уникальными полезными
                                свойствами, благодаря тому, что собирается из
                                нектара цветов деревьев и трав, произрастающих в
                                экологически чистой среде горного массива мыса
                                Айя государственного заказника «Байдарский».
                                Минимальное количество глюкозы и преобладание
                                натуральной фруктозы делает продукт подходящим
                                для употребления людям с сахарным диабетом и
                                следящим за фигурой. В широкой продаже этот мёд
                                встречается редко, так как горный мёд всегда
                                добывается в относительно небольшом количестве,
                                а спрос на него высокий. Крафт.
                            </h2>
                        </div>
                    </div>

                    <div className={styles.honey__content__img2}>
                        <img src={cells8} />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Honey;
