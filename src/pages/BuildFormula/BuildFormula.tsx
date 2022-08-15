import styles from './BuildFormula.module.css';
import { Heading, Inputs, Table, Controls } from "./components";
import {ReactNode} from "react";

const BuildFormula = () => {
    return (
        <section className={styles.buildFormula}>
            <Heading />
            <Inputs />
            <Table />
            <Controls deletable={false}/>
        </section>
    )
}

export default BuildFormula;