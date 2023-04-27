import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import ProductCard from '@/components/ProductCard'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <div id={styles.container}>
      <Navbar />
      <div id={styles.productsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ChatWidget />
    </div>
  )
}
