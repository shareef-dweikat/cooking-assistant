import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import ProductCard from '@/components/ProductCard'
import CartCard from './cart/components/CartCard'

const inter = Inter({ subsets: ['latin'] })

export default function Orders() {
  return (
    <div id={styles.container}>
      <Navbar hideSearchBar />
      <div>
        <div>Order 1</div>
        <div>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
      </div>
    </div>
  )
}
