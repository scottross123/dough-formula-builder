import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

type CellProps  = {
    content: number | string,
}

const Cell = (props: CellProps) => {
    const { content } = props;
    const [editable, setEditable] = useState<boolean>(false)
    const ref = useRef<HTMLTableCellElement>(null);

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
                    type="number"
                    min="0"
                    max="100"
                    value={content}
                />
            </td>
        )
    }

    return (
        <td onClick={handleClick}>
            {content}
        </td>
    )
}

export default Cell;