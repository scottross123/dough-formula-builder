import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {addIngredient, calcRatioFromMetric, updateMetric} from "../../../../app/recipeSlice";
import {selectFlourWeight, selectFormula} from "../../../../app/selectors";

type ControlsProps = {
    deletable: boolean
}

const Controls = (props: ControlsProps) => {
    const { deletable } = props;
    const dispatch = useAppDispatch();
    const formula = useAppSelector(selectFormula);

    const handleClick = () => {
        dispatch(addIngredient({
            id: 40,
            name: 'Egg',
            metric: 400,
            ratio: .7,
        },))
    }

    const handleClickTwo = () => {
        dispatch(calcRatioFromMetric({id: 40, metric: 400}))
    }

    return (
        <div>
            <button onClick={handleClick}>add ingredient</button>
            <button onClick={handleClickTwo}>change egg ratio</button>
            { deletable ? <button>delete table</button> : <></>}
        </div>
    );
}

export default Controls;