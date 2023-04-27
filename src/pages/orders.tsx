import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import CartCard from './cart/components/CartCard'
import ThickStrip from '@/components/ThickStrip'
import { ORDERS } from '@/constants/strings'

export default function Orders() {
  return (
    <div id={styles.container}>
      <Navbar hideSearchBar />
      <ThickStrip pageTitle={ORDERS} />
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
