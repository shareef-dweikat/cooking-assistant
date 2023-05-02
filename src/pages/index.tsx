import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import ChatWidget from '../components/ChatWidget'
import { getProducts } from '../network/controllers/product'
import { Product } from '../../types'

export interface props {
  products: string
}

export default function Home({ products }: props) {
  const parsedProducts: Product[] = JSON.parse(products)
  return (
    <div >
      <Navbar />
      <div id={styles.productsContainer}>
        {
          parsedProducts.map((product, index) =>
            <ProductCard name={product.name} description={product.description} price={product.price} key={index} />
          )
        }
      </div>
      <ChatWidget />
    </div>
  )
}

export async function getServerSideProps(context: any) {

  const products = await getProducts()
  // const { paramId } = context.params
  // // Fetch data from external API
  // const res = await fetch(`${configs.compilerOptions.baseUrl}${COUNTRY_API}${paramId}`)
  // const data = await res.json()

  // Pass data to the page via props
  return { props: { products: JSON.stringify(products) } }
}
