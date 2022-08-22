import Row from "./Row";
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
    const { flours, ingredients }: { flours: Ingredient[], ingredients: Ingredient[] } = prefermentId ?
        useAppSelector(state => selectPreferment(state, recipeId, prefermentId))!.formula :
        useAppSelector(state => selectFormula(state, recipeId));

    return (
        <tbody>
            { flours.map((flour: Ingredient) =>
                <Row
                    key={flour.id}
                    ingredient={flour}
                    prefermentId={prefermentId}
                    isFlour
                />
            )}

            { ingredients.map((ingredient: Ingredient) =>
                <Row
                    key={ingredient.id}
                    ingredient={ingredient}
                    prefermentId={prefermentId}
                />
            )}
        </tbody>
    );
}

export default Body;
