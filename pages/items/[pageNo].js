
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    const paths = data.map((pd => {
        return {
            params: {
                pageNo: pd.id.toString()
            }
        }
    }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (content) => {
    const id = content.params.pageNo
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}


const pageNo = ({ data }) => {
    const { id, title, body } = data
    return (
        <>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <h4>{body}</h4>
        </>
    )
}

export default pageNo

