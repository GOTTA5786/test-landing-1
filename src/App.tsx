import { useMediaQuery } from 'react-responsive'
import styles from './App.module.scss'
import BackgroundLayer from './components/BackgroundLayer/BackgroundLayer'
import ContentLayer from './components/ContentLayer/ContentLayer'
import MobileContentLayer from './components/ContentLayer/MobileContentLayer'


const App: React.FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1020px)'
  })
  
  return (
  <div className={styles.container}>
    {isMobile ? <></> : <BackgroundLayer/>}
    {isMobile ? <MobileContentLayer/> : <ContentLayer/>}
    
  </div>
  )
}
export default App