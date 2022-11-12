import React from "react";

import styles from "./Footer.module.scss";

export function Logo({ imgSrc }) {
    return (
        <div className={styles.footer__logo__container}>
            <img alt='Logo' />
        </div>
    )
}

export function FooterSection({ title, children }) {
    return (
        <section className="footer__section">
            <h2 className={styles.section__title}>{title}</h2>
            <div className={styles.section__content}>{children}</div>
        </section>
    )
}

export function PageLink({ intext }) {
    return (
        <div className={`${styles.pagr__link} cursor-point`} herf='#'>
            {intext}
        </div>
    )
}