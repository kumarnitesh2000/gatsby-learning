const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
    const {createNodeField } = actions;
    if(node.internal.type=='MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath,'.md');
        console.log(slug);
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
    
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // local files based pages
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const localSource = await graphql(`
  query{
      allMarkdownRemark {
        edges {
          node {
            fields{
              slug
            }
          }
        }
      }
    }
  `);
  localSource.data.allMarkdownRemark.edges.forEach(element => {
      createPage({
          component: blogTemplate,
          path: `/blog/${element.node.fields.slug}`,
          context: {
              slug: element.node.fields.slug
          }
      })
  });
  // contentful based pages 
  const blogTemplate2 = path.resolve('./src/contentful-blogs/blog.js');
  const contentfulSource = await graphql(`
  query{
    allContentfulBlogPost{
        edges{
          node{
            slug
          }
        }
      }
    }
  `);
  contentfulSource.data.allContentfulBlogPost.edges.forEach(element => {
      createPage({
          component: blogTemplate2,
          path: `/contentful_blog/${element.node.slug}`,
          context: {
            slug: element.node.slug
          }
      })
  });

}