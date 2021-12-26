import Image from "next/image"
import Blogs from "../../components/blogs"

import Nav from "../../components/Nav"
import styles from '../../styles/Home.module.css'

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}


const index = ({ data }) => {

    return (
        <>
            <Nav></Nav>
            <div className={`${styles.main}  ${styles.container}`}>
                <h1 className="mains">This is items page</h1>
                <h2 style={{ color: "red" }}>This is first</h2>
                <p>This is first</p>
                <Blogs></Blogs>
                {data.slice(0, 5).map((product) => {
                    return (
                        <div key={product.id}>
                            <h3>{product.id}</h3>
                            <h4>Title: {product.title}</h4>
                        </div>
                    )

                })}

            </div>
            <style jsx>
                {`
        p{
            color:blue
        }
        `}
            </style>
        </>
    )
}

export default index
