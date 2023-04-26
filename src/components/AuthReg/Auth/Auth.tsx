import React from 'react';
import styles from './Auth.module.scss';
import cells1 from '../../../assets/images/cells1.png';
import cells2 from '../../../assets/images/cells2.png';
import Header from '../../MainPageFolder/Header/Header';
import Footer from '../../MainPageFolder/Footer/Footer';

const Auth = () => {
    return (
        <div>
            <div className={styles.auth}>
                <Header />
                <div className={styles.auth__content}>
                    <div className={styles.auth__content__img1}>
                        <img src={cells1} />
                    </div>

                    <div className={styles.auth__content__text}>
                        <h1>Войти</h1>
                        <input type='text' placeholder='E-mail' />
                        <input type='text' placeholder='Пароль' />

                        <div className={styles.auth__content__text__agreement}>
                            <input
                                type='checkbox'
                                className='checkbox'
                                id='box'
                            />

                            <h2 style={{ fontSize: '20px' }}>Запомнить меня</h2>
                        </div>

                        <button style={{ marginTop: '10px' }}>Войти</button>
                    </div>

                    <div className={styles.auth__content__img2}>
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

export default Auth;
