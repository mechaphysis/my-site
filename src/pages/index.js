import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {

    return (
        <Layout>
            <h1>Hello!</h1>
            <h2>I'm Esperanza, A junior Front-End Developer from Galicia.</h2>
            <p><Link to='/about'>Know more</Link></p>
            <p>Wanna Speak? <Link to='/contact'>Contact me.</Link></p>
        </Layout>
    )

}

export default IndexPage