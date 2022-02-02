import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import {graphql,useStaticQuery} from 'gatsby'

export default function Home() {
  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost(
      sort: {
        fields: publishedDate,
        order:DESC
      }
    ){
      edges{
        node{
          title
          # publishedDate(fromNow: true)
          publishedDate(formatString:"MMMM Do, YYYY")
          slug
          # body {
          #   raw
          # }
        }
      }
    }
  }  
  `);
    return (
      <Layout>
        <Link to="/page-2">Page 2</Link>
        <h1>Content full Blogs</h1>
    {data.allContentfulBlogPost.edges.map(edge => (<div>
      <ol>
      <Link to={`/contentful_blog/${edge.node.slug}`}>{edge.node.title}</Link>
      </ol>
    </div>))}
      </Layout>

    )
}
