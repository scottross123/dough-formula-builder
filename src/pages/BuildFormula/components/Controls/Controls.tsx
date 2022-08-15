import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {addIngredient, } from "../../../../store/slices/recipeSlice";
import { selectFormula} from "../../../../store/selectors/recipeSelectors";

type ControlsProps = {
    deletable: boolean
}

const Controls = (props: ControlsProps) => {
    const { deletable } = props;
    const dispatch = useAppDispatch();
    const formula = useAppSelector(selectFormula);

    const handleClickIngredient = () => {
        dispatch(addIngredient({
            id: 40,
            name: 'Egg',
            metric: 400,
            ratio: .7,
        },))
    }

    const handleClickFlour = () => {
        //dispatch(calcRatioFromMetric({id: 40, metric: 400}))
    }

    return (
        <div>
            <button onClick={handleClickIngredient}>Add ingredient</button>
            <button onClick={handleClickFlour}>Add flour</button>
            { deletable ? <button>delete table</button> : <></>}
        </div>
    );
}

export default Controls;