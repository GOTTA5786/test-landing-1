
import PhoneIcon from '../Icons/PhoneIcon/PhoneIcon'
import TelegramIcon from '../Icons/TelegramIcon/TelegramIcon'
import WhatsAppIcon from '../Icons/WhatsAppIcon/WhatsAppIcon'
import Link from '../Link/Link'
import Logo from '../Logo/Logo'
import styles from './Header.module.scss'


const Header: React.FC = () => {
    return (
    <header className={styles.container}>
        <div className={styles.top}>
        <Logo />
        <div className={styles.links}>
            <Link>Услуги</Link>
            <Link>Виджеты</Link>
            <Link>Интеграции</Link>
            <Link>Кейсы</Link>
            <Link>Сертификаты</Link>
        </div>
        <div className={styles.contacts}>
            <span className={styles.phoneNumber}>+7 555 555-55-55</span>
            <div className={styles.icons}>
                <TelegramIcon/>
                <PhoneIcon/>
                <WhatsAppIcon/>
            </div>
        </div>
        </div>
        <span className={styles.slogan}>крупный интегратор CRM в Росcии и ещё 8 странах</span>
    </header>
    )
}
export default Header