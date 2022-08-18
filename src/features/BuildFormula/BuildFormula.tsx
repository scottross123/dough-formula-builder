import styles from './BuildFormula.module.css';
import { Heading, Inputs, Table, Controls } from "./components";
import {ReactNode} from "react";

const BuildFormula = () => {
    return (
        <section className="flex flex-col items-center gap-8">
            <Heading />
            <Inputs />
            <Table />
            <Controls deletable={false}/>
        </section>
    )
}

export default BuildFormula;