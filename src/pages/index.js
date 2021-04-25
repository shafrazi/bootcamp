import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

function Home() {
  return (
    <Layout>
      <Head pageTitle="Home" />
      <h1>Hello.</h1>
      <h2>I'm Shafrazi, a full stack developer living in Sri Lanka</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default Home
