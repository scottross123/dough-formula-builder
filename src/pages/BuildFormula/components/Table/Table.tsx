import styles from './table.module.css';
import { useState } from "react";
import Footer from "./components/Footer";
import Body from "./components/Body";
import useFormula, { formulaRow } from "../../hooks/useFormula/useFormula";

const Table = () => {
    const { state: { formula }, getTotalMetric, getTotalRatio } = useFormula();

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Metric</th>
                    <th>Baker's %</th>
                </tr>
            </thead>
            <Body formula={formula} />
            <Footer totalMetric={getTotalMetric()} totalRatio={getTotalRatio()} />
        </table>
    )
}

export default Table;