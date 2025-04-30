import { NavLink } from 'react-router-dom';
import styles from './MenuButton.module.css'

const MenuButton = ({ text, link }) => {
    return (
        <NavLink className={styles.menuButton} to={link}>
            {text}
        </NavLink>
    )
}

export default MenuButton