import {FormEvent, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../store/hooks";
import {addToUnitWeight, updateFlourRatio, updateIngredientRatio} from "../../../../../store/slices/recipesSlice";
import {formatContent} from "../../../utils/numberFormats";
import OutsideClickProvider from "../../../providers/OutsideClickProvider";
import {selectTotalFlourWeight} from "../../../../../store/selectors/recipesSelectors";

type RatioCellProps = {
    ingredientId: string,
    ratio: number,
    isFlour?: boolean,
}

const RatioCell = (props: RatioCellProps) => {
    const { ingredientId, ratio, isFlour } = props;
    const [editable, setEditable] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLTableCellElement>(null);
    const totalFlourWeight = useAppSelector(selectTotalFlourWeight);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const newRatio = parseFloat(e.currentTarget.value);
        dispatch(updateIngredientRatio({id: ingredientId, newRatio: newRatio}));
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