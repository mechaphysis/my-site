import React from 'react'
import Layout from '../components/layout';
import Head from "../components/head"

import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(
            sort: {
                fields: publishedDate
                order: DESC
            }
            ){
            edges{
                node{
                title
                slug
                publishedDate(fromNow:true)
                }
            }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <p>Posts will show up here later</p>
            <ol className={blogStyles.posts}>
                {
                    data.allContentfulBlogPost.edges.map( edge => {
                        return(
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
}

export default BlogPage