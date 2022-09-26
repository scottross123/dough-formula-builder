import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {addIngredient, addPrefermentIngredient,} from "../../state/editRecipeSlice";
import { v4 as uuidv4 } from 'uuid';
import {Button} from "react-daisyui";
import {Ingredient} from "../../types";

type ControlsProps = {
    prefermentId?: string,
}

const Controls = (props: ControlsProps) => {
    const { prefermentId } = props;
    const dispatch = useAppDispatch();

    const handleClickIngredient = () => {
        const newIngredient: Ingredient = {
            id: uuidv4(),
            name: "New Ingredient",
            ratio: 0,
        };

        prefermentId ?
            dispatch(addPrefermentIngredient({id: prefermentId, newIngredient: newIngredient})) :
            dispatch(addIngredient(newIngredient))

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
