import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'

export default function Cart() {
  return (
    <div id={styles.container}>
      <Navbar hideSearchBar />
      <div id={styles.productsContainer}>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
      </div>
    </div>
  )
}