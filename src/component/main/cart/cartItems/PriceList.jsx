import React from "react";
import styles from "./PriceList.module.scss";

export default function priceList({ text, price }) {
    return (
        <section className={styles.cart__info}>
            <div className={styles.cart__text}>{text}</div>
            {/* price will render from state */}
            <div className={styles.cart__price}>{price}</div>
        </section>
    )
}