import React from "react"  

const WorkMenuItems = [
    {
        title: 'Design',
        url: '/design',
        cName: 'nav-blinks'
    },
    {
        title: 'UX',
        url: '/ux',
        cName: 'nav-blinks'
    },
    {
        title: 'Product',
        url: '/product',
        cName: 'nav-blinks'
    },
    {
        title: 'Research',
        url: '/research',
        cName: 'nav-blinks'
    },
    {
        title: 'Blogs',
        url: '/blogs',
        cName: 'nav-blinks'
    },
]
 

const Worknav = () => {  

    return (
       <>
            <div className="navbarItems">        
                    <ul className="worknav">
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
        </>
    )
 }
 
export default Worknav
 