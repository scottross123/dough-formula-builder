import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {addIngredient, } from "../../../../store/slices/recipeSlice";
import { selectFormula} from "../../../../store/selectors/recipeSelectors";
import { v4 as uuidv4 } from 'uuid';

const Controls = () => {
    const dispatch = useAppDispatch();

    const handleClickIngredient = () => {
        dispatch(addIngredient({
            id: uuidv4(),
            name: 'Ingredient',
            ratio: 0,
        },))
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