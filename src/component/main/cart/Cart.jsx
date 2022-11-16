import React, { useState } from 'react'
import styles from './Cart.module.scss';
import ProductList from './cartItems/ProductList';
import PriceList from './cartItems/PriceList';

const PRODUCTS = [
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },
    {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
]


export default function Cart({ checkedData }) {
    const [products, setProducts] = useState(PRODUCTS)
    function handleQuantitiyAdd(productID) {
        setProducts(
            products.map(p => {
                if (p.id === productID) {
                    return {
                        ...p,
                        quantity: p.quantity + 1,
                    }
                } else {
                    return p
                }
            })
        )
    }
    function handleQuantitiyMinus(productId) {
        let newProducts = products.map(p => {
            if (p.id === productId && p.quantity > 0) {
                return {
                    ...p,
                    quantity: p.quantity - 1,
                }
            } else {
                return p
            }
        })
        setProducts(newProducts.filter(p => p.quantity > 0))
    }
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
                            handleClickAdd={handleQuantitiyAdd}
                            handleClickMinus={handleQuantitiyMinus}
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
            <CalculatePrice products={products} shippingPrice={checkedData} />
        </section>
    )
}
function CalculatePrice({ products, shippingPrice }) {
    let totalPrice = null
    products.map(p => (totalPrice = totalPrice + p.price * p.quantity))
    totalPrice += shippingPrice
    return (
        <PriceList
            text='小計'
            price={
                products.length > 0 ? `$${totalPrice.toLocaleString()}` : '購物籃是空的'
            }
        />
    )
}      