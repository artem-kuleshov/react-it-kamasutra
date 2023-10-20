import s from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <div>
            <div className='mb-1'>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : 'color-white' }>Profile</NavLink>
            </div>
            <div className='mb-1'>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : 'color-white' }>Dialogs</NavLink>
            </div>
            <div className='mb-1'>
                <NavLink to='/news' className = { navData => navData.isActive ? s.active : 'color-white' }>News</NavLink>
            </div>
            <div className='mb-1'>
                <NavLink to='/musics' className = { navData => navData.isActive ? s.active : 'color-white' }>Musics</NavLink>
            </div>
            <div className='mb-3'>
                <NavLink to='/settings' className = { navData => navData.isActive ? s.active : 'color-white' }>Settings</NavLink>
            </div>
        </div>
    );
}

export default Menu;