import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import {
  EMAIL, HOME, ORDERS, ABOUT, FAQ, CONTACT_US,
  MY_MOBILE_NUMBER, MY_EMAIL, MY_CART, SOCIAL_MEDIA_SECTION,
  INSTGRAM, FACEBOOK, PINTEREST, ALL_CATEGORIES, MOBILE_NUMBER
} from '../constants/strings'
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
import { ABOUT_ROUTE, CART_ROUTE, CONTACT_ROUTE, FAQ_ROUTE, HOME_ROUTE, ORDERS_ROUTE } from '../constants/routes'
import MenuIcon from '@mui/icons-material/Menu';

const lemonada = Lemonada({
  weight: '700',
  subsets: ['latin'],
})

interface props {
  hideSearchBar?: boolean
  onChange?: Function
}

export default function Navbar({ hideSearchBar, onChange = () => { } }: props) {
  return (
    <div>
      <div id={styles.greenStrip}>
        <div id={styles.contactsContainer}>
          <span className={styles.iconContainer}>
            <EmailIcon sx={{ color: 'white', width: 22, marginRight: 0.5 }} />
            <a href={`mailto:${EMAIL}`} id={styles.email}>{MY_EMAIL}</a>
          </span>
          <span id={styles.divider}> | </span>
          <span className={styles.iconContainer}>
            <PhoneIcon sx={{ color: 'white', width: 16, marginRight: 0.5 }} />
            <a href={`tel:${MY_MOBILE_NUMBER}`} id={styles.mobileNumber}>{MY_MOBILE_NUMBER}</a>
          </span>
        </div>
        <div id={styles.socialIcons} title={SOCIAL_MEDIA_SECTION}>
          <span title={FACEBOOK}>
            <FacebookIcon sx={{ width: 18, marginRight: 4, cursor: 'pointer' }} />
          </span>
          <span title={INSTGRAM}>
            <InstagramIcon sx={{ width: 18, marginRight: 4, cursor: 'pointer' }} />
          </span>
          <span title={PINTEREST}>
            <PinterestIcon sx={{ width: 18, cursor: 'pointer' }} />
          </span>
        </div>
      </div>

      <div id={styles.outerContainer}>
        <div id={styles.navContainer}>
          <input type="checkbox" id={styles.burgerCheckbox} />
          <label id={styles.burgerIcon} htmlFor={styles.burgerCheckbox}> <MenuIcon /> </label>
          <Link href={HOME_ROUTE} id={styles.logo}>
            <Image alt='' src={Logo} width={148} height={40} />
          </Link>
          <div id={styles.menu}>
            <input type="checkbox" id={styles.burgerCheckbox} />
            <label id={styles.inMenuBurgerIcon} htmlFor={styles.burgerCheckbox}> <MenuIcon /> </label>
            <Link href={HOME_ROUTE} className={`${lemonada.className} ${styles.menuItem}`}>
              {HOME}
            </Link>
            <Link href={ORDERS_ROUTE} className={`${lemonada.className} ${styles.menuItem}`}>
              {ORDERS}
            </Link>
            <Link href={ABOUT_ROUTE} className={`${lemonada.className} ${styles.menuItem}`}>
              {ABOUT}
            </Link>
            <Link href={FAQ_ROUTE} className={`${lemonada.className} ${styles.menuItem}`}>
              {FAQ}
            </Link>
            <Link href={CONTACT_ROUTE} className={`${lemonada.className} ${styles.menuItem}`}>
              {CONTACT_US}
            </Link>
            <Link href={CART_ROUTE} id={styles.horizantalCartIcon}>
              <span title={MY_CART} ><ShoppingCartIcon /></span>
            </Link>
          </div>
          <Link href={CART_ROUTE} id={styles.cartIcon}>
            <span title={MY_CART} ><ShoppingCartIcon /></span>
          </Link>
        </div>
        {
          !hideSearchBar && <div id={styles.inputBoxesContainer}>
            <select id={styles.searchDropdown}>
              <option value="all">{ALL_CATEGORIES}</option>
            </select>
            <input id={styles.searchBox} placeholder='Search' onChange={(input) => onChange(input.target.value)} />
            <div id={styles.searchBtn}><SearchIcon /></div>
          </div>
        }
      </div>
    </div>
  )
}
