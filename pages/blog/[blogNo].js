
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()


    const paths = data.map((product) => {
        return {
            params: {
                blogNo: product.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (content) => {
    const id = content.params.blogNo
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}

const myBlog = ({ data }) => {
    const { id, title, body } = data
    return (
        <>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <h2>{body}</h2>
        </>
    )
}

export default myBlog
