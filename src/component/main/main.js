import StepProgress from './StepProgress';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Cart from './cart';
import StepProgressControl from './StepProgerssControl';

import styles from '../styles/main.module.css';

const Main = () => {

    return (
        <main className={styles.siteMain}>
            <div className={styles.mainContainer}>

                <section className={styles.registerContainer} data-phase="1" data-total-price="0">

                    <StepProgress></StepProgress>

                    <section className={styles.formContainer}>
                        <div>
                            <StepOne />
                        </div>
                        <div style={{ display: 'none' }}>
                            <StepTwo />
                        </div >
                        <div style={{ display: 'none' }}>
                            <StepThree />
                        </div>
                    </section>

                </section>

                <Cart className={styles.cart}></Cart>

                <div class={styles.stepProgressControlSet}>
                    <hr className={styles.line} />
                    <StepProgressControl className={styles.stepProgressControl}></StepProgressControl>
                </div>
            </div>
        </main>
    )
}

export default Main;