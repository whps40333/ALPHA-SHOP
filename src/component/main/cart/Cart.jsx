import React, { useEffect } from 'react'
import styles from './Cart.module.scss';
import ProductList from './cartItems/ProductList';
import PriceList from './cartItems/PriceList';

import { useProducts } from '../../../context/CartContext'
import { useSheetDispatch } from '../../../context/ShoppingSheetContext'


export default function Cart({ checkedData }) {

    const products = useProducts()

    return (
        <section className={styles.cart__container}>
            <h3 className={styles.cart__title}>購物籃</h3>
            <section className='product__list' data-total-price='0'>
                {products.map(product => {
                    return (
                        <ProductList
                            key={product.id}
                            imgSrc={product.img}
                            productId={product.id}
                            productName={product.name}
                            productPrice={product.price}
                            productQuantity={product.quantity}
                        />
                    )
                })}
            </section>
            {/* price will render from state */}
            <PriceList
                text='運費'
                price={checkedData === 0 ? '免費' : `$${checkedData}`}
            />
            {/* <PriceList text='小計' price='0' /> */}
            <CalculatePrice shippingPrice={checkedData} />
        </section>
    )
}
function CalculatePrice({ shippingPrice }) {

    const products = useProducts()
    const sheetDispatch = useSheetDispatch()

    let totalPrice = null
    function sumTotalPrice() {
        products.map(p => (totalPrice = totalPrice + p.price * p.quantity))
        totalPrice += shippingPrice
        return totalPrice
    }

    // const sumTotalPrice = () => {
    //     let totalPrice = 0
    //     products.forEach(item => {
    //         totalPrice += item.price * item.quantity
    //     })
    //     totalPrice += shippingPrice
    //     return totalPrice
    // }

    // 從cartcontext傳來的price是100，結果連帶這邊的price也沿用100


    useEffect(() => {
        sheetDispatch({
            type: 'sumTotalPrice',
            value: totalPrice,
        })
    }, [products, sheetDispatch, totalPrice])


    return (
        <PriceList
            text='小計'
            price={
                products.length > 0
                    ? `$${sumTotalPrice().toLocaleString()}`
                    : '購物籃是空的'
            }
        />
    )
}      