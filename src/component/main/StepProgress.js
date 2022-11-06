import styles from '../styles/stepProgress.module.css';
import pgCompleteIcon from '../icons/pg-complete.svg';

const StepProgress = () => {
    return (
        <>
            <h2 className={styles.registerTitle}>結帳</h2>

            <section className={styles.progressContainer}>
                <span className={styles.progressGroup} data-phase="address">
                    <span className={styles.progressIcon}>
                        <div className={styles.text}>1</div>
                        <img className={`${styles.icon} `} style={{ display: 'none' }} src={pgCompleteIcon} alt="pg-complete" />
                    </span>
                    <span className={styles.progressLabel}>寄送地址</span>
                </span>
                <span className={styles.progressBar} data-order="1"></span>
                <span className={styles.progressGroup} data-phase="shipping">
                    <span className={styles.progressIcon}>

                        <div className={styles.text}>2</div>
                        <img className={`${styles.icon} `} style={{ display: 'none' }} src={pgCompleteIcon} alt="pg-complete" />
                    </span>
                    <span className={styles.progressLabel}>運送方式</span>
                </span>
                <span className={styles.progressBar} data-order="2"></span>
                <span className={styles.progressGroup} data-phase="credit-card">
                    <span className={styles.progressIcon}>

                        <div className={styles.text}>3</div>
                        <img className={`${styles.icon} `} style={{ display: 'none' }} src={pgCompleteIcon} alt="pg-complete" />
                    </span>
                    <span className={styles.progressLabel}>付款資訊</span>
                </span>

            </section>
        </>
    )
}

export default StepProgress;