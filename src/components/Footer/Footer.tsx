import React from 'react';
import styles from './Footer.module.scss';
import vk from '../../assets/images/ContactsImg/vk.png';
import tg from '../../assets/images/ContactsImg/tg.png';
import ok from '../../assets/images/ContactsImg/ok.png';

const Footer = () => {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.footer__text}>
                    <h1>Виноградовъ</h1>
                    <h2>О компании</h2>
                    <h2>Каталог</h2>
                    <h2>Оплата и доставка</h2>
                    <h2>Контакты</h2>
                </div>
                <div className={styles.footer__icons}>
                    <img src={vk} />
                    <img src={tg} />
                    <img src={ok} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
