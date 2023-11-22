import PhoneIcon from '../Icons/PhoneIcon/PhoneIcon'
import TelegramIcon from '../Icons/TelegramIcon/TelegramIcon'
import WhatsAppIcon from '../Icons/WhatsAppIcon/WhatsAppIcon'
import Link from '../Link/Link'
import styles from './MobileFooter.module.scss'


const MobileFooter: React.FC = () => {
    return (
        <footer className={styles.container}>
        <div className={styles.links}>
            <div className={styles.about}>
                <p>О компании</p>
                <div>
                    <Link>Партнёрская программа</Link>
                    <Link>Вакансии</Link>
                </div>
            </div>
            <div className={styles.menu}>
                <p>Меню</p>
                <div>
                    <Link>Расчёт стоимости</Link>
                    <Link>Благодарность клиентов</Link>
                    <Link>Услуги</Link>
                    <Link>Кейсы</Link>
                    <Link>Виджеты</Link>
                    <Link>Сертификаты</Link>
                    <Link>Интеграции</Link>
                    <Link>Блог на Youtube</Link>
                    <Link>Наши клиенты</Link>
                    <Link>Вопрос / Ответ</Link>
                </div>
            </div>
        </div>
        <div className={styles.contacts}>
            <p>контакты</p>
            <span className={styles.phoneNumber}>+7 555 555-55-55</span>
            <div className={styles.icons}>
                <TelegramIcon/>
                <PhoneIcon/>
                <WhatsAppIcon/>
            </div>
            <span>Москва, Путевой проезд 3с1, к 902</span>
            <div className={styles.copyright}>
                <span>©WELBEX 2022. Все права защищены.</span>
                <span>Политика конфиденциальности</span>
            </div>
        </div>
    </footer>
    )
}
export default MobileFooter