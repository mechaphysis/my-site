import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {

    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello!</h1>
            <h2>I'm Esperanza, an inquisitive mind exploring craft and code across all possible realms.</h2>
            <p>Say Hi! <a href='https://twitter.com/mechaphysis' target='_blank'>@mechaphysis</a></p>
        </Layout>
    )

}

export default IndexPage