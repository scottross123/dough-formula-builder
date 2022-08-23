import styles from './table.module.css';
import { useContext } from "react";
import Footer from "./Footer";
import Body from "./Body";
import Controls from "./Controls";
import Table from "../Table";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {RecipeContext} from "../../providers/RecipeProvider";
import {selectPreferment} from "../../state/recipesSelectors";

type FormulaTableProps = {
    title: string,
    finalDough?: boolean,
    prefermentId?: string,
}

const FormulaTable = (props: FormulaTableProps) => {
    const { title, finalDough, prefermentId } = props;
    const recipeId: string = useContext(RecipeContext);
    const pffRatio: number | undefined = prefermentId ? useAppSelector(state => selectPreferment(state, recipeId, prefermentId))!.prefermentedFlourRatio : undefined;
    const additionalInfo: string | undefined = pffRatio ? `Pre-Fermented Flour: ${pffRatio * 100}%` : undefined;


    return (
        <Table
            title={title}
            controls={finalDough ? undefined : <Controls />}
            additionalInfo={additionalInfo}
        >
            <>
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Metric</th>
                        <th>Baker's %</th>
                    </tr>
                </thead>
                <Body prefermentId={prefermentId} finalDough />
                <Footer prefermentId={prefermentId} />
            </>
        </Table>
    );

}

export default FormulaTable;
