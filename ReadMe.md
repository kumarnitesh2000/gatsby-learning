## Starter Creater for gatsby

---

`npm i -g gatsby-cli@2.4.17`

---------
`gatsby new gatsby-project https://github.com/gatsbyjs/gatsby-starter-hello-world`

------

> ### query for site info GRAPHQL
```
query{
	site{
		siteMetadata{
			title,
      author
    }
  }
}
```

--------------------------------
> ### fetch local markdown file
```

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
      }
    }
  }
}
```

### Creating custom fields with can be fetched in query

```
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
----------------------------------

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
}

```

```
query{
  # filter the markdown page using paranthesis
	markdownRemark (
		fields:{
			slug:{
				eq: "gatsby"
      }
    }
  ){
    frontmatter{
			title
    }
  }
}
```

## query variables examples

```
query(
	$slug:String
){
  # filter the markdown page using paranthesis
	markdownRemark (
		fields:{
			slug:{
				eq: $slug
      }
    }
  ){
    frontmatter{
			title
    }
  }
}
```

## All Contentful assets

```
query{
  allContentfulAsset {
    nodes {
      contentful_id
      title
      description
    }
  }
}
```

## Content Contents

```
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


```