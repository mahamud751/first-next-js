import Image from "next/image"
import Link from "next/link"
import Nav from "../../components/Nav"

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
        <div>
            <Nav></Nav>
            <div style={{ textAlign: "center", background: "red" }}>
                <h1 className="main-part">This is blog page</h1>
                <Image
                    src="https://images.pexels.com/photos/3250362/pexels-photo-3250362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    width="500"
                    height="500"
                    alt="tour"
                ></Image>
            </div>
            {data.map((recent) => {
                return (
                    <div key={recent.id}>
                        <h3>{recent.id}</h3>
                        <Link href={`/blog/${recent.id}`}>
                            <h4>{recent.title}</h4>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default index
