import React from "react";
import ReactDOM from 'react-dom'
import {
    useSheet,
    useResetConfirmed,
} from '../../../../context/ShoppingSheetContext'

import styles from './ConfirmedModal.module.scss'

export default function ConfirmedModal() {
    return (
        <>
            {ReactDOM.createPortal(
                <>
                    <Bakdrop />
                    <Modal />
                </>,
                document.getElementById('modal-root')
            )}
        </>
    )
}

function Bakdrop({ children }) {
    const resetConfirmed = useResetConfirmed()
    return (
        <div className={styles.backdrop} onClick={resetConfirmed}>
            {children}
        </div>
    )
}

function Modal() {
    const sheet = useSheet()
    const resetConfirmed = useResetConfirmed()

    return (
        <div className={styles.modal}>
            <div className={styles.modal__header}>
                <h2>確認購買</h2>
            </div>
            <div className={styles.modal__body}>
                <ul>
                    <li>持卡人姓名：{sheet.cardName}</li>
                    <li>卡號：{sheet.cardNumber}</li>
                    <li>有效期限：{sheet.cardDate}</li>
                    <li>CVC / CCV：{sheet.cardCode}</li>
                    <li>消費總金額：${sheet.totlaPrice}</li>
                </ul>
            </div>
            <div className={styles.btn__container}>
                <button className={styles.btn__cancel} onClick={resetConfirmed}>
                    取消
                </button>
                <button className={styles.btn__confirm} onClick={resetConfirmed}>
                    確認
                </button>
            </div>
        </div>
    )
}