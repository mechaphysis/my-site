import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Head from "../components/head"

const AboutPage = () => {
    
    return(
        <Layout>
            <Head title="About"/>
            <h1>About me</h1>
            <p>And inquisitive mind exploring craft and code across all possible realms.</p>
            <p>Wanna hire? <Link to='/contact'>Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage