import IngredientRow from "./IngredientRow";
import { useAppSelector } from "../../../../store/hooks";
import { selectFormula } from "../../../../store/selectors/recipeSelectors";
import FlourRow from "./FlourRow";

const Body = () => {
    const { flours, ingredients } = useAppSelector(selectFormula);

    return (
        <tbody>
        <FlourRow />

        {
            ingredients.map((ingredient) => (
            <IngredientRow type={'ingredient'} ingredient={ingredient} />
            ))
        }
        </tbody>
    );
}

export default Body;

// fix key prop warning in console