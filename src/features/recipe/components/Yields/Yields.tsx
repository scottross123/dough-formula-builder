import { useAppSelector } from "../../../../store/hooks";
import { selectYields } from "../../../state/recipesSelectors";
import { useContext } from "react";
import { RecipeContext } from "../../providers/RecipeProvider";
import Table from "../Table";

const Yields = () => {
    const recipeId = useContext(RecipeContext);
    const { unitQuantity, unitWeight, wasteFactor } = useAppSelector(state => selectYields(state, recipeId));

    return (
        <Table title="Yields">
            <tbody>
                <tr>
                    <td>Quantity of Units</td>
                    <td>{unitQuantity} units</td>
                </tr>
                <tr>
                    <td>Unit Weight</td>
                    <td>{unitWeight}g</td>
                </tr>
                <tr>
                    <td>Waste Factor</td>
                    <td>{wasteFactor * 100}%</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Yields;