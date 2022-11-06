import logoIcon from '../icons/logo.svg';
import facebookIcon from '../icons/facebook.svg';
import instagramIcon from '../icons/instagram.svg';
import whatsappIcon from '../icons/whatsapp.svg';

import styles from '../styles/footer.module.css';


const Footer = () => {


    let url = ''
    return (
        <footer className={`${styles.displayNone}`} >
            <div className={`${styles.footerContainer}`}>

                <div className={`${styles.footerLogoContainer}`}>
                    <img className={styles.iconLogo} src={logoIcon} alt="icon-logo" />
                    <div className={styles.logo}>ALPHA Shop</div>
                </div>

                <section className={`${styles.footerSection}`}>
                    <h2 className={`${styles.sectionTitle}`}>客戶服務</h2>
                    <div className={`${styles.sectionContent}`}>
                        <a className={`${styles.pageLink}`} href={url}>運送說明</a>
                        <a className={`${styles.pageLink}`} href={url}>退換貨相關</a>
                        <a className={`${styles.pageLink}`} href={url}>付款資訊</a>
                        <a className={`${styles.pageLink}`} href={url}>FAQ</a>
                    </div>
                </section>

                <section className={`${styles.footerSection}`}>
                    <h2 className={`${styles.sectionTitle}`}>關於我們</h2>
                    <div className={`${styles.sectionContent}`}>
                        <a className={`${styles.pageLink}`} href={url}>品牌故事</a>
                        <a className={`${styles.pageLink}`} href={url}>媒體聯繫</a>
                        <a className={`${styles.pageLink}`} href={url}>Press kit</a>
                    </div>
                </section>

                <section className={`${styles.footerSection}`}>
                    <h2 className={`${styles.sectionTitle}`}>資訊</h2>
                    <div className={`${styles.sectionContent}`}>
                        <a className={`${styles.pageLink}`} href={url}>隱私權政策</a>
                        <a className={`${styles.pageLink}`} href={url}>Cookie</a>
                        <a className={`${styles.pageLink}`} href={url}>GDPR</a>
                    </div>
                </section>

                <section className={`${styles.footerSection}`}>
                    <h2 className={`${styles.sectionTitle}`}>追蹤 ALPHA Shop</h2>
                    <div className={`${styles.sectionContent}`}>
                        <div className={`${styles.telInfo}`}>+886 02123-45678</div>
                        <div className={`${styles.socialIconGroup}`}>
                            <img className={`${styles.socialIcon} ${styles.cursorPoint}`} src={facebookIcon} alt='facebook' />
                            <img className={`${styles.socialIcon} ${styles.cursorPoint}`} src={instagramIcon} alt='instagram' />
                            <img className={`${styles.socialIcon} ${styles.cursorPoint}`} src={whatsappIcon} alt='whatsapp' />
                        </div>
                    </div>
                </section>

            </div>
        </footer>
    )
}

export default Footer;