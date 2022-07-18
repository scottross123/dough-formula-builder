import styles from './Sidenav.module.css';

const Sidenav = () => {
    return (
        <nav className={styles.sidenav}>
            <ul>
                <li>nav1</li>
                <li>nav2</li>
                <li>nav3</li>
            </ul>
        </nav>
    )
}

export default Sidenav;