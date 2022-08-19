import IngredientRow from "./IngredientRow";
import { useAppSelector } from "../../../../store/hooks";
import { selectFormula } from "../../../../store/selectors/recipesSelectors";
import { Ingredient } from "../../../../store/slices/recipesSlice";

const Body = () => {
    const { flours, ingredients } = useAppSelector(selectFormula);

    return (
        <tbody>
            { flours.map((flour: Ingredient) =>
                <IngredientRow key={flour.id} ingredient={flour} isFlour />
            )}

            { ingredients.map((ingredient: Ingredient) =>
                <IngredientRow key={ingredient.id} ingredient={ingredient} />
            )}
        </tbody>
    );
}

export default Body;
