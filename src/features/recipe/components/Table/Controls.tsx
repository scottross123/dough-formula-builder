import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {addIngredient, } from "../../../../store/slices/recipesSlice";
import { selectFormula} from "../../../../store/selectors/recipesSelectors";
import { v4 as uuidv4 } from 'uuid';
import {useContext} from "react";
import {RecipeContext} from "../../providers/RecipeProvider";

const Controls = () => {
    const dispatch = useAppDispatch();
    const recipeId = useContext(RecipeContext);

    const handleClickIngredient = () => {
        dispatch(addIngredient({
            recipeId: recipeId,
            newIngredient: {
                id: uuidv4(),
                name: "New Ingredient",
                ratio: 0,
            },
        }))
    }

    const handleClickFlour = () => {
        //dispatch(calcRatioFromMetric({id: 40, metric: 400}))
    }

    return (
        <div className="btn-group">
            <button className="btn" onClick={handleClickIngredient}>Add ingredient</button>
            <button className="btn" onClick={handleClickFlour}>Add flour</button>
        </div>
    );
}

export default Controls;