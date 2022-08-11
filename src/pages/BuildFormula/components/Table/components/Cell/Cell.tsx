import {FormEvent, Fragment, useContext, useEffect, useRef, useState} from "react";
import {formatContent, metricFormat, percentFormat} from "../../../../utils/numberFormats";
import { useOnOutsideClick } from "../../../../hooks/useOnOutsideClick";
import {useAppDispatch, useAppSelector} from "../../../../../../app/hooks";
import {updateIngredientRatio } from "../../../../../../app/recipeSlice";

type CellProps  = {
    ingredientId: string,
    content: number | string,
    type: string,
}

const Cell = (props: CellProps) => {
    const { ingredientId, content, type } = props;
    const [editable, setEditable] = useState<boolean>(false);
    const [metric, setMetric] = useState<number>()
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLTableCellElement>(null);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const updatedValue = parseInt(e.currentTarget.value ) / 100;
        dispatch(updateIngredientRatio({id: ingredientId, newRatio: updatedValue}))
    }

    const handleOutsideClick = () => {
        setEditable(false);
        console.log("clicked outside")
    }

    useOnOutsideClick(ref, () => handleOutsideClick());
    const inputs = {
        "name":
            <Fragment>
                <input
                    type="text"
                    value={content}
                    onChange={handleChange}
                />
            </Fragment>,
        "metric":
            <Fragment>
                <input
                    type="number"
                    value={content}
                    onChange={handleChange}
                />g
            </Fragment>,
        "ratio":
            <Fragment>
                <input
                    type="number"
                    value={content as number * 100}
                    onChange={handleChange}
                />%
            </Fragment>,
    };

   if (editable) {
       return (
            <td ref={ref}>
                { inputs[type as 'name' | 'metric' | 'ratio'] }
            </td>
       )
    }

    return (
        <td onClick={() => setEditable(true)}>
            {formatContent(type, content)}
        </td>
    )
}

export default Cell;