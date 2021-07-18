import React, { useState, useEffect } from "react" 
import { Link } from "gatsby"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

 

const WorkMenuItems = [
    {
        title: 'Design',
        url: '/design',
        cName: 'nav-links'
    },
    {
        title: 'UX',
        url: '/ux',
        cName: 'nav-links'
    },
    {
        title: 'Product',
        url: '/product',
        cName: 'nav-links'
    },
    {
        title: 'Research',
        url: '/research',
        cName: 'nav-links'
    },
    {
        title: 'Blogs',
        url: '/blogs',
        cName: 'nav-links'
    },
]

const PlayMenuItems = [
    {
        title: 'Doodles',
        url: '/doodles',
        cName: 'nav-links'
    },
    {
        title: 'Crafts',
        url: '/crafts',
        cName: 'nav-links'
    },
    {
        title: 'Art',
        url: '/art',
        cName: 'nav-links'
    },
    {
        title: 'Music',
        url: '/music',
        cName: 'nav-links'
    },
    {
        title: 'Movies',
        url: '/movies',
        cName: 'nav-links'
    },
    {
        title: 'Bikes',
        url: '/bikes',
        cName: 'nav-links'
    },
    {
        title: 'Cars',
        url: '/cars',
        cName: 'nav-links'
    },
]

const Header = () => {
    const [workactive, setWorkactive] = useState(false)
    const [logoactive, setLogoactive] = useState(true)      
    const [playactive, setPlayactive] = useState(false)  
    

    useEffect(() => {
        console.log('Work Click', workactive);
        console.log('Logo Click', logoactive);
        console.log('Play click', playactive);
        
        setWorkactive( workactive && !playactive )
        setLogoactive( logoactive && !workactive && !playactive )
        setPlayactive( playactive && !workactive )

        return () => { console.log('Clean Up');};
     
      }, [workactive, logoactive, playactive]);


    const ToggleWorkClass = () => {
          setWorkactive(!workactive);
          console.log('Work Clicked', workactive) 
        };
     
    const ToggleLogoClass = () => {
          setLogoactive(!logoactive);
          console.log('Logo Clicked', logoactive)  
        };
     
    const TogglePlayClass = () => {
          setPlayactive(!playactive);
          console.log('Play Clicked', playactive)  
        };
 
    return (
       <>
        <div className="navbarItems">
            <button className="menu-icon" onClick={ToggleWorkClass }>
                <h6>WORK</h6>
                <ul className={`work  ${workactive ? "active" : " "}`}>
                {WorkMenuItems.map((item,index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                <h5> {item.title} </h5>
                            </a>
                        </li>
                    )
                })}
            </ul>
            </button>

            <button className="menu-icon" onClick={ToggleLogoClass}>
              <Link to="/"className={`logo  ${logoactive ? "active" : " "}`}>
                <h5 className="logo-1"> Hi! I am </h5> 
                <h3 className="logo-2">  Maarif Haque</h3>  
              </Link>  
            </button> 
            

            <button className="menu-icon" onClick={TogglePlayClass}>
                <h6>PLAY</h6> 
                <ul className={`play  ${playactive ? "active" : " "}`}>
                {PlayMenuItems.map((item,index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                <h5> {item.title} </h5>
                            </a>
                        </li>
                    )
                })}
            </ul>
            </button> 
        </div>

        </>
    )
 }
 
export default Header
 