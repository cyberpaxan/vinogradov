import React from 'react';
import Header from '../../MainPageFolder/Header/Header';
import styles from './OrderMaker.module.scss';
import cells8 from '../../../assets/images/cells8.png';
import sunflower4 from '../../../assets/images/sunflower4.png';

const OrderMaker = () => {
    return (
        <div>
            <div className={styles.order}>
                <Header />
                <div className={styles.order__content}>
                    <div className={styles.order__content__img1}>
                        <img src={sunflower4} />
                    </div>

                    <div className={styles.order__content__block}>
                        <div className={styles.order__content__block__info}>
                            <h1>Оформление заказа</h1>
                        </div>

                        <div className={styles.order__content__block__faces}>
                            <div
                                className={
                                    styles.order__content__block__faces__1
                                }
                            >
                                <h2>Физическое лицо</h2>
                            </div>
                            <div
                                className={
                                    styles.order__content__block__faces__2
                                }
                            >
                                <h2>Юридическое лицо</h2>
                            </div>
                        </div>

                        <div className={styles.order__content__block__inputs1}>
                            <div
                                className={
                                    styles.order__content__block__inputs1__1
                                }
                            >
                                <h1>Имя</h1>
                                <input type='text' placeholder='Имя' />
                            </div>
                            <div
                                className={
                                    styles.order__content__block__inputs1__2
                                }
                            >
                                <h1>Номер телефона</h1>
                                <input
                                    type='text'
                                    placeholder='Номер телефона'
                                />
                            </div>
                            <div
                                className={
                                    styles.order__content__block__inputs1__3
                                }
                            >
                                <h1>E-Mail</h1>
                                <input type='text' placeholder='E-Mail' />
                            </div>
                        </div>

                        <div className={styles.order__content__block__inputs2}>
                            <div
                                className={
                                    styles.order__content__block__inputs2__1
                                }
                            >
                                <h1>Ваш город</h1>
                                <input type='text' placeholder='Ваш город' />
                            </div>

                            <div
                                className={
                                    styles.order__content__block__inputs2__2
                                }
                            >
                                <form>
                                    <select>
                                        <option>Доставка по Севастополю</option>
                                        <option>Самовывоз</option>
                                        <option>Почта России</option>
                                        <option>
                                            Доставка до пункта выдачи Boxberry
                                        </option>
                                        <option>
                                            Доставка до пункта выдачи ПЭК
                                        </option>
                                        <option>
                                            Доставка до пункта выдачи ПЭК
                                        </option>
                                        <option>
                                            Доставка до пункта выдачи CDEK
                                        </option>
                                        <option>
                                            Доставка до пункта выдачи Деловые
                                            линии
                                        </option>
                                        <option>
                                            Доставка до пункта выдачи DPD
                                        </option>
                                        <option>
                                            Доставка до пункта выдачи
                                            ГлавДоставка
                                        </option>
                                        <option>
                                            Доставка до пункта выдачи Мэйджик
                                            Транс
                                        </option>
                                    </select>
                                </form>
                            </div>
                        </div>

                        <div className={styles.order__content__block__inputs3}>
                            <div
                                className={
                                    styles.order__content__block__inputs3__1
                                }
                            >
                                <form>
                                    <select>
                                        <option>Адрес пункта выдачи</option>
                                    </select>
                                </form>
                            </div>
                        </div>

                        <div className={styles.order__content__block__payments}>
                            <div
                                className={
                                    styles.order__content__block__payments__1
                                }
                            >
                                <h2>Онлайн - оплата</h2>
                            </div>
                            <div
                                className={
                                    styles.order__content__block__payments__2
                                }
                            >
                                <h2>Оплата через банк</h2>
                            </div>
                        </div>
                    </div>

                    <div className={styles.order__content__img2}>
                        <img src={cells8} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderMaker;
