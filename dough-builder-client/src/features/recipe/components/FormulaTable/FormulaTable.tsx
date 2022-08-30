import styles from './table.module.css';
import { useContext } from "react";
import Footer from "./Footer";
import Body from "./Body";
import Controls from "./Controls";
import TableContainer from "../TableContainer";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {selectPreferment} from "../../state/editRecipeSelectors";
import { Table } from "react-daisyui";

type FormulaTableProps = {
    title: string,
    finalDough?: boolean,
    prefermentId?: string,
}

const FormulaTable = (props: FormulaTableProps) => {
    const { title, finalDough, prefermentId } = props;
    const pffRatio: number | undefined = prefermentId ? useAppSelector(state => selectPreferment(state, prefermentId))!.prefermentedFlourRatio : undefined;
    const additionalInfo: string | undefined = pffRatio ? `Pre-Fermented Flour: ${pffRatio * 100}%` : undefined;


    return (
        <TableContainer
            title={title}
            controls={finalDough ? undefined : <Controls />}
            additionalInfo={additionalInfo}
        >
            <Table className="card-body table table-compact w-full">
                <Table.Head>
                    <span>Ingredients</span>
                    <span>U.S.</span>
                    <span>Metric</span>
                    <span>Baker's %</span>
                </Table.Head>
                <Body prefermentId={prefermentId} />
                <Footer prefermentId={prefermentId} />
            </Table>
        </TableContainer>
    );

}

export default FormulaTable;
