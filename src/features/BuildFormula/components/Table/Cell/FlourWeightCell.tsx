import {FormEvent, useEffect, useMemo, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../store/hooks";
import {formatContent} from "../../../utils/numberFormats";
import OutsideClickProvider from "../../../providers/OutsideClickProvider";
import {selectTotalFlourWeight, selectIngredientWeight, selectFlourWeight} from "../../../../../store/selectors/recipeSelectors";
import {addToUnitWeight,  updateIngredientRatio} from "../../../../../store/slices/recipeSlice";
import {UpdatedFlourRatio} from "../FlourRow";

type FlourWeightCellProps = {
    ingredientId: string,
    ratio: number,
    updateEditing: (isEditing: boolean) => void,
    editing: boolean,
    updateUpdatedFlours: (updatedFlourArray: UpdatedFlourRatio[]) => void,
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

const FlourWeightCell = (props: FlourWeightCellProps) => {
    const { ingredientId, ratio, updateEditing, editing} = props;
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLTableCellElement>(null);
    const metric = useAppSelector((state) =>
            selectFlourWeight(state, ingredientId as never));


    const totalFlourWeight = useAppSelector(selectTotalFlourWeight)
    const [weight, setWeight] = useState(metric);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setWeight(parseInt(e.currentTarget.value));
        console.log(weight)
    }

    const isMount = useIsMount();

    useEffect(() => {
        if (!isMount) {
            const prevRatio = metric / totalFlourWeight;
            const newRatio = weight / totalFlourWeight;
            const additionalWeight = weight - metric;
            if (newRatio) {
                dispatch(updateIngredientRatio({id: ingredientId, newRatio: newRatio}))
                dispatch(addToUnitWeight({additionalWeight: additionalWeight}));
            }
            console.log({"weight": weight, "metric": metric, "ratio": newRatio, "totalFlourWeight": totalFlourWeight});
        }
    }, [weight]);

    const handleClickOutside = () => {
        updateEditing(false);
    }

    if (editing) {
        return (
            <td ref={ref}>
                <OutsideClickProvider parentRef={ref} handleClickOutside={handleClickOutside}>
                    <input
                        className="flourInput"
                        type="number"
                        value={weight}
                        onChange={handleChange}
                    />
                </OutsideClickProvider>g
            </td>
        );
    }

    return (
        <td onClick={() => updateEditing(true)}>
            {metric}g
        </td>
    );
}

export default FlourWeightCell;