import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image';

const page = () => {
  return (
    <main>
      <header className={styles.home}>
        <section className={`${styles.home__content} ${styles.container}`}>

            <div className={styles.home__text}>
              <h1 className={styles.home__title}>Welcome to Shop Bag your favorite online store</h1>
              <p className={styles.home__subtitle}>Discover a Universe of Products and Comforts from the Comfort of your Home</p>
              <button className={styles.home__button}>Start Shopping</button>
            </div>


            <div className={styles.home__image}>
              <Image
                width={500}
                height={500}
                priority={true}
                src="/svg/image-home.svg"
                alt="image home"
              />
            </div>

        </section>
      </header>




    </main>
  )
}

export default page


