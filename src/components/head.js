import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql} from "gatsby"
import TagManagerBase from "./TagManager/TagManagerBase";

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
            <TagManagerBase></TagManagerBase>
        </Helmet>
    )
}

export default Head