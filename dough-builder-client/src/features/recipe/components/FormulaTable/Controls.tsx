import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {addIngredient, } from "../../state/editRecipeSlice";
import { v4 as uuidv4 } from 'uuid';
import {Button} from "react-daisyui";

const Controls = () => {
    const dispatch = useAppDispatch();
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
        <Button color="primary" size='sm' onClick={handleClickIngredient}>Add ingredient</Button>
    );
}

export default Controls;

/*<button className={buttonStyle} onClick={handleClickFlour}>Add flour</button>*/
