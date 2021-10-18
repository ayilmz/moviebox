import Image from 'next/image'
import styles from '../styles/Header.module.css'
const Header = () => (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image   src="/movieBox.png" alt="MovieBox" width={186} height={50} />
            </div>
            <div className={styles.searchBar}>
                <i className={styles.searchIcon}></i>
                <input type="text" placeholder="What do you want to watch?"/>
            </div>
            <div className={styles.loginAndHamburgerMenu}>
                <a href="#" className={styles.loginLink}>
                    Sign in
                </a>
                <a href="#" className={styles.hamburgermenu}>

                </a>
            </div>
        </div>
)

export default Header