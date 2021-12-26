import Link from "next/link"


const Nav = () => {
    return (
        <>
            <nav className="main">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/blog">
                    Blog
                </Link>
                <Link href="/items">
                    Items
                </Link>
            </nav>
        </>
    )
}

export default Nav
