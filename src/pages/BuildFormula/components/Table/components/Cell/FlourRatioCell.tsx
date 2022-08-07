import {FormEvent, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../../app/hooks";
import {addToUnitWeight, updateFlourRatio, updateIngredientRatio} from "../../../../../../app/recipeSlice";
import {formatContent} from "../../../../utils/numberFormats";
import OutsideClickProvider from "./OutsideClickProvider";
import {selectTotalFlourWeight} from "../../../../../../app/recipeSelectors";

type FlourRatioCellProps = {
    ingredientId: string,
    ratio: number,
    updateEditing: (isEditing: boolean) => void,
    editing: boolean,
}

const FlourRatioCell = (props: FlourRatioCellProps) => {
    const { ingredientId, ratio, updateEditing, editing } = props;
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLTableCellElement>(null);
    const totalFlourWeight = useAppSelector(selectTotalFlourWeight);
    const [percent, setPercent] = useState(ratio)

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setPercent(parseFloat(e.currentTarget.value));
    }

    const handleClickOutside = () => {
        dispatch(updateFlourRatio({id: ingredientId, newRatio: percent}))
        updateEditing(false);
    }

    if (editing) {
        return (
            <td ref={ref}>
                <OutsideClickProvider parentRef={ref} handleClickOutside={handleClickOutside}>
                    <input
                        className="flourInput"
                        type="number"
                        value={percent}
                        onChange={handleChange}
                    />
                </OutsideClickProvider>%
            </td>
        );
    }

    return (
        <td onClick={() => updateEditing(true)}>
            {Math.round(ratio * 100 * 100)/100}%
        </td>
    );
}

export default FlourRatioCell;