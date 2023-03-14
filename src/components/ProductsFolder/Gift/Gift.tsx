import React from 'react';
import styles from './Gift.module.scss';
import cells10 from '../../../assets/images/cells10.png';
import cells8 from '../../../assets/images/cells8.png';
import arrow_l from '../../../assets/images/arrow_l.png';
import gift1 from '../../../assets/images/ProductsImg/gift1.png';
import Footer from '../../MainPageFolder/Footer/Footer';
import Header from '../../MainPageFolder/Header/Header';

const Gift = () => {
    return (
        <div>
            <div className={styles.gift}>
                <Header />
                <div className={styles.gift__content}>
                    <div className={styles.gift__content__img1}>
                        <img src={cells10} />
                    </div>

                    <div className={styles.gift__content__mainblock}>
                        <div className={styles.gift__content__mainblock__path}>
                            <h1>
                                <img src={arrow_l} width={12} /> Назад
                            </h1>
                            <h2>
                                | Главная / Подарочные наборы / Горный Эко / Мёд
                                подарочный, базилика
                            </h2>
                        </div>

                        <div
                            className={styles.gift__content__mainblock__product}
                        >
                            <div
                                className={
                                    styles.gift__content__mainblock__product__images
                                }
                            >
                                <div
                                    className={
                                        styles.gift__content__mainblock__product__images__big
                                    }
                                >
                                    <img src={gift1} />
                                </div>
                            </div>

                            <div
                                className={
                                    styles.gift__content__mainblock__product__desc
                                }
                            >
                                <h1>
                                    Мёд подарочный, "Солнечный Крым", базилика
                                </h1>
                                <h3>Генуэзская крепость, г. Судак.</h3>
                                <h2>2 000 руб.</h2>
                                <h4>Масса нетто</h4>
                                <h6>550 гр.</h6>
                                <h4>Состав</h4>
                                <h5>
                                    Мёд натуральный цветочный, горное
                                    разнотравье
                                </h5>
                                <h4>Упаковка</h4>
                                <h5>
                                    Стеклянная банка, металлическая крышка,
                                    футляр, пакет бумажный
                                </h5>
                                <button>В корзину</button>
                            </div>
                        </div>
                        <div className={styles.gift__content__mainblock__text}>
                            <h1>Описание</h1>
                            <h2>
                                На стеклянных банках «Твист» (четырёхгранник)
                                профессиональным художником из Симферополя Анной
                                Сониной (А.С.) выполнены миниатюры
                                достопримечательностей Крыма. В данные ёмкости
                                расфасовано по 550 г элитного горного мёда,
                                банки промаркированы этикетками, закрыты
                                металлическими резьбовыми крышками и опечатаны
                                защитными марками с логотипом нашего хозяйства.
                                К банке прилагается мини-буклет.
                                <br />
                                <br />
                                Каждая банка вложена в футляр из прозрачного
                                материала и помещена в бумажный подарочный пакет
                                с символикой хозяйства.
                            </h2>
                        </div>
                    </div>

                    <div className={styles.gift__content__img2}>
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

export default Gift;
