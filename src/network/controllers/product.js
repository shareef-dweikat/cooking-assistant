export const getProducts = async () => {
    let products = await fetch('./products.json')
    return products?.data?.map((item) => new Product(item.name, item.price, item.description))
}