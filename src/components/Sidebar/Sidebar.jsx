import s from './Sidebar.module.css'
import Friends from "./Friends/Friends";
import Menu from "./Menu/Menu";

const Sidebar = (props) => {
    return (
        <nav className={s.menu}>
            <Menu />
            <Friends friends={props.state.friends} />
        </nav>
    );
}

export default Sidebar;