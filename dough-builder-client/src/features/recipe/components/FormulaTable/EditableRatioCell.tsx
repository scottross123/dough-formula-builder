import EditableCell from "../EditableCell";
import {useEffect, useState} from "react";
import {updateIngredientRatio} from "../../state/editRecipeSlice";
import {useAppDispatch} from "../../../../store/hooks";

type EditableRatioCellProps = {
    id: string,
    initialRatioValue: number,
}

const percentFormat = (n: number): number => {
    return parseFloat((n * 100).toFixed(2));
}

const EditableRatioCell = (props: EditableRatioCellProps) => {
    const { id, initialRatioValue } = props;
    const [ratioValue, setRatioValue] = useState<number>(initialRatioValue);
    const dispatch = useAppDispatch();

    const updateRatioValue = (newRatioValue: number): void => {
        setRatioValue((newRatioValue))
    }

    useEffect(() => {
        dispatch(updateIngredientRatio({ id: id, newRatio: ratioValue}))
    }, [ratioValue])

    return (
        <EditableCell
            type='number'
            value={ratioValue}
            updateValue={updateRatioValue}
            formatFunction={percentFormat}
            symbol='%'
        />
    );
}

export default EditableRatioCell;