import React from 'react'

import Layout from '../components/layout';
import Head from "../components/head"

const PortfolioPage = () => {

    return(
        <Layout>
            <Head title="Craftings"/>
            <h1>List of Project goes here</h1>
            <button onClick={
                () => window.analytics.track("Add to Cart", {
                    item: "Lorem Ipsum", 
                    accountType: "High-value customer"
                    })}>Add to cart</button>
        </Layout>
    )
}

export default PortfolioPage