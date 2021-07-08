import React, { Component } from "react" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'


const MenuItems = [
    {
        title: 'WORK',
        url: '/work',
        cName: 'nav-links'
    },
    {
        title: 'Maarif Haque',
        url: '/',
        cName: 'nav-links'
    },
    {
        title: 'PLAY',
        url: '/play',
        cName: 'nav-links'
    },
    
]

 
class Header extends Component {
    state = { clicked: false }

        handleClick = () =>{
            this.setState({ clicked: !this.state.clicked })
        }

render(){

   return (
       <> 
       {/* <h5 className="navbar-logo"> Hi! I am </h5>  */}
        <nav className="navbarItems">
         
         <div className="menu-icon" onClick={this.handleClick}> 
         <FontAwesomeIcon icon={ this.state.clicked ? faTimes : faBars } />  
         </div>
         
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                <h5> {item.title} </h5>
                            </a>
                        </li>
                    )
                })}
            </ul> 
        </nav>
     </>
   )
 }}
 
 export default Header
 