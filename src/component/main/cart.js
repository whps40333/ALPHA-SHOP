import styles from '../styles/cart.module.css';

const Cart = () => {
    return (
        <section className={styles.cartContainer}>
            <h3 className={styles.cartTitle} style={{ display: 'none' }}>購物籃</h3>

            <section className={styles.productList} data-total-price="0">
                <div className={styles.productContainer} data-count="0" data-price="3999">
                    <img className={styles.imgContainer} src={require("../images/product-1.jpg")} alt='破壞補丁修身牛仔褲' />
                    <div className={styles.productInfo}>
                        <div className={styles.productName}>破壞補丁修身牛仔褲</div>
                        <div className={styles.productControlContainer}>
                            <div className={styles.productControl}>
                                <p className={styles.productActionMinus}>-</p>
                                <span className={styles.productCounts}>1</span>
                                <p className={styles.productActionPlus}>+</p>
                            </div>
                        </div>
                        <div className={styles.price}>$3,999</div>
                    </div>
                </div>
                <div className={styles.productContainer} data-count="0" data-price="1299">
                    <img className={styles.imgContainer} src={require("../images/product-2.jpg")} alt='刷色直筒牛仔褲' />
                    <div className={styles.productInfo}>
                        <div className={styles.productName}>刷色直筒牛仔褲</div>
                        <div className={styles.productControlContainer}>
                            <div className={styles.productControl}>
                                <p className={styles.productActionMinus}>-</p>
                                <span className={styles.productCount}>1</span>
                                <p className={styles.productActionPlus}>+</p>
                            </div>
                        </div>
                        <div className={styles.price}>$1,299</div>
                    </div>
                </div>
            </section>
            <section className={styles.cartInfoShipping}>
                <div className={styles.text}>運費</div>
                <div className={styles.price}>免費</div>
            </section>
            <section className={styles.cartInfoTotal}>
                <div className={styles.text}>小計</div>
                <div className={styles.price}>$5,299</div>
            </section>
        </section>
    )
}

export default Cart;