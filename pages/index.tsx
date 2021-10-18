import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MovieBox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>

      <Header />

        <HeroBanner/>

      <footer>

      </footer>
    </div>
  )
}

export default Home