import React, { useState } from 'react'
import Progress from './progress/Progress'
import Forms from './form/Forms'
import ProgressControl from './progressControl/ProgerssControl'

import style from './Register.module.scss'

export default function Register({ handleRadioChecked, currentChecked }) {
    const [currentStep, setCurrentStep] = useState(1)

    function handleNextStep() {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1)
        }
    }

    function handlePreStep() {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <section className={style.register__container}>
            {/* register title */}
            <h2 className={style.register__title}>結帳</h2>
            <Progress step={currentStep} />
            <Forms
                step={currentStep}
                handleRadioChecked={handleRadioChecked}
                currentChecked={currentChecked}
            />
            <ProgressControl
                step={currentStep}
                handleClickNext={handleNextStep}
                handleClickPre={handlePreStep}
            />
        </section>
    )
}