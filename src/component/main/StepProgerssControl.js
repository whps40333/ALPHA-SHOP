import leftArrowIcon from '../icons/left-arrow.svg';
import rightArrowIcon from '../icons/right-arrow.svg';
import styles from '../styles/stepProgressControl.module.css'

const StepProgressControl = () => {
    return (
        <section className={styles.progressControlContainer}>

            <section className={styles.buttonGroup} data-phase="address">
                <button className={styles.next}>
                    下一步
                    <img className={styles.cursorPoint} src={rightArrowIcon} alt='right-arrow' />
                </button>
            </section>

            <section className={styles.buttonGroup} style={{ display: 'none' }} data-phase="shipping">
                <button className={styles.prev}>
                    <img className={styles.cursorPoint} src={leftArrowIcon} alt='left-arrow' />
                    上一步
                </button>
                <button className={styles.next}>
                    下一步
                    <img className={styles.cursorPoint} src={rightArrowIcon} alt='right-arrow' />
                </button>
            </section>

            <section className={styles.buttonGroup} style={{ display: 'none' }} data-phase="credit-card">
                <button className={styles.prev}>
                    <img className={styles.cursorPoint} src={leftArrowIcon} alt='left-arrow' />
                    上一步
                </button>
                <button className={styles.next}>
                    確認下單
                </button>
            </section>

        </section>
    )
}

export default StepProgressControl;