import React from 'react'
import Menu from './Menu'

import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.site__header}>
            <div className='container'>
                <Menu />
            </div>
        </header>
    )
}