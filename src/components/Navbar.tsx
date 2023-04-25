import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import { COOKING_ASSISTANT, MOBILE_NUMBER, EMAIL, HOME, SHOP, ABOUT, FAQ, CONTACT_US } from '../constants/strings'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Image from 'next/image'
import Logo from '../assets/images/logo_300x300.webp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Lemonada } from 'next/font/google'
import SearchIcon from '@mui/icons-material/Search';

const lemonada = Lemonada({
  weight: '700',
  subsets: ['latin'],
})

export default function Navbar() {
  return (
    <div>
      <div id={styles.greenStrip}>
        <div id={styles.contactsContainer}>
          <EmailIcon sx={{ color: 'white', width: 22, marginRight: 0.5 }}  />
          <a href={`mailto:${EMAIL}`} id={styles.email}>{EMAIL}</a>
          <span id={styles.divider}> | </span>
          <PhoneIcon sx={{ color: 'white', width: 16, marginRight: 0.5 }} />
          <a href={`tel:{MOBILE_NUMBER}`} id={styles.mobileNumber}>{MOBILE_NUMBER}</a>
        </div>
        <div id={styles.socialIcons}>
          <FacebookIcon sx={{ width: 18, marginRight: 4, cursor: 'pointer' }} />
          <InstagramIcon sx={{ width: 18, marginRight: 4, cursor: 'pointer' }} />
          <PinterestIcon sx={{ width: 18, cursor: 'pointer' }} />
        </div>
      </div>
      <div id={styles.outerContainer}>
        <div id={styles.navContainer}>
          <Link href='./'>
            <Image alt='' src={Logo} width={148} height={40} />
          </Link>
          <div id={styles.menu}>
            <div className={`${lemonada.className} ${styles.menuItem}`}>
              {HOME}
            </div>
            <div className={`${lemonada.className} ${styles.menuItem}`}>
              {SHOP}
            </div>
            <div className={`${lemonada.className} ${styles.menuItem}`}>
              {ABOUT}
            </div>
            <div className={`${lemonada.className} ${styles.menuItem}`}>
              {FAQ}
            </div>
            <div className={`${lemonada.className} ${styles.menuItem}`}>
              {CONTACT_US}
            </div>
          </div>
          <span id={styles.cartIcon}><ShoppingCartIcon /></span>
        </div>
        <div id={styles.inputBoxesContainer}>
          <input id={styles.searchDropdown} value="Dropdown" />
          <input id={styles.searchBox} value="Search" />
          <div id={styles.searchBtn}><SearchIcon /></div>
        </div>
      </div>
    </div>
  )
}
