import styles from './table.module.css';
import { useContext } from "react";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { FormulaContext } from "../../contexts";

const Table = () => {
    const ctx = useContext(FormulaContext);

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Metric</th>
                    <th>Baker's %</th>
                </tr>
            </thead>
            <Body formula={ctx!.state.formula} />
            <Footer totalMetric={ctx!.getTotalMetric()} totalRatio={ctx!.getTotalRatio()} />
        </table>
    )
}

export default Table;