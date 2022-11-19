import React, { createContext, useContext, useState } from 'react'

const StepContext = createContext()
const PrevStepContext = createContext()
const NextStepContext = createContext()

export function StepProvider({ children }) {
    const [step, setStep] = useState(1)

    function handleClickPrev() {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    function handleClickNext() {
        if (step < 3) {
            setStep(step + 1)
        }
    }

    return (
        <StepContext.Provider value={step}>
            <PrevStepContext.Provider value={handleClickPrev}>
                <NextStepContext.Provider value={handleClickNext}>
                    {children}
                </NextStepContext.Provider>
            </PrevStepContext.Provider>
        </StepContext.Provider>
    )
}

export function useStep() {
    return useContext(StepContext)
}

export function useHandleClickPrev() {
    return useContext(PrevStepContext)
}

export function useHandleClickNext() {
    return useContext(NextStepContext)
}