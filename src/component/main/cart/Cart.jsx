import React from 'react';
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


export default function Cart() {
    return (
        <section className={styles.cartContainer}>
            <h3 className={styles.cartTitle}>購物籃</h3>
            <section className='productList' data-total-price='0'>
                {PRODUCTS.map(product => {
                    return (
                        <ProductList
                            key={product.id}
                            dataPrice={product.price}
                            imgSrc={product.img}
                            productName={product.name}
                            productPrice={product.price}
                            productQuantity={product.quantity}
                        />
                    )
                })}
            </section>
            {/* price will render from state  */}
            <PriceList text='運費' price='0' />
            <PriceList text='小計' price='0' />

        </section>
    )
}