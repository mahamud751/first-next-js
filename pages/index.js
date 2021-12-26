import Head from "next/head"
import Link from "next/link"
import Nav from "../components/Nav"

function index() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Nav></Nav>
      <h1>This is home</h1>
    </>
  )
}

export default index

