import Link from '../Link/Link'
import styles from './MobileHeader.module.scss'


const MobileHeader: React.FC = () => {
    return (
    <header className={styles.container}>
            <Link>Услуги</Link>
            <Link>Виджеты</Link>
            <Link>Интеграции</Link>
            <Link>Кейсы</Link>
    </header>
    )
}
export default MobileHeader