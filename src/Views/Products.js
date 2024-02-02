import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"

const Products = () => {
    const { id } = useParams()
    const url = `https://65bd2a91b51f9b29e9330624.mockapi.io/flexbpo/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false,
    })

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false,
        })
        getProduct()
    }, [])

    const getProduct = () => {
        axios.get(url)
            .then(res => {
                setProduct({
                    loading: false,
                    data: res.data,
                    error: false
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }

    let content = null

    if (product.error) {
        content = <p>There was an error please refresh or try again.</p>
    }

    if (product.loading) {
        content = <Loader />
    }

    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.images.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    } 

    return (
        <div>
            {content}
        </div>
    )
}

export default Products