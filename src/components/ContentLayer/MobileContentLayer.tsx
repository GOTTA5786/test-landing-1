import MobileBackgroundLayer from '../BackgroundLayer/MobileBackgroundLayer'
import MobileFooter from '../Footer/MobileFooter'
import MobileHeader from '../Header/MobileHeader'
import styles from './MobileContentLayer.module.scss'


const MobileContentLayer: React.FC = () => {
    return (
    <div className={styles.container}>
        <MobileHeader/>
        <div className={styles.box}>
            <MobileBackgroundLayer/>
            <div className={styles.content}>
                <div className={styles.firstBlock}>
                    <p className={styles.firstBlock_p}>Зарабатывайте больше</p>
                    <span className={styles.firstBlock_company}>с WELBEX</span>
                    <span className={styles.firstBlock_slogan}>Развиваем и контролируем продажи за вас</span>
                </div>
                <div className={styles.secondBlock}>
                    <p className={styles.secondBlock_p}>
                        Вместе с
                        <span className={styles.secondBlock_p_gradient}> бесплатной </span>
                        <span className={styles.secondBlock_p_gradient}> консультацией </span>
                        мы дарим:
                    </p>
                    <div className={styles.secondBlock_grid}>
                        <div>
                            <div className={styles.line}></div>
                            <p>Skype аудит</p>
                        </div>
                        <div>
                            <div className={styles.line}></div>
                            <p>30 виджетов</p>
                        </div>
                        <div>
                            <div className={styles.line}></div>
                            <p>dashboard</p>
                        </div>
                        <div>
                            <div className={styles.line}></div>
                            <p>месяц amocrm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MobileFooter/>
    </div>
    )
}
export default MobileContentLayer