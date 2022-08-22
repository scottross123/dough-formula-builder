import styles from './table.module.css';
import { useContext } from "react";
import Footer from "./Footer";
import Body from "./Body";
import Controls from "./Controls";
import Table from "../Table";
import {useAppDispatch} from "../../../../store/hooks";

type TableProps = {
    title: string,
    readOnly?: boolean,
    prefermentId?: string,
}

const FormulaTable = (props: TableProps) => {
    const { title, readOnly, prefermentId } = props;

    return (
        <Table title={title} controls={readOnly ? undefined : <Controls />}>
            <>
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Metric</th>
                        <th>Baker's %</th>
                    </tr>
                </thead>
                <Body prefermentId={prefermentId} />
                <Footer prefermentId={prefermentId} />
            </>
        </Table>
    );

}

export default FormulaTable;
