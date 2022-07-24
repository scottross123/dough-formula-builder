import {useState} from "react";

type ReadOnlyCellProps  = {
    content: number | string,
}

const ReadOnlyCell = (props: ReadOnlyCellProps) => {
    const { content } = props;
    const [editable, setEditable] = useState<boolean>(false)

    const handleClick = () => {
        setEditable(true)
    }

    if (editable) {
        return (
            <td>
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

export default ReadOnlyCell;