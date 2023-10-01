import { useRouter } from "next/router"

const ProductDetail = ({ product }) => {
    // const router = useRouter()
    // const { id } = router.query
    return (
        <> 
        <h1> {product.title}</h1>
        <p>{product.body}</p>
        This is the article {product.id}</>
        
    )
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const products = await res.json()

    const paths = products.map(product => ({
        params: { id: product.id.toString() }
    }))

    return {
        paths,
        fallback: false // Set to true if you want to fallback to rendering on-demand
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const product = await res.json()

    return {
        props: {
            product
        }
    }
}

export default ProductDetail
