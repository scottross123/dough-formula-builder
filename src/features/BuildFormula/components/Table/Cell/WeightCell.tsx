import {FormEvent, useEffect, useMemo, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../store/hooks";
import {formatContent} from "../../../utils/numberFormats";
import OutsideClickProvider from "../../../providers/OutsideClickProvider";
import {selectTotalFlourWeight, selectIngredientWeight, selectFlourWeight} from "../../../../../store/selectors/recipeSelectors";
import {addToUnitWeight, updateFlourRatio, updateIngredientRatio} from "../../../../../store/slices/recipeSlice";

type WeightCellProps = {
    ingredientId: string,
    ratio: number,
    isFlour: boolean,
}

const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};

const WeightCell = (props: WeightCellProps) => {
    const { ingredientId, ratio, isFlour } = props;
    const [editable, setEditable] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLTableCellElement>(null);
    const metric = isFlour ?
        useAppSelector((state) =>
            selectFlourWeight(state, ingredientId as never)) :
        useAppSelector((state) =>
            selectIngredientWeight(state, ingredientId as never))


    const totalFlourWeight = useAppSelector(selectTotalFlourWeight)
    const [weight, setWeight] = useState(metric);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setWeight(parseInt(e.currentTarget.value));
        console.log(weight)
    }

    const isMount = useIsMount();

    useEffect(() => {
        if (!isMount) {
            //const prevRatio = metric / totalFlourWeight;
            const newRatio = weight / totalFlourWeight;
            const additionalWeight = weight - metric;
            if (newRatio) {
                isFlour ? (
                    dispatch(updateFlourRatio({id: ingredientId, newRatio: newRatio })),
                    dispatch(addToUnitWeight({additionalWeight: additionalWeight}))
                ) : (
                    dispatch(updateIngredientRatio({id: ingredientId, newRatio: newRatio})),
                    dispatch(addToUnitWeight({additionalWeight: additionalWeight}))
                )
            }
            //console.log({"weight": weight, "metric": metric, "ratio": newRatio, "totalFlourWeight": totalFlourWeight});
        }
    }, [weight]);

    const handleClickOutside = () => {
        setEditable(false);
    }

    if (editable) {
        return (
            <td ref={ref}>
                <OutsideClickProvider parentRef={ref} handleClickOutside={handleClickOutside}>
                    <input
                        type="number"
                        value={weight}
                        onChange={handleChange}
                    />
                </OutsideClickProvider>g
            </td>
        );
    }

    return (
        <td onClick={() => setEditable(true)}>
            {metric}g
        </td>
    );
}

export default WeightCell;