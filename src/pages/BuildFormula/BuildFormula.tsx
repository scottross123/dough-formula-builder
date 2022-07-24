import styles from './BuildFormula.module.css';
import Inputs from  "./components/Inputs";
import Table from "./components/Table";
import TableControls from "./components/Controls/TableControls";


const BuildFormula = () => {
    return (
        <section className={styles.buildFormula}>
            <Inputs />

            <Table />

            <TableControls deletable={false}/>
        </section>
    )
}

export default BuildFormula;