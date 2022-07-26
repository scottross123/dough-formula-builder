import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {addIngredient, } from "../../state/editRecipeSlice";
import { selectFormula} from "../../state/editRecipeSelectors";
import { v4 as uuidv4 } from 'uuid';
import {useContext} from "react";
import {RecipeContext} from "../../providers/RecipeProvider";

const Controls = () => {
    const dispatch = useAppDispatch();
    const recipeId = useContext(RecipeContext);
    const buttonStyle = "btn btn-primary btn-outline btn-sm";

    const handleClickIngredient = () => {
        dispatch(addIngredient(
             {
                id: uuidv4(),
                name: "New Ingredient",
                ratio: 0,
            },
        ));
    };

    const handleClickFlour = () => {
        //dispatch(calcRatioFromMetric({id: 40, metric: 400}))
    }

    return (
        <div className="card-actions btn-group">
            <button className={buttonStyle} onClick={handleClickIngredient}>Add ingredient</button>
            <button className={buttonStyle} onClick={handleClickFlour}>Add flour</button>
        </div>
    );
}

export default Controls;