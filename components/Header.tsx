import Image from 'next/image'
import styles from '../styles/Header.module.css'
const Header = () => (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image   src="/movieBox.png" alt="MovieBox" width={186} height={50} />
            </div>
        </div>
)

export default Header