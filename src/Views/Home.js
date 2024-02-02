import HelloWorld from "../Components/HelloWorld"
import Loader from "../Components/Loader"
import ProductCard from "../Components/ProductCard"
import { useAxiosGet } from "../Hooks/HttpRequest"

const Home = () => {
    const url = `https://65bd2a91b51f9b29e9330624.mockapi.io/flexbpo/products?page=1&limit=10`
    
    let products = useAxiosGet(url)

    let content = null

    if (products.error) {
        content = <p>There was an error please refresh or try again.</p>
    }

    if (products.loading) {
        content = <Loader />
    }

    if (products.data) {
        content = products.data.map((product) => (
            <ProductCard product={product} />
        ))
    }

    return (
        <div>
            <h1 className='font-bold text-2xl mb-3'>Best foods</h1>
            <HelloWorld name="Alex" />
            {content}
        </div>
    )
}

export default Home