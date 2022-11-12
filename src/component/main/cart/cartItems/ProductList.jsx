import React from 'react'

import styles from './ProductList.module.scss'

export default function ProductList({
    imgSrc,
    productId,
    productName,
    productPrice,
    productQuantity,
    handleClickAdd,
    handleClickMinus,
}) {
    return (
        <div className={styles.product__container}>
            <div className={styles.img__container}>
                <img src={imgSrc} alt={productName} />
            </div>
            <div className={styles.product__info}>
                <div className={styles.product__name}>{productName}</div>
                <div className={styles.product__control__container}>
                    <div className={styles.product__control}>
                        <Button
                            intext='-'
                            productId={productId}
                            handleClickMinus={handleClickMinus}
                        />
                        {/* count will render by state */}
                        <p className={styles.count}>{productQuantity}</p>
                        <Button
                            intext='+'
                            productId={productId}
                            handleClickAdd={handleClickAdd}
                        />
                    </div>
                </div>
                <div
                    className={styles.price}
                >{`$${productPrice.toLocaleString()}`}</div>
            </div>
        </div>
    )
}

function Button({ intext, productId, handleClickMinus, handleClickAdd }) {
    return (
        <div
            className={styles.btn}
            onClick={() =>
                intext === '-' ? handleClickMinus(productId) : handleClickAdd(productId)
            }
        >
            {intext}
        </div>
    )
}
