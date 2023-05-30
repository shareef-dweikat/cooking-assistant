import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { Product } from '../../types'
import { useState } from 'react'
import 'ai-chat-cooking-assistant/dist/bundle.css'
import {ChatWidget} from 'ai-chat-cooking-assistant'
import products from '../../products.json'
// import ChatWidget from '../components/ChatWidget'

export interface props {
  products: string
}

export default function Home({ products }: props) {
  const [searchValue, setSearchValue] = useState<string>('')

  const parsedProducts: Product[] = JSON.parse(products)
  const productsUserIsLookingFor = searchValue.split(',')

  const filteredProducts: Product[] = parsedProducts.filter((product) => {
    let flag;
    try {
      flag = productsUserIsLookingFor.filter((searchItem)=> {
        return product.name.toLowerCase().replace(/[^a-z]/g, '').search(searchItem.toLowerCase().replace(/[^a-z]/g, '')) !== -1
      })
    } catch (e) {
      flag = []
    }
    return flag.length > 0
  })
  
  return (
    <div >
      <Navbar onChange={setSearchValue} />
      <div id={styles.productsContainer}>
        {
          filteredProducts.map((product, index) =>
            <ProductCard name={product.name} description={product.description} price={product.price} key={index} />
          )
        }
      </div>
      <ChatWidget onChange={setSearchValue} foundProducts={filteredProducts}/>
    </div>
  )
}

export async function getServerSideProps(context: any) {

  //const products = await getProducts()
  // const { paramId } = context.params
  // // Fetch data from external API
  // const res = await fetch(`${configs.compilerOptions.baseUrl}${COUNTRY_API}${paramId}`)
  // const data = await res.json()

  // Pass data to the page via props
  return { props: { products: JSON.stringify(products) } }
}
