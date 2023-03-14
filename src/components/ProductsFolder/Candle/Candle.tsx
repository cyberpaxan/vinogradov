import React from 'react';
import Header from '../../MainPageFolder/Header/Header';
import cells10 from '../../../assets/images/cells10.png';
import cells8 from '../../../assets/images/cells8.png';
import arrow_l from '../../../assets/images/arrow_l.png';
import Footer from '../../MainPageFolder/Footer/Footer';
import styles from './Candle.module.scss';

import candle1 from '../../../assets/images/ProductsImg/candle1.png';
import candle2 from '../../../assets/images/ProductsImg/candle2.png';
import candle3 from '../../../assets/images/ProductsImg/candle3.png';

const Candle = () => {
    return (
        <div>
            <div className={styles.candle}>
                <Header />
                <div className={styles.candle__content}>
                    <div className={styles.candle__content__img1}>
                        <img src={cells10} />
                    </div>

                    <div className={styles.candle__content__mainblock}>
                        <div
                            className={styles.candle__content__mainblock__path}
                        >
                            <h1>
                                <img src={arrow_l} width={12} /> Назад
                            </h1>
                            <h2>
                                | Главная / Воск/свечи / Свечи / Свеча восковая
                                "Вощина" 100 мм
                            </h2>
                        </div>

                        <div
                            className={
                                styles.candle__content__mainblock__product
                            }
                        >
                            <div
                                className={
                                    styles.candle__content__mainblock__product__images
                                }
                            >
                                <div
                                    className={
                                        styles.candle__content__mainblock__product__images__big
                                    }
                                >
                                    <div className={styles.left}>
                                        <img src={arrow_l} width={25} />
                                    </div>
                                    <img src={candle1} />
                                    <div className={styles.right}>
                                        <img src={arrow_l} width={25} />
                                    </div>
                                </div>
                                <div
                                    className={
                                        styles.candle__content__mainblock__product__images__small
                                    }
                                >
                                    <img src={candle2} />
                                    <img src={candle3} />
                                </div>
                            </div>

                            <div
                                className={
                                    styles.candle__content__mainblock__product__desc
                                }
                            >
                                <h1>Свеча восковая "Вощина", высота 100мм</h1>

                                <h2>120 руб.</h2>
                                <h4>Масса нетто</h4>
                                <h6>42 гр.</h6>

                                <h4>Упаковка</h4>
                                <h5>Пакет крафт</h5>

                                <h4>Материалы</h4>
                                <h5>
                                    Вощина из пчелиного воска, фитиль хлопок,
                                    фитиледержатель, масло гхи.
                                </h5>
                                <h4>Размер</h4>
                                <h5>Диаметр 40мм, высота 100мм.</h5>
                                <button>В корзину</button>
                            </div>
                        </div>
                        <div
                            className={styles.candle__content__mainblock__text}
                        >
                            <h1>Описание</h1>
                            <h2>
                                Во всех свечах использован фитиль пропитанный
                                маслом гхи. А также установлен фитиледержатель,
                                для того, чтобы свеча могла гореть даже когда
                                весь воск расплавится и стечёт в подсвечник.
                                Свечи сгорают на 100% при подборе оптимального
                                подсвечника.
                            </h2>
                            <h1>Полезные советы</h1>
                            <h2>
                                - Свечи, охлажденные перед использованием, горят
                                медленнее и ровнее. (от холода на воске
                                появляются морозные узоры, достаточно протереть
                                сухой тряпочкой, чтобы они исчезли) Чтобы свечи
                                не абсорбировали запахи из холодильника,
                                заверните их в фольгу или полиэтилен. Внимание:
                                охлаждённая свеча из вощины становится более
                                хрупкой.
                                <br />- Во избежание копоти не располагать
                                горящую свечу на сквозняке.
                                <br /> - Хранить свечи в темном прохладном
                                месте.
                                <br /> - При зажигании свечи высота фитиля
                                должна быть не более 8-10мм. Так же следите за
                                высотой фитиля горящей свечи: регулярно
                                подрезайте его до уровня 6-7 мм.
                                <br /> - Не оставляйте свечи на солнце или рядом
                                с источниками тепла - свечи могут потерять цвет
                                оплавиться.
                                <br /> - Освободите свечи от упаковочного
                                материала и декоративных украшений в виде лент,
                                бумажных этикеток и т.п.;.
                                <br /> - Зажженная свеча должна быть установлена
                                в подсвечник или на несгораемую подставку.
                                <br /> - Располагайте свечи в местах,
                                недоступных для детей и животных.
                                <br />- Соблюдайте безопасное расстояние до
                                пожароопасных предметов.
                                <br /> - Не оставляйте зажженные свечи без
                                присмотра.
                                <br /> - Данные свечи являются изделиями ручной
                                работы, поэтому свечи одной серии могут иметь
                                незначительные различия по цветовому оттенку,
                                форме, массе и размерам.
                            </h2>
                            <h1>Изготовитель/упаковщик</h1>
                            <h2>
                                Крестьянское хозяйство Виноградовых, г.
                                Севастополь. Крым.
                            </h2>
                        </div>
                    </div>

                    <div className={styles.candle__content__img2}>
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

export default Candle;
