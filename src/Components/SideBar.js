// import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SideBar.css'

const sidebarItems = [
    {
        name: 'Home',
        to: '/'
    },
    {
        name: 'About',
        to: '/about'
    },
    {
        name: 'Journals',
        to: '/journals/mycities' // TODO
    },
    {
        name: 'Projects',
        to: '/projects'
    }
]

function SideBar() {
    // const [clicks, setClicks] = useState(Array(sidebarItems.length).fill(false));
    // const handleClicks = (index) => {setClicks(
    //     clicks.map((click, idx) => (
    //         idx === index ?
    //         true : false
    //     ))
    // )}

    return (
        <div className="sidebar">
            <div style={{padding: 80}}>
                <img src={ require('../assets/images/home/photo.png')} />
            </div>
            {/* <p>
                Jingyi Huang's <i style={{fontWeight: 'bold'}}>playground 🎵</i>
            </p> */}
            <div className='sidebar_menu'>
                {/* <ul> */}
                    {
                        sidebarItems.map((item, index) => (
                            // <li key={index} className={clicks[index] ? 'sidebar_menu_item_active' : 'sidebar_menu_item'} onClick={() => handleClicks(index)}>
                                // <Link to={item.to}>
                                //     {item.name}
                                // </Link>
                            // </li>

                            <NavLink to={item.to} key={index} className={({isActive}) => {
                                return 'sidebar_menu_item' + (isActive ? '_active' : '')
                            }}>
                                {item.name}
                            </NavLink>
                        ))
                    }
                    {/* {console.log(clicks)} */}
                {/* </ul> */}
            </div>
        </div>
    )
}

export default SideBar;