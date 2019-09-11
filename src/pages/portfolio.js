import React from 'react'

import Layout from '../components/layout';
import Head from "../components/head"

const PortfolioPage = () => {

    return(
        <Layout>
            <Head title="Craftings"/>
            <h1>List of Project goes here</h1>
            <button onClick={()=> window.dataLayer.push({event: "add to cart", customerType: "high-value"})}>Add to cart</button>
        </Layout>
    )
}

export default PortfolioPage