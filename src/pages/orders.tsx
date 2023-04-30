import styles from '@/styles/Orders.module.css'
import Navbar from '../components/Navbar'
import CartCard from './cart/components/CartCard'
import ThickStrip from '@/components/ThickStrip'
import { ORDERS } from '@/constants/strings'

export default function Orders() {
  return (
    <div>
      <Navbar hideSearchBar />
      <ThickStrip pageTitle={ORDERS} />
      <div id={styles.container}>
        <div id={styles.title}>Order 1</div>
        <div id={styles.ordersContainer}>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
      </div>
    </div>
  )
}
