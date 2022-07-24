import { useEffect, useRef, useState } from "react";
import { metricFormat , percentFormat } from "../../../utils/numberFormats";

type CellProps  = {
    content: number | string,
    columnIndex: number
}

const Cell = (props: CellProps) => {
    const { content, columnIndex } = props;
    const [editable, setEditable] = useState<boolean>(false)
    const ref = useRef<HTMLTableCellElement>(null);

    let formattedContent = content.toString();
    switch (columnIndex) {
        case 1:
            formattedContent = metricFormat(content as number);
            break;
        case 2:
            formattedContent = percentFormat(content as number);
            break;
    }

    const handleClick = () => {
        setEditable(true);
    }

    const handleClickOutside = (e: Event) => {
        if (!ref.current?.contains(e.target as Node)) {
            setEditable(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }

    }, []);

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