import styles from '../styles/stepTwo.module.css'

const StepTwo = () => {
    return (
        <form className={styles.form} data-phase="shipping">
            <h3 className={styles.formTitle}>運送方式</h3>

            <section className={styles.formBody}>
                <label className={styles.radioGroup} data-price="0">
                    <input className={styles.shippingStandard} type="radio" name="shipping" checked />
                    <div className={styles.radioInfo}>
                        <div className={styles.col} >
                            <div className={styles.text} >標準運送</div>
                            <div className={styles.price}>免費</div>
                        </div>
                        <div className={styles.period}>約3~7個工作天</div>
                    </div>
                    <div className={styles.radioBoxBorder}></div>
                </label>
                <label className={styles.radioGroup} data-price="500">
                    <input className={styles.shippingDhl} type="radio" name="shipping" />
                    <div className={styles.radioInfo}>
                        <div className={styles.col}>
                            <div className={styles.text}>DHL 貨運</div>
                            <div className={styles.price}>$500</div>
                        </div>
                        <div className={styles.period}>48 小時內送達</div>
                    </div>
                    <div className={styles.radioBoxBorder}></div>
                </label>
            </section>
        </form>
    )
}

export default StepTwo;