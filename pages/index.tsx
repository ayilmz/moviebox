import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import HeroBanner from '../src/components/HeroBanner'
import Items from '../src/components/Items'
import React, { FC } from 'react';
import { WIDGET_TYPE } from '../enums';

interface HomeProps {
    "heroBanner": any;
    "featuredMovie": any;
    "newArrival": any;
    "exclusiveVideos": any;
    "featuredCasts": any;
}

const Home: FC<HomeProps> = ({ heroBanner, featuredMovie, newArrival, exclusiveVideos, featuredCasts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MovieBox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>

        <Header />

        {heroBanner && (
            <HeroBanner heroBanner={heroBanner}/>
        )}

        {featuredMovie && (
            <Items title="Featured Movie" data={featuredMovie} type={WIDGET_TYPE.MOVIE}/>
        )}

        {newArrival && (
            <Items title="New Arrival" data={newArrival} type={WIDGET_TYPE.MOVIE}/>
        )}

        {exclusiveVideos && (
            <Items title="Exclusive Videos" data={exclusiveVideos} type={WIDGET_TYPE.VIDEO}/>
        )}

        {featuredCasts && (
            <Items title="Featured Casts" data={featuredCasts} type={WIDGET_TYPE.CAST}/>
        )}

      <footer>

      </footer>
    </div>
  )
}

export async function getServerSideProps(context:any) {
    const res = await fetch(`http://www.flashtr.com/moviebox/api/data.json`)
    const { heroBanner, featuredMovie, newArrival, exclusiveVideos, featuredCasts } = await res.json()

    return {
        props: {
            heroBanner: heroBanner || null,
            featuredMovie: featuredMovie || null,
            newArrival: newArrival || null,
            exclusiveVideos: exclusiveVideos || null,
            featuredCasts: featuredCasts || null
        }
    }
}


export default Home
