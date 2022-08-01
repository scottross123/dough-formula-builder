import styles from './table.module.css';
import { useContext } from "react";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { FormulaContext } from "../../contexts";
import {useAppSelector} from "../../../../app/hooks";
import {selectFormula} from "../../../../app/formulaSlice";
import Row from "./components/Row";

const Table = () => {
    const formula = useAppSelector(selectFormula)

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
        </table>
    )

}

export default Table;

/*<table className={styles.table}>
            <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Metric</th>
                    <th>Baker's %</th>
                </tr>
            </thead>
            <Body formula={formula} />
        </table>*/