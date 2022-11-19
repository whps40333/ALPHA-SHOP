import React from 'react'
import { useSetTheme } from '../../context/ThemeContext'
import styles from './NavItems.module.scss'

export function NavLinks({ inText, herfLink }) {
    return (
        <li className={styles.nav__item}>
            <div className={`${styles.nav__link} cursor-point`} href={herfLink}>
                {inText}
            </div>
        </li>
    )
}

export function NavIcons({ imgType, imgAlt, }) {
    const setTheme = useSetTheme()
    return (
        <li className={styles.nav__item} onClick={setTheme}>
            <div className={`${styles.nav__icon} cursor-point`}>
                <img className={imgType} alt={imgAlt}></img>
            </div>
        </li>
    )
}

export function Logo({ imgAlt }) {
    return (
        <div className='header__logo__container' href='#'>
            <div className={`${styles.icon__logo} cursor-point`}>
                <img alt={imgAlt}></img>
            </div>
        </div>
    )
}