"use client"

import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image';
import MainButton from '@/components/MainButton';
import Products from '@/components/Products';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {


  return (
    <main>
      {/* Header */}
      <NavBar />
      <header className={styles.home} id="home">
        <section className={`${styles.home__content} ${styles.container} animate__animated animate__fadeIn`}>

          <div className={styles.home__text}>
            <h1 className={styles.home__title}>Welcome to Shop Bag your favorite online store</h1>
            <p className={styles.home__subtitle}>Discover a Universe of Products and Comforts from the Comfort of your Home</p>
            <MainButton value="Start Shopping" href="/products" />
          </div>


          <div className={styles.home__image}>
            <Image
              width={500}
              height={500}
              priority={true}
              src="/svg/image-home.svg"
              alt="image home"
              className='header__float '
            />
          </div>

        </section>
      </header>
      {/* <Header */}



      <Products />
      <Footer />
    </main>
  )
}




