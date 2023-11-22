import MobileBgOrangeBlur from './BgOrangeBlur/MobileBgOrangeBlur'
import MobileBgPurpleBlur from './BgPurpleBlur/MobileBgPurpleBlur'
import MobileBgWhiteBlur from './BgWhiteBlur/MobileBgWhiteBlur'
import styles from './MobileBackgroundLayer.module.scss'
import MobilePurpleBall from './MobileBalls/MobilePurpleBall'
import MobileRedBall from './MobileBalls/MobileRedBall'


const MobileBackgroundLayer: React.FC = () => {
    return (
    <div className={styles.container}>
        <MobileBgPurpleBlur/>
        <MobileBgOrangeBlur/>
        <MobileBgWhiteBlur/>
        <MobilePurpleBall/>
        <MobileRedBall/>
    </div>
    )
}
export default MobileBackgroundLayer