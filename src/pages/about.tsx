import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div id={styles.container}>
      <Navbar hideSearchBar />
      <div id={styles.productsContainer}>
      </div>
    </div>
  )
}
