import styles from './BuildFormula.module.css';
import { Heading, Inputs, Table, Controls } from "./components";
import { FormulaProvider } from './contexts'
import {ReactNode} from "react";

const BuildFormula = () => {
    return (
        <FormulaProvider>
            <section className={styles.buildFormula}>
                <Heading />
                <Inputs />
                <Table />
                <Controls deletable={false}/>
            </section>
        </FormulaProvider>
    )
}

export default BuildFormula;