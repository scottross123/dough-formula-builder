import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerText}>
                Dough Builder
            </div>
        </header>
    );
}

export default Header;