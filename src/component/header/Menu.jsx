import React from 'react'
import { NavLinks, NavIcons, Logo } from './NavItems'

// import css
import styles from './Menu.module.scss'

export default function Menu({ changeTheme }) {
    return (
        <>
            <label className={styles.hamburger} htmlFor='menu__checkbox'>
                <img className={styles.hamburger__img} alt='Toggle Menu' />
            </label>
            <input
                type='checkbox'
                id='menu__checkbox'
                className={styles.menu__checkbox}
            />

            <nav className={styles.navbar__menu}>
                <ul className={styles.nav__links}>
                    <NavLinks inText='男款' herfLink='#' />
                    <NavLinks inText='女款' herfLink='#' />
                    <NavLinks inText='最新消息' herfLink='#' />
                    <NavLinks inText='客製商品' herfLink='#' />
                    <NavLinks inText='聯絡我們' herfLink='#' />
                </ul>
                <ul className={styles.nav__icons}>
                    <NavIcons imgType='icon__search' imgAlt='Search' />
                    <NavIcons imgType='icon__shop' imgAlt='Shop' />
                    <NavIcons
                        imgType='icon__theme'
                        imgAlt='Theme'
                        changeTheme={changeTheme}
                    />
                </ul>
            </nav>
            <div className={styles.nav__logo}>
                <Logo imgAlt='Logo' />
            </div>
        </>
    )
}