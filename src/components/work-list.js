/** Work component **/

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const WorkList = () => {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark
      (
        filter: {frontmatter: {categories: {eq: "work"}}} 
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
    <section id="worklist">
      <ol className="post-list">
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

export default WorkList
