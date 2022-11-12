import React from "react";

import styles from './Form.module.scss';

export default function Form({ type, title, children }) {
    return (
        <form dataphase={type}>
            <h3 className={styles.form__title}>{title}</h3>
            <section className={styles.form__body}>{children}</section>
        </form>
    )
}