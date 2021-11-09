import Image from 'next/image'
import styles from '../../styles/Header.module.css'
import AutoComplete from '../../src/components/AutoComplete'


function Header () {
    return (
        <div className={styles.container}>
            <div>
                <Image src="/movieBox.png" alt="MovieBox" width={186} height={50} />
            </div>
            <div className={styles.searchBar}>
                <i className={styles.searchIcon}/>
                <AutoComplete />
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
}
export default Header