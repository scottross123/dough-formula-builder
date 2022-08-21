import styles from './table.module.css';
import { useContext } from "react";
import Footer from "./Footer";
import Body from "./Body";
import Controls from "./Controls";
import Table from "../Table";

type TableProps = {
    title: string,
    readOnly?: boolean,
}

const FormulaTable = (props: TableProps) => {
    const { title, readOnly } = props;

    return (
        <Table title={title} controls={<Controls />}>
            <>
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Metric</th>
                        <th>Baker's %</th>
                    </tr>
                </thead>
                <Body />
                <Footer />
            </>
        </Table>
    );

}

export default FormulaTable;
