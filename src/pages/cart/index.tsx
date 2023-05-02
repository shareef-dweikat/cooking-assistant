import styles from '../../styles/Home.module.css'
import Navbar from '../../components/Navbar'
import CartCard from './components/CartCard'
import { CHECKOUT } from '../../constants/strings'

export default function Cart() {
  return (
    <div id={styles.container}>
      <Navbar hideSearchBar />
      <div style={{ paddingInline: 100 }}>
        <div id={styles.productsContainer}>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
        <div id={styles.price}>
            Total: $555
          </div>
        <div id={styles.footer}>
          <div id={styles.addToCartBtn}>
            {CHECKOUT}
          </div>
        </div>
      </div>
    </div>
  )
}
