import React from 'react'
import { useProductsDispatch } from '../../../../context/CartContext'

import styles from './ProductList.module.scss'

export default function ProductList({
    imgSrc,
    productId,
    productName,
    productPrice,
    productQuantity,
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
                        <Button intext='-' productId={productId} />
                        {/* count will render by state */}
                        <p className={styles.count}>{productQuantity}</p>
                        <Button intext='+' productId={productId} />
                    </div>
                </div>
                <div
                    className={styles.price}
                >{`$${productPrice.toLocaleString()}`}</div>
            </div>
        </div>
    )
}

function Button({ intext, productId }) {
    const dispatch = useProductsDispatch()

    return (
        <button
            className={styles.btn}
            onClick={() =>
                intext === '+'
                    ? dispatch({ type: 'add', id: productId })
                    : dispatch({ type: 'minus', id: productId })
            }
        >
            {intext}
        </button>
    )
}
