import { FormEvent, useEffect, useRef, useState} from "react";
import { metricFormat , percentFormat } from "../../../utils/numberFormats";
import { useOnOutsideClick } from "../../../hooks/useOnOutsideClick";

type CellProps  = {
    content: number | string,
    columnIndex: number
}

const Cell = (props: CellProps) => {
    const { content, columnIndex } = props;
    const [editable, setEditable] = useState<boolean>(false)
    const ref = useRef<HTMLTableCellElement>(null);
    useOnOutsideClick(ref, () => setEditable(false))

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        // dispatch function to update table

    }

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