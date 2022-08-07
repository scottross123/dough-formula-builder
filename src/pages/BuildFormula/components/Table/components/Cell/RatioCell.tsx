import {FormEvent, useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../../app/hooks";
import {addToUnitWeight, updateFlourRatio, updateIngredientRatio} from "../../../../../../app/recipeSlice";
import {formatContent} from "../../../../utils/numberFormats";
import OutsideClickProvider from "./OutsideClickProvider";
import {selectFlour, selectTotalFlourWeight} from "../../../../../../app/recipeSelectors";

type RatioCellProps = {
    ingredientId: string,
    ratio: number,
    type: 'flour' | 'ingredient',
}

const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};

const RatioCell = (props: RatioCellProps) => {
    const { ingredientId, ratio, type } = props;
    const [editable, setEditable] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLTableCellElement>(null);
    const totalFlourWeight = useAppSelector(selectTotalFlourWeight);
    const [percent, setPercent] = useState(ratio);
    const prevRatio = useAppSelector((state) => selectFlour(state, ingredientId as never))

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setPercent(parseFloat(e.currentTarget.value));
        const newRatio = parseFloat(e.currentTarget.value);
        const additionalWeight = (newRatio - ratio) * totalFlourWeight;
        if (type === 'flour') {
            dispatch(updateFlourRatio({id: ingredientId, prevRatio: prevRatio, newRatio: newRatio}))
        }
        if (type === 'ingredient') {
            dispatch(updateIngredientRatio({id: ingredientId, newRatio: newRatio}))
            dispatch(addToUnitWeight({additionalWeight: additionalWeight}));
        }
        console.log(percent);
    }

    const isMount = useIsMount();

    useEffect(() => {
        if (!isMount) {

        }
    })

    const handleClickOutside = () => {
        setEditable(false);
    }

    if (editable) {
        return (
            <td ref={ref}>
                <OutsideClickProvider parentRef={ref} handleClickOutside={handleClickOutside}>
                    <input
                        type="number"
                        value={percent}
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