import React from 'react';

import styles from './NavItems.module.scss';

export function NavLinks({ inText, herfLink }) {
    return (
        <li className={styles.nav__item}>
            <div className={`${styles.nav__link} cursor-point`} herf={herfLink}>{inText}</div>
        </li>
    )
}

export function NavIcons({ imgType, imgAlt, changeTheme }) {
    return (
        <li className={styles.nav__item} onClick={changeTheme}>
            <div className={`${styles.nav__icon}cursor-point`} >
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