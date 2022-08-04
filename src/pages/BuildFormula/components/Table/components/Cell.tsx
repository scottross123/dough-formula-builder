import {FormEvent, useContext, useEffect, useRef, useState} from "react";
import { metricFormat , percentFormat } from "../../../utils/numberFormats";
import { useOnOutsideClick } from "../../../hooks/useOnOutsideClick";
import { FormulaContext } from "../../../contexts";
import {formulaRow} from "../../../hooks/useFormula/useFormula";
import useInput from "../../../hooks/useInput";
import {useAppDispatch, useAppSelector} from "../../../../../app/hooks";
import {calcRatioFromMetric, updateMetric} from "../../../../../app/formulaSlice";
import row from "./Row";
import {selectFlourWeight, selectFormula} from "../../../../../app/selectors";

type CellProps  = {
    rowId: number,
    content: number | string,
    columnIndex: number
}

const Cell = (props: CellProps) => {
    const { rowId, content, columnIndex } = props;
    const [editable, setEditable] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    //const { value, handleValueChange } = useInput({initialValue: content.toString()})

    const ref = useRef<HTMLTableCellElement>(null);


    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const updatedValue = parseInt(e.currentTarget.value);
        dispatch(updateMetric({id: rowId, newMetric: updatedValue}))
    }

    const handleOutsideClick = () => {
        setEditable(false);
        //dispatch(calcRatioFromMetric({id: rowId, metric: content as number}))
    }
    useOnOutsideClick(ref, () => handleOutsideClick());

    const formatContent = (content: string | number) => {
        switch (columnIndex) {
            case 1:
                return metricFormat(content as number);
            case 2:
                return percentFormat(content as number);
        }
        return content.toString();
    }

   if (editable) {
        return (
            <td ref={ref}>
                <input
                    type={typeof content === "number" ? "number" : "text"}
                    value={content}
                    onChange={handleChange}
                />
            </td>
        )
    }


    return (
        <td onClick={() => setEditable(true)}>
            {formatContent(content)}
        </td>
    )
}

export default Cell;