import OutsideClickProvider from "../../providers/OutsideClickProvider";
import {useRef, useState} from "react";
import {useAppDispatch} from "../../../../store/hooks";
import {Input} from "react-daisyui";

type EditableCellProps = {
    type: 'text' | 'number',
    handleChange: () => void,
    value: string | number,
    formatValueFunction?: ((arg: string) => string) | ((arg: number) => string),
    symbol?: string,
}

const EditableCell = (props: EditableCellProps) => {
    const { type, handleChange, value, formatValueFunction, symbol } = props;
    const [editable, setEditable] = useState<boolean>(false);
    const ref = useRef<HTMLTableCellElement>(null);

    const handleClickOutside = () => {
        setEditable(false);
    }

    if (editable) {
        return (
            <td className="" ref={ref}>
                <OutsideClickProvider parentRef={ref} handleClickOutside={handleClickOutside}>
                    <Input
                        size="sm"
                        type={type}
                        value={value}
                        onChange={handleChange}
                    />
                </OutsideClickProvider>{symbol}
            </td>
        );
    }

    return (
        <td onClick={() => setEditable(true)}>
            {formatValueFunction ? formatValueFunction(value) : value}{symbol}
        </td>
    );
}

export default EditableCell;