/** Play component **/

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const PlayList = () => {
  const data = useStaticQuery(graphql`
    query PlayQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark
      (
        filter: {frontmatter: {categories: {eq: "play"}}} 
      ) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const posts = data.allMarkdownRemark.nodes

  return (
    <section id="playlist">
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article className="post-list-item"  >
                    <Link to={post.fields.slug} itemProp="url">
                       <h2 className="post-title"> {title} </h2> 
                    </Link>  
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default PlayList
