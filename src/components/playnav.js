import React  from "react"  

const PlayMenuItems = [
    {
        title: 'Doodles',
        url: '/doodles',
        cName: 'nav-blinks'
    },
    {
        title: 'Crafts',
        url: '/crafts',
        cName: 'nav-blinks'
    },
    {
        title: 'Art',
        url: '/art',
        cName: 'nav-blinks'
    },
    {
        title: 'Music',
        url: '/music',
        cName: 'nav-blinks'
    },
    {
        title: 'Movies',
        url: '/movies',
        cName: 'nav-blinks'
    },
    {
        title: 'Bikes',
        url: '/bikes',
        cName: 'nav-blinks'
    },
    {
        title: 'Cars',
        url: '/cars',
        cName: 'nav-blinks'
    },
]

const Playnav = () => {
     
    return (
        <>            
            <ul className="playnav" >
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
        </>
    )
 }
 
export default Playnav
 