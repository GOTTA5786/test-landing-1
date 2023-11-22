import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './ContentLayer.module.scss'


const ContentLayer: React.FC = () => {
    return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.content}>
            <div className={styles.leftBlock}>
                <p className={styles.leftBlock_p}>Зарабатывайте больше</p>
                <span className={styles.leftBlock_company}>с WELBEX</span>
                <span className={styles.leftBlock_slogan}>Развиваем и контролируем продажи за вас</span>
            </div>
            <div className={styles.rightBlock}>
                <p className={styles.rightBlock_p}>
                    Вместе с
                    <span className={styles.rightBlock_p_gradient}> бесплатной </span>
                    <span className={styles.rightBlock_p_gradient}> консультацией </span>
                    мы дарим:
                </p>
                <div className={styles.rightBlock_grid}>
                    <div>
                        <p>Виджеты</p>
                        <span>30 готовых решений</span>
                    </div>
                    <div>
                        <p>dashboard</p>
                        <span>с показателями вашего бизнеса</span>
                    </div>
                    <div>
                        <p>skype аудит</p>
                        <span>отдела продаж и CRM системы</span>
                    </div>
                    <div>
                        <p>35 дней</p>
                        <span>использования CRM</span>
                    </div>
                </div>
                <button className={styles.rightBlock_button}>Получить консультацию</button>
            </div>
        </div> 
        <Footer/>
    </div>
    )
}
export default ContentLayer