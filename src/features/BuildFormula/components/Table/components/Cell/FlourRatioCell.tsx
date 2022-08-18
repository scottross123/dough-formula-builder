import {FormEvent, useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../../store/hooks";
import {addToUnitWeight, updateFlours, updateIngredientRatio} from "../../../../../../store/slices/recipeSlice";
import {formatContent} from "../../../../utils/numberFormats";
import OutsideClickProvider from "../../../../providers/OutsideClickProvider";
import {selectTotalFlourWeight} from "../../../../../../store/selectors/recipeSelectors";
import {UpdatedFlourRatio} from "../FlourRow";

type FlourRatioCellProps = {
    ingredientId: string,
    ratio: number,
    updateEditing: (isEditing: boolean) => void,
    editing: boolean,
    updateUpdatedFlours: (updatedFlourArray: UpdatedFlourRatio) => void,
    newFlours: UpdatedFlourRatio[]
}

const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, [
    ]);
    return isMountRef.current;
};

const FlourRatioCell = (props: FlourRatioCellProps) => {
    const { ingredientId, ratio, updateEditing, editing, updateUpdatedFlours, newFlours } = props;
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLTableCellElement>(null);
    const totalFlourWeight = useAppSelector(selectTotalFlourWeight);
    const [percent, setPercent] = useState(ratio)

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setPercent(parseFloat(e.currentTarget.value));
        updateUpdatedFlours({id: ingredientId, newRatio: percent})
        console.log('percent', percent)
    }

    const handleClickOutside = () => {
        dispatch(updateFlours(newFlours))
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