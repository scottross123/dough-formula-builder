import IngredientRow from "./IngredientRow";
import { useAppSelector } from "../../../../store/hooks";
import {selectFormula, selectPreferment, selectPreferments} from "../../state/recipesSelectors";
import {Formula, Ingredient, Preferment} from "../../state/recipesSlice";
import {useContext} from "react";
import {RecipeContext} from "../../providers/RecipeProvider";

type BodyProps = {
    prefermentId?: string,
}

const Body = (props: BodyProps) => {
    const { prefermentId } = props;
    const recipeId = useContext(RecipeContext);
    const { flours, ingredients } = prefermentId ?
        useAppSelector(state => selectPreferment(state, recipeId, prefermentId))!.formula :
        useAppSelector(state => selectFormula(state, recipeId));

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
