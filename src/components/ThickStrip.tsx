import { HOME } from '@/constants/strings'
import styles from '../styles/ThickStrip.module.css'
import { Lemonada } from 'next/font/google'

const lemonada = Lemonada({
  weight: '700',
  subsets: ['latin'],
})

const lemonadaRegular= Lemonada({
  weight: '400',
  subsets: ['latin'],
})

interface props {
  pageTitle: string
}

export default function ThickStrip({ pageTitle }: props) {
  return (
    <div className={lemonada.className} id={styles.container}>
      <div id={styles.title}>
        {pageTitle}
      </div>
      <div className={lemonadaRegular.className} id={styles.route}>
        {HOME} / {pageTitle}
      </div>
    </div>
  )
}
