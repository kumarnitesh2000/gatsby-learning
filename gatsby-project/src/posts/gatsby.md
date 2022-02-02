---
title: "gatsby"
date: "2015-9-90"
---


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