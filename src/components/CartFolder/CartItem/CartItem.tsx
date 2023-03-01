import React from 'react';
import styles from './CartItem.module.scss';
import cartitem1 from '../../../assets/images/cartitem1.png';
import cartitem2 from '../../../assets/images/cartitem2.png';
import cross from '../../../assets/images/cross.png';

interface CartElements {
    img: string;
    title: string;
    price: number;
    count: number;
    totalPrice: number;
}

const CartItem: React.FC<CartElements> = ({
    img,
    title,
    price,
    count,
    totalPrice,
}) => {
    return (
        <div>
            <div className={styles.cartitem}>
                <div className={styles.cartitem__img}>
                    <img src={img} />
                </div>

                <div className={styles.cartitem__title}>
                    <h1>{title}</h1>
                </div>

                <div className={styles.cartitem__price}>
                    <h1>{price} руб.</h1>
                </div>

                <div className={styles.cartitem__count}>
                    <div>-</div>
                    <h1>{count}</h1>
                    <div>+</div>
                </div>

                <div className={styles.cartitem__totalPrice}>
                    <h1>{totalPrice} руб.</h1>
                </div>

                <div className={styles.cartitem__img}>
                    <img src={cross} width={20} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
