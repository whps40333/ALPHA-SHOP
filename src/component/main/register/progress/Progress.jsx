import React from 'react';
import ProgressGroups from './ProgressGroups';
import { useStep } from '../../../../context/StepContext'
import styles from './Progress.module.scss';

import vector from '../../../../images/Vector@2x.png';

export default function Progress() {
    const step = useStep()

    return (
        <section className={styles.progress__container}>
            <ProgressGroups label='寄送地址' activeStyle={step >= 1 && true}>
                {step === 1 ? (
                    '1'
                ) : (
                    <img className={styles.vector} src={vector} alt='checked' />
                )}
            </ProgressGroups>
            <span
                className={
                    step >= 1 ? styles.progress__bar__active : styles.progress__bar
                }
            ></span>
            <ProgressGroups label='運送方式' activeStyle={step >= 2 && true}>
                {step <= 2 ? (
                    '2'
                ) : (
                    <img className={styles.vector} src={vector} alt='checked' />
                )}
            </ProgressGroups>
            <span
                className={
                    step >= 2 ? styles.progress__bar__active : styles.progress__bar
                }
            ></span>
            <ProgressGroups label='付款資訊' activeStyle={step >= 3 && true}>
                3
            </ProgressGroups>
        </section>
    )
}