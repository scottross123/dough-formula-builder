import IngredientRow from "./IngredientRow";
import { useAppSelector } from "../../../../store/hooks";
import { selectFormula } from "../../../../store/selectors/recipesSelectors";
import { Ingredient } from "../../../../store/slices/recipesSlice";
import {useContext} from "react";
import {RecipeContext} from "../../providers/RecipeProvider";

const Body = () => {
    const recipeId = useContext(RecipeContext);
    const { flours, ingredients } = useAppSelector(state => selectFormula(state, recipeId));

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
