import React from "react"
import {graphql,useStaticQuery} from 'gatsby'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                title,
                author
            }
        }
    }
    `)
    return (
      <div>
        Navbar: title - {data.site.siteMetadata.title}, author - {data.site.siteMetadata.author}
      </div>

    )
}
