import React from 'react'

import styles from './ProgressGroups.module.scss'

export default function ProgressGroups({ children, label, activeStyle }) {
    return (
        <span className={styles.progress__group}>
            <div className={
                activeStyle ? styles.progress__icon__active : styles.progress__icon
            }>
                {children}
            </div>
            <span className={
                activeStyle ? styles.progress__label__active : styles.progress__label
            }>
                {label}
            </span>
        </span>
    )
}