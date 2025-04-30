import styles from './MenuButton.module.css'

const MenuButton = ({ text, onClick }) => {
    return (
        <button className={styles.menuButton} onClick={onClick}>
            {text}
        </button>
    )
}

export default MenuButton