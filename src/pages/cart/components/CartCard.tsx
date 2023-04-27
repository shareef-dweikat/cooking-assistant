import styles from '../../../styles/CartCard.module.css'
import { SALE, SAVE, ADD_TO_CART } from '../../../constants/strings'
import { Open_Sans } from 'next/font/google'
import Logo from '../../../assets/images/Watermelon3.webp'
import Image from 'next/image'
import StarRatings from 'react-star-ratings';
import DeleteIcon from '@mui/icons-material/Delete';

const openSans = Open_Sans({
  weight: '700',
  subsets: ['latin'],
})

export default function CartCard() {
  return (
    <div id={styles.container}>
      <Image src={Logo} alt='No Image' width={200} height={150} />
      <div>
        <div className={openSans.className} id={styles.title}>Watermelon</div>
        <div>
          <div>Quantity: 75 g,</div>
          <div>Container Type: Packet,</div>
          <div>Rich In: Dietary Fiber</div>
          <div id={styles.footer}>
            <div className={openSans.className} id={styles.price}>$16.5</div>
            <span id={styles.deleteIcon}><DeleteIcon /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
