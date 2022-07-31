import {FormEvent, useContext, useEffect, useRef, useState} from "react";
import { metricFormat , percentFormat } from "../../../utils/numberFormats";
import { useOnOutsideClick } from "../../../hooks/useOnOutsideClick";
import { FormulaContext } from "../../../contexts";
import {formulaRow} from "../../../hooks/useFormula/useFormula";
import useInput from "../../../hooks/useInput";

type CellProps  = {
    rowId: number,
    content: number | string,
    columnIndex: number
}

const Cell = (props: CellProps) => {
    const { rowId, content, columnIndex } = props;
    const [editable, setEditable] = useState<boolean>(false);

    const { value, handleValueChange } = useInput({initialValue: content.toString()})

    const ref = useRef<HTMLTableCellElement>(null);
    const ctx = useContext(FormulaContext);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        const updatedValue = parseInt(e.currentTarget.value);
        ctx!.updateMetric(rowId, updatedValue);
    }

    const handleOutsideClick = () => {
        ctx!.updateMetric(rowId, parseInt(value));
        setEditable(false)
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

        return (
            <td ref={ref}>
                <input
                    type={typeof content === "number" ? "number" : "text"}
                    value={value}
                    onChange={handleValueChange}
                />
            </td>
        )


    return (
        <td onClick={() => setEditable(true)}>
            {formatContent(value)}
        </td>
    )
}

export default Cell;