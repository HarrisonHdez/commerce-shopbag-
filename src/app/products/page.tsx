import Products from '@/components/Products'
import React from 'react'
import products from './products.module.css'
import MainButton from '@/components/MainButton'


const page = () => {
    return (
        <main>
            <header className={products.home}>
                <section className={`${products.home__content} ${products.container} animate__animated animate__fadeIn`}>
                <h1 className={products.home__title}>Products</h1>
                <MainButton value="Return Home" href="/" />
                </section>
            </header>

            {/* Products */}
            <Products />


            {/* Products */}
        </main>
    )
}

export default page