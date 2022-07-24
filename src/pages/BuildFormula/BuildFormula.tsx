import styles from './BuildFormula.module.css';
import TableInputs from "./components/Inputs/TableInputs";
import Table from "./components/Table/Table";
import TableControls from "./components/Controls/TableControls";


const BuildFormula = () => {
    return (
        <div className={styles.buildFormula}>
            <TableInputs />

            <Table />

            <TableControls deletable={false}/>
        </div>
    )
}

export default BuildFormula;