import styles from '../styles/ProductCard.module.css'
import { SALE, SAVE, ADD_TO_CART } from '../constants/strings'
import { Open_Sans } from 'next/font/google'
import Logo from '../assets/images/Watermelon3.webp'
import Image from 'next/image'
import StarRatings from 'react-star-ratings';
import {Product} from '../../types'

const openSans = Open_Sans({
  weight: '700',
  subsets: ['latin'],
})

export default function ProductCard({name}: Product) {
  return (
    <div id={styles.container}>
      <div id={styles.header}>
        <div id={styles.sale}>{SALE}</div>
        <div id={styles.save}>
          {SAVE}
          <span id={styles.salePrice}> 90%</span>
        </div>
      </div>
      <div id={styles.body}>
        <Image src={Logo} alt='No Image' width={200} height={150} />
        <div className={openSans.className} id={styles.title}>{name}</div>
        <StarRatings
          rating={2.0}
          starRatedColor="#f9d244"
          starDimension="20px"
          starSpacing="1px"
          changeRating={()=> console.log('')}
          numberOfStars={5}
          name='rating'
        />
        <div className={openSans.className} id={styles.price}>$16.5</div>
        <div id={styles.addToCartBtn}>
          {ADD_TO_CART}
        </div>
      </div>
    </div>
  )
}
