import Image from 'next/image'
import styles from '../../styles/Footer.module.css';

const Footer = () => (
        <div className={styles.container}>
            <ul className={styles.socialMedia}>
                <li>
                    <a href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={24} height={28} /></a>
                </li>
                <li>
                    <a href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={24} height={28} /></a>
                </li>
                <li>
                    <a href="#"><Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} /></a>
                </li>
                <li>
                    <a href="#"><Image src="/icons/youtube.svg" alt="Youtube" width={24} height={22} /></a>
                </li>
            </ul>
            <ul className={styles.links}>
                <li>
                    <a href="#">Conditions of Use</a>
                </li>
                <li>
                    <a href="#">Privacy & Policy</a>
                </li>
                <li><a href="#">Press Room</a></li>
            </ul>
            <p>
                © 2021 MovieBox by Adriana Eka Prayudha
            </p>
        </div>
)

export default Footer