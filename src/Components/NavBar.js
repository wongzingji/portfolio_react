import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar({ menuItems }) {

  return (
    <nav className='navbar'>
        <div className='navbar_menu'>
            {
                menuItems.map((item, index) => (
                    <NavLink to={item.to} key={index} className={({isActive}) => {
                        return 'navbar_menu_item' + (isActive ? '_active' : '')
                    }}>
                        {item.name}
                    </NavLink>
                ))
            }
        </div>
    </nav>
  );
}

export default NavBar;
