import React from 'react'
import Address from './Address'
import Ship from './Ship'
import CreditCard from './CreditCard'
import { useStep } from '../../../../context/StepContext'

import styles from './Forms.module.scss'

export default function Forms({ handleRadioChecked, currentChecked }) {
    return (
        <section className={styles.form__container}>
            <CurrentFormControl
                handleRadioChecked={handleRadioChecked}
                currentChecked={currentChecked}
            />
        </section>
    )
}

function CurrentFormControl({ handleRadioChecked, currentChecked }) {
    const step = useStep()

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