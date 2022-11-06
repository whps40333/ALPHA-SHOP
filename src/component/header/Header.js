import toggleIcon from '../icons/toggle.svg';
import searchIcon from '../icons/search.svg';
import cartIcon from '../icons/cart.svg';
import moonIcon from '../icons/moon.svg';
import sunIcon from '../icons/sun.svg';
import logoIcon from '../icons/logo.svg';
import styles from '../styles/header.module.css';
import { useState } from 'react';

const Header = () => {


    let url = ''

    const navItemsData = [
        { url: '', name: "男款" },
        { url: '', name: "女款" },
        { url: '', name: "最新消息" },
        { url: '', name: "客製商品" },
        { url: '', name: "聯絡我們" },
    ]

    const navItems = navItemsData.map(item => {
        return (
            <li className={styles.navItem} key={item.name}>
                <a className={styles.navLink} href={item.url}>{item.name}</a>
            </li>
        )
    })

    const [isToggle, setIsToggle] = useState(true);

    const toggleHandler = () => {
        if (isToggle) {
            setIsToggle(false)
        } else if (!isToggle) {
            setIsToggle(true)
        }
    }




    return (
        <header className={styles.siteHeader}>
            <div className={styles.headerContainer}>

                <img
                    className={[`${styles.iconToggle} ${styles.cursorPoint} ${styles.displayNone}`]}
                    onClick={toggleHandler}
                    src={toggleIcon}
                    alt='toggle'
                />

                <a className={styles.headerLogoContainer} href={url} >
                    <img className={[`${styles.iconLog} ${styles.cursorPoint}`]} src={logoIcon} alt='logo' />
                    <div className={styles.logo}>ALPHA Shop</div>
                </a>


                <div className={[`${styles.navbarMenu} `]} >

                    <ul className={styles.siteMenuList}>
                        {navItems}
                    </ul>

                    <ul className={styles.siteActionList}>
                        <img className={[`${styles.navIcon} ${styles.cursorPoint}`]} src={searchIcon} alt='search' />
                        <img className={[`${styles.navIcon} ${styles.cursorPoint}`]} src={cartIcon} alt='cart' />
                        <img className={[`${styles.navIcon} ${styles.cursorPoint}`]} src={moonIcon} alt='moon' />
                        <img className={[`${styles.navIcon} ${styles.cursorPoint}`]} style={{ display: 'none', }} src={sunIcon} alt='sun' />
                    </ul>

                </div>


            </div>
        </header>
    )
};

export default Header;