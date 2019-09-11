import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql} from "gatsby"
import TagManagerBase from "./TagManager/TagManagerBase"
import DataLayer from "./TagManager/DataLayer"

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
            <DataLayer></DataLayer>
            <TagManagerBase></TagManagerBase>
        </Helmet>
    )
}

export default Head