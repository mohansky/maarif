import React, { Component } from "react" 
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

 
class Header extends Component {
    state = { workclicked: false  }

    handleWorkClick = () =>{
        this.setState({ workclicked: !this.state.workclicked }) 
    }

    state = { playclicked: false }

    handlePlayClick = () =>{
        this.setState({ playclicked: !this.state.playclicked }) 
    }    

render(){

   return (
       <> 
        <nav className="navbarItems">
         <div className="menu-icon" onClick={this.handleWorkClick}> 
         <h6> WORK </h6>
         {/* <FontAwesomeIcon icon={ this.state.clicked ? faTimes : faBars } />   */}
         <ul className={this.state.workclicked ? 'work-menu active ' : 'work-menu'}>
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
         </div>

         <div className="menu-icon" onClick={this.handlePlayClick}> 
            <h6> PLAY </h6> 
                <ul className={this.state.playclicked ? 'play-menu active ' : 'play-menu'}>
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
                </div>
            </nav>
            <Link to="/" className="navbar-logo" >
                <h5 className="logo-1"> Hi! I am </h5> 
                <h3 className="logo-2">  Maarif Haque</h3>  
            </Link>  
        </>
    )
 }}
 
 export default Header
 