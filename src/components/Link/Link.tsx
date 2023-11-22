import styles from './Link.module.scss'

interface Props{
    children: React.ReactNode
}

const Link: React.FC<Props> = ({children}) => {
    return (
    <div className={styles.container}>
        {children}
    </div>
    )
}
export default Link