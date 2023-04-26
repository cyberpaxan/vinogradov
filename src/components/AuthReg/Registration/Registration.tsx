import React from 'react';
import styles from './Registration.module.scss';
import cells1 from '../../../assets/images/cells1.png';
import cells2 from '../../../assets/images/cells2.png';
import Header from '../../MainPageFolder/Header/Header';
import Footer from '../../MainPageFolder/Footer/Footer';

const Registration = () => {
    return (
        <div>
            <div className={styles.registration}>
                <Header />
                <div className={styles.registration__content}>
                    <div className={styles.registration__content__img1}>
                        <img src={cells1} />
                    </div>

                    <div className={styles.registration__content__text}>
                        <h1>Регистрация</h1>
                        <input type='text' placeholder='E-mail' />
                        <input type='text' placeholder='Имя' />
                        <input type='text' placeholder='Пароль' />

                        <div
                            className={
                                styles.registration__content__text__agreement
                            }
                        >
                            <input
                                type='checkbox'
                                className='checkbox'
                                id='box'
                            />

                            <h2>
                                Я даю согласие на обработку моих персональных
                                данных и выражаю согласие с политикой
                                конфиденциальности
                            </h2>
                        </div>

                        <button style={{ marginTop: '10px' }}>
                            Зарегистрироваться
                        </button>
                    </div>

                    <div className={styles.registration__content__img2}>
                        <img src={cells2} />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Registration;
