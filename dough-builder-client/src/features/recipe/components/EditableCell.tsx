import OutsideClickProvider from "../providers/OutsideClickProvider";
import {FormEvent, useRef, useState} from "react";
import { Input } from "react-daisyui";
import {useAppDispatch} from "../../../store/hooks";
import {Dispatch} from "@reduxjs/toolkit";
import {updateFlourName, updateIngredientName, updateIngredientRatio} from "../state/editRecipeSlice";

type EditableCellProps = {
    type: 'text' | 'number',
    dispatchType?: 'flourName' | 'ingredientName' | 'ingredientRatio',
    id?: string,
    initialValue: string | number,
    formatFunction?: ((arg: string) => string) | ((arg: number) => string),
    symbol?: string,
}

const EditableCell = (props: EditableCellProps) => {
    const { type, dispatchType, initialValue, formatFunction, symbol, id } = props;
    const [editable, setEditable] = useState<boolean>(false);
    const [value, setValue] = useState<typeof initialValue>(initialValue);
    const ref = useRef<HTMLTableCellElement>(null);
    const dispatch = useAppDispatch();

    const handleClickOutside = () => {
        setEditable(false);
    }

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        console.log('handling change')
        if (id) {
            console.log('id is true')
            switch (dispatchType) {
                case 'flourName':
                    dispatch(updateFlourName({ id: id, newName: value as string }));
                    break;
                case 'ingredientName':
                    dispatch(updateIngredientName({ id: id, newName: value as string }));
                    break;
                case 'ingredientRatio':
                    dispatch(updateIngredientRatio({ id: id, newRatio: value as number }));
                    break;
                default:
                    break;
            }
        }
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
            {formatFunction ? formatFunction(value) : value}{symbol}
        </td>
    );
}

export default EditableCell;