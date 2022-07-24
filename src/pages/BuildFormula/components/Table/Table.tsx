import styles from './table.module.css';
import { useState } from "react";
import {TableEntry} from "./types";
import Footer from "./components/Footer";
import Body from "./components/Body";

const Table = () => {
    const [tableEntries, setTableEntries] = useState<TableEntry[]>(
        [
            {
                ingredient: 'Flour',
                metric: 500,
                percent: 1,
            },
            {
                ingredient: 'Water',
                metric: 375,
                percent: .75,
            },
            {
                ingredient: 'Salt',
                metric: 9,
                percent: .018,
            },
            {
                ingredient: 'Yeast',
                metric: 5,
                percent: .01,
            },
        ]
    );

    const [tableFooter, setTableFooter] = useState<TableEntry>(
        {
            ingredient: 'Total',
            metric: 889,
            percent: 177.8,
        },
    )

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Metric</th>
                    <th>Baker's %</th>
                </tr>
            </thead>
            <Body tableEntries={tableEntries} />
            <Footer tableEntries={tableEntries} />
        </table>
    )
}

export default Table;