import React from "react";

import styles from './Input.module.scss';

export function InputBox({ id, label, children }) {
    return (
        <div className={`${styles.input__group} input__${id}`}>
            <div className={styles.input__label}>{label}</div>
            {children}
        </div>
    )
}

export function InputRadio({
    radioId,
    price,
    name,
    priceIntext,
    period,
    checked,
    handleOnChange,
}) {
    return (
        <label className={styles.radio__group} data-price={price}>
            <input
                id={`shipping__standard${radioId}`}
                type='radio'
                name='shipping'
                checked={checked}
                onChange={() => handleOnChange(radioId)}
            />
            <div className={styles.radio__info}>
                <div className={styles.radio__info__container}>
                    <div className={styles.text}>{name}</div>
                    <div className={styles.price}>{priceIntext}</div>
                </div>
                <div className={styles.period}>{period}</div>
            </div>
            <div className={`${styles.radio__box__border} radio__box__border`}></div>
        </label>
    )
}