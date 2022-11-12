import React from 'react'
import Address from './Address'
import Ship from './Ship'
import CreditCard from './CreditCard'

import styles from './Forms.module.scss'

export default function Forms({ step, handleRadioChecked, currentChecked }) {
    return (
        <section className={styles.form__container}>
            <CurrentFormControl
                step={step}
                handleRadioChecked={handleRadioChecked}
                currentChecked={currentChecked}
            />
        </section>
    )
}

function CurrentFormControl({ step, handleRadioChecked, currentChecked }) {
    if (step === 1) {
        return <Address />
    } else if (step === 2) {
        return (
            <Ship
                handleRadioChecked={handleRadioChecked}
                currentChecked={currentChecked}
            />
        )
    } else if (step === 3) {
        return <CreditCard />
    }
}