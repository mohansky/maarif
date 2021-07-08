/** Banner component that queries for data **/

 import * as React from "react"
 import { Link, useStaticQuery, graphql } from "gatsby"
//  import { StaticImage } from "gatsby-plugin-image"
 
 const Banner = () => {
  //  const data = useStaticQuery(graphql`
  //    query BannerQuery {
  //      site {
  //        siteMetadata {
  //          author {
  //            name
  //            summary
  //          }
  //          social {
  //            twitter
  //          }
  //        }
  //      }
  //    }
  //  `)
 
   // Set these values by editing "siteMetadata" in gatsby-config.js
  //  const author = data.site.siteMetadata?.author
  //  const social = data.site.siteMetadata?.social
 
   return (
     <section id="banner">
       
      <Link to="#playlist" className="banner-play-title">
        <h3> JACK OF</h3>
        <h1> ALL TRADES</h1>
      </Link> 

      <Link to="/#worklist" className="banner-work-title">
        <h3> MASTER OF</h3>
        <h1> ONE </h1>
      </Link> 
     </section>
   )
 }
 
 export default Banner
 