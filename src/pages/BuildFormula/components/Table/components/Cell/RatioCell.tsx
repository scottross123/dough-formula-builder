import {FormEvent, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../../app/hooks";
import {addToUnitWeight, updateFlourRatio, updateIngredientRatio} from "../../../../../../app/recipeSlice";
import {formatContent} from "../../../../utils/numberFormats";
import OutsideClickProvider from "./OutsideClickProvider";
import {selectTotalFlourWeight} from "../../../../../../app/recipeSelectors";

type RatioCellProps = {
    ingredientId: string,
    ratio: number,
    type: 'flour' | 'ingredient',
}

const RatioCell = (props: RatioCellProps) => {
    const { ingredientId, ratio, type } = props;
    const [editable, setEditable] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLTableCellElement>(null);
    const totalFlourWeight = useAppSelector(selectTotalFlourWeight);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const newRatio = parseFloat(e.currentTarget.value);
        const additionalWeight = (newRatio - ratio) * totalFlourWeight;
        if (type === 'flour') {
            dispatch(updateFlourRatio({id: ingredientId, newRatio: newRatio}))
        }
        if (type === 'ingredient') {
            dispatch(updateIngredientRatio({id: ingredientId, newRatio: newRatio}))
            dispatch(addToUnitWeight({additionalWeight: additionalWeight}));
        }
    }

    const handleClickOutside = () => {
        setEditable(false);
    }

    if (editable) {
        return (
            <td ref={ref}>
                <OutsideClickProvider parentRef={ref} handleClickOutside={handleClickOutside}>
                    <input
                        type="number"
                        value={ratio}
                        onChange={handleChange}
                    />
                </OutsideClickProvider>%
            </td>
        );
    }

    return (
        <td onClick={() => setEditable(true)}>
            {Math.round(ratio * 100 * 100)/100}%
        </td>
    );
}

export default RatioCell;