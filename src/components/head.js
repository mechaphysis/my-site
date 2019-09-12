import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql} from "gatsby"
import SegmentAnalytics from "./Segment/SegmentAnalytics"

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return(
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
            <SegmentAnalytics></SegmentAnalytics>
        </Helmet>
    )
}

export default Head