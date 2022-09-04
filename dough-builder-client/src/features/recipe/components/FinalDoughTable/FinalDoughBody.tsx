import { Table } from "react-daisyui"
import { useAppSelector } from "../../../../store/hooks";
import {
    selectFinalDoughIngredients,
    selectFormula, selectPffWeight,
    selectPreferments,
    selectPrefermentWeight, selectPrefermentWeights,
    selectTotalFlourWeight,
    selectTotalNonPff
} from "../../state/editRecipeSelectors";
import {Ingredient, Preferment} from "../../types";
import { v4 as uuidv4 } from 'uuid';
import { gramsToOunces } from "../../utils/weightConversions";

type FinalDoughRow = {
    id: string,
    name: string;
    metric: number,
}

const FinalDoughBody = () => {
    const { flours, ingredients }: { flours: Ingredient[], ingredients: Ingredient[] } = useAppSelector(state => selectFormula(state));
    const preferments: Preferment[] | undefined = useAppSelector(selectPreferments);
    const totalNonPff: number = useAppSelector(selectTotalNonPff);
    const totalFlourWeight: number = useAppSelector(selectTotalFlourWeight);
    const prefermentRows: FinalDoughRow[] = useAppSelector(selectPrefermentWeights);
    const finalDoughIngredients: FinalDoughRow[] = useAppSelector(selectFinalDoughIngredients);

    const finalDoughRows: FinalDoughRow[] = [...finalDoughIngredients, ...prefermentRows].filter((finalDoughRow: FinalDoughRow) => finalDoughRow.metric != 0);

    // TODO add support for multiple flours
    return (
        <Table.Body>
            {
                flours.map((flour: Ingredient) => {
                    const { id, name } = flour;
                    return (
                        <Table.Row key={id}>
                            <span>{name}</span>
                            <span>{gramsToOunces(totalNonPff)}</span>
                            <span>{Math.round(totalNonPff)}g</span>
                        </Table.Row>
                    );
                })
            }

            {
                finalDoughRows.map((row: FinalDoughRow) => {
                    const { id, name, metric } = row;
                    return (
                        <Table.Row key={id}>
                            <span>{name}</span>
                            <span>{gramsToOunces(metric)}</span>
                            <span>{metric}g</span>
                        </Table.Row>
                    );
                })
            }
        </Table.Body>
    );
}

export default FinalDoughBody;