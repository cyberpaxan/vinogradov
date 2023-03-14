import React from 'react';
import Header from '../../MainPageFolder/Header/Header';
import styles from './Tea.module.scss';
import cells10 from '../../../assets/images/cells10.png';
import cells8 from '../../../assets/images/cells8.png';
import arrow_l from '../../../assets/images/arrow_l.png';
import tea1 from '../../../assets/images/ProductsImg/tea1.png';
import Footer from '../../MainPageFolder/Footer/Footer';

const Tea = () => {
    return (
        <div>
            <div className={styles.tea}>
                <Header />
                <div className={styles.tea__content}>
                    <div className={styles.tea__content__img1}>
                        <img src={cells10} />
                    </div>

                    <div className={styles.tea__content__mainblock}>
                        <div className={styles.tea__content__mainblock__path}>
                            <h1>
                                <img src={arrow_l} width={12} /> Назад
                            </h1>
                            <h2>
                                | Главная / Травы / Чай Монастырский / "Чай
                                Монастырский" противодиабетический
                            </h2>
                        </div>

                        <div
                            className={styles.tea__content__mainblock__product}
                        >
                            <div
                                className={
                                    styles.tea__content__mainblock__product__images
                                }
                            >
                                <div
                                    className={
                                        styles.tea__content__mainblock__product__images__big
                                    }
                                >
                                    <img src={tea1} />
                                </div>
                            </div>

                            <div
                                className={
                                    styles.tea__content__mainblock__product__desc
                                }
                            >
                                <h1>
                                    "Чай Монастырский" противодиабетический 100г
                                </h1>

                                <h2>520 руб.</h2>
                                <h4>Масса нетто</h4>
                                <h6>100 гр.</h6>
                                <h4>Состав</h4>
                                <h5>
                                    Листья ежевики, трава галеги, листья кизила,
                                    листья ореха грецкого, листья крапивы,
                                    цветки бузины, плоды шиповника, листья мяты
                                    перечной, створки фасоли
                                </h5>
                                <h4>Упаковка</h4>
                                <h5>Пакет крафт</h5>
                                <button>В корзину</button>
                            </div>
                        </div>
                        <div className={styles.tea__content__mainblock__text}>
                            <h1>Описание</h1>
                            <h2>
                                Специально подобранный сбор трав оказывает
                                целенаправленное гипогликемическое
                                (сахароснижающее) действие за счет
                                ощелачивающего действия на глюкозу компонентов
                                сбора, при котором она переходит в другие
                                углеводы - фруктозу или маннозу, соответственно
                                для их метаболизма требуется меньшее количество
                                инсулина. Таким образом, при регулярном
                                использовании данного состава трав при
                                инсулинозависимом диабете доза препаратов может
                                постепенно снижаться. При инсулинонезависимом
                                диабете траволечение может стать основным
                                средством для поддержания нормального уровня
                                сахара в крови. Травы, входящие в состав сбора,
                                также обладают кровоочистительным, мочегонным и
                                стимулирующим центральную и вегетативную нервную
                                системы действием, при котором оказывается
                                стимулирующее влияние на поджелудочную железу, в
                                результате чего увеличивается выработка
                                собственного инсулина.
                                <br />
                                <br />
                                Способ применения: 1 столовую ложку смеси залить
                                стаканом кипятка, дать настояться 5-10 минут,
                                процедить. Рекомендуется употреблять взрослым
                                стакан (200 мл) теплого фиточая за 15 минут до
                                еды 2-3 раза в день в течение 3-ех недель. При
                                необходимости курс повторять 2-3 раза в год.
                            </h2>
                            <br />
                            <br />
                            <br />
                            <h1>Изготовитель/упаковщик</h1>
                            <h2>
                                ИП Л.Ф.Залевская / ООО «Травы горного Крыма»,
                                п.г.т.Куйбышево, Бахчисарайский район,
                                республика Крым.
                            </h2>
                        </div>
                    </div>

                    <div className={styles.tea__content__img2}>
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

export default Tea;
