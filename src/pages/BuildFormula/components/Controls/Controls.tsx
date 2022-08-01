import {useAppDispatch} from "../../../../app/hooks";
import {addIngredient, testReducer, updateMetric} from "../../../../app/formulaSlice";

type ControlsProps = {
    deletable: boolean
}

const Controls = (props: ControlsProps) => {
    const { deletable } = props;
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(addIngredient({
            id: 40,
            ingredient: 'Egg',
            metric: 5,
            ratio: .01,
        },))
    }

    const handleClickTwo = () => {
        dispatch(updateMetric({id: 40, newMetric: 500}))
    }

    return (
        <div>
            <button onClick={handleClick}>add ingredient</button>
            <button onClick={handleClickTwo}>change egg to 500</button>
            { deletable ? <button>delete table</button> : <></>}
        </div>
    );
}

export default Controls;