import { useEffect, useRef, useState } from "react";
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

    const handleOutsideClick = () => {
        setEditable(false);
    }

    useOnOutsideClick(ref, () => handleOutsideClick())

    const handleClick = () => {
        setEditable(true);
    }

    let formattedContent = content.toString();
    switch (columnIndex) {
        case 1:
            formattedContent = metricFormat(content as number);
            break;
        case 2:
            formattedContent = percentFormat(content as number);
            break;
    }

    if (editable) {
        return (
            <td ref={ref}>
                <input
                    type={typeof content === "number" ? "number" : "text"}
                    min="0"
                    max="100"
                    value={content}
                />
            </td>
        )
    }

    return (
        <td onClick={handleClick}>
            {formattedContent}
        </td>
    )
}

export default Cell;