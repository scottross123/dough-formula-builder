import styles from './table.module.css';
import { useContext } from "react";
import Footer from "./components/Footer";
import Body from "./components/Body";


const Table = () => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Ingredients</th>
                <th>Metric</th>
                <th>Baker's %</th>
            </tr>
            </thead>
            <Body />
            <Footer />
        </table>
    )

}

export default Table;
