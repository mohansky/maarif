/** Banner component that queries for data **/

import React from 'react';
import { Link } from 'gatsby';
import Playnav from "./playnav"
import Worknav from "./worknav" 

 const Banner = () => {
 
  return (
    <section id="banner"> 
    
      <Link to="#playlist" className="banner-play-title">  
        <div className="playnavdisplay">
          <h3> JACK OF </h3>  {/* <Playnav /> */}  
        </div>   
        <h1> ALL TRADES</h1> 
      </Link> 
 

      <Link to="#worklist" className="banner-work-title">
        <div className="worknavdisplay"> 
          {/* <Worknav/> */}   <h3> MASTER OF</h3> 
        </div>
        <h1>ONE</h1>
      </Link> 

     </section>
   )
 }
 
 export default Banner
 