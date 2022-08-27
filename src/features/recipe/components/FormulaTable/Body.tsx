import Row from "./Row";
import { useAppSelector } from "../../../../store/hooks";
import { selectFormula, selectPreferment } from "../../state/editRecipeSelectors";
import { Ingredient } from "../../types";
import {useContext} from "react";
import {RecipeContext} from "../../providers/RecipeProvider";

type BodyProps = {
    prefermentId?: string,
    finalDough?: boolean,
}

const Body = (props: BodyProps) => {
    const { prefermentId, finalDough } = props;
    const recipeId: string = useContext(RecipeContext);
    const { flours, ingredients }: { flours: Ingredient[], ingredients: Ingredient[] } = prefermentId ?
            useAppSelector(state => selectPreferment(state, prefermentId))!.formula :
            useAppSelector(state => selectFormula(state));

    return (
        <tbody>
            { flours.map((flour: Ingredient) =>
                <Row
                    key={flour.id}
                    ingredient={flour}
                    prefermentId={prefermentId}
                    isFlour
                    finalDough
                />
            )}

            { ingredients.map((ingredient: Ingredient) =>
                <Row
                    key={ingredient.id}
                    ingredient={ingredient}
                    prefermentId={prefermentId}
                    finalDough
                />
            )}
        </tbody>
    );
}

export default Body;
