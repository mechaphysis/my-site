import React from 'react'

import Layout from '../components/layout';
import Head from "../components/head"

const ContactPage = () => {

    return(
        <Layout>
            <Head title="Contact"/>
            <h1>Something interesting to share?</h1>
            <p>write me hihowareyou@mechaphysis.org</p>
            <p>Say Hi! <a href='https://twitter.com/mechaphysis' target='_blank'>@mechaphysis</a></p>
        </Layout>
    )
}

export default ContactPage