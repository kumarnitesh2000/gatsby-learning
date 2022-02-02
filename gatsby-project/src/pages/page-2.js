import React from "react"
import {Link} from "gatsby"
import Layout from '../components/layout'
import {graphql,useStaticQuery} from 'gatsby'

export default function Page() {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            # Assumes you're using title in your frontmatter.
            title
          }
          html
          excerpt
          fields{
            slug
          }
        }
      }
    }
  }
  `)
  return (
      <Layout>
        <ul>
          {data.allMarkdownRemark.edges.map(page => (<Link to={`/blog/${page.node.fields.slug}`}>{page.node.frontmatter.title}</Link>))}
        </ul>
      </Layout>
  )
}
