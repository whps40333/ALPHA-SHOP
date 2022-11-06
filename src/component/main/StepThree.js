import styles from '../styles/stepThree.module.css';

const StepThree = () => {
    return (
        <form className={styles.form} data-phase="credit-card">
            <h3 className={styles.formTitle}>付款資訊</h3>
            <section className={styles.formBody}>
                <div className={styles.col}>
                    <div className={styles.inputGroupName}>
                        <div className={styles.inputLabel}>持卡人姓名</div>
                        <input type="text" placeholder="John Doe" />
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.inputGroupCardNum}>
                        <div className={styles.inputLabel}>卡號</div>
                        <input type="text" placeholder="1111 2222 3333 4444" />
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.inputGroupExp}>
                        <div className={styles.inputLabel}>有效期限</div>
                        <input type="text" placeholder="MM/YY" />
                    </div>
                    <div className={styles.inputGroupCvc}>
                        <div className={styles.inputLabel}>CVC / CCV</div>
                        <input type="text" placeholder="123" />
                    </div>
                </div>
            </section>
        </form>
    )
}

export default StepThree;