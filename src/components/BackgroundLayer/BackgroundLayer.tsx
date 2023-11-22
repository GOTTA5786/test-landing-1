import styles from './BackgroundLayer.module.scss'
import BgOrangeBlur from './BgOrangeBlur/BgOrangeBlur'
import BgPurpleBlur from './BgPurpleBlur/BgPurpleBlur'


const BackgroundLayer: React.FC = () => {

    return (
    <div className={styles.container}>
        <BgOrangeBlur/>
        <BgPurpleBlur/>
        <img className={styles.purpleBallWeb1} src='purple ball web 1.png' alt=''></img>
        <img className={styles.redBallWeb1} src='red ball web 1.png' alt=''></img>
        <img className={styles.redBallWeb2} src='red ball web 2.png' alt=''></img>
    </div>
    )
}
export default BackgroundLayer