import React from 'react';
import { Logo, FooterSection, PageLink } from './FooterItems';


import logo from '../../images/Logo@2x.png'
import facebook from '../../images/facebook@2x.png'
import instagram from '../../images/instagram@2x.png'
import whatsapp from '../../images/whatsapp@2x.png'

import styles from './Footer.module.scss';


const LINKDATAS = {
    section_01: ['運送說明', '退換貨相關', '付款資訊', 'FAQ'],
    section_02: ['品牌故事', '媒體聯繫', 'Press kit'],
    section_03: ['隱私權政策', 'Cookie', 'GDPR'],
}

export default function Footer() {
    return (
        <Footer className={styles.site__footer}>
            <div className={`${styles.footer__container}container`}>
                <Logo imgSrc={logo} />
                <FooterSection title='客戶服務'>
                    {LINKDATAS.section_01.map((text, index) => {
                        return <PageLink key={`section_01_${index}`} intext={text} />
                    })}
                </FooterSection>
                <FooterSection title='關於我們'>
                    {LINKDATAS.section_02.map((text, index) => {
                        return <PageLink key={`section_02_${index}`} intext={text} />
                    })}
                </FooterSection>
                <FooterSection title='資訊'>
                    {LINKDATAS.section_03.map((text, index) => {
                        return <PageLink key={`section_03_${index}`} intext={text} />
                    })}
                </FooterSection>
                <FooterSection title='追蹤 ALPHA Shop'>
                    <div className={styles.tel__info}>+886 02123-45678</div>
                    <div className={styles.social__icon__group}>
                        <div className={`${styles.social__icon} cursorPoint`}>
                            <img src={facebook} alt='facebook' />
                        </div>
                        <div className={`${styles.social__icon} cursorPoint`}>
                            <img src={instagram} alt='instagram' />
                        </div>
                        <div className={`${styles.social__icon} cursorPoint`}>
                            <img src={whatsapp} alt='whatsapp' />
                        </div>
                    </div>
                </FooterSection>
            </div>
        </Footer>

    )
}