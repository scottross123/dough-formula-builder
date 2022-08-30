import OutsideClickProvider from "../providers/OutsideClickProvider";
import {FormEvent, useEffect, useRef, useState} from "react";
import { Input } from "react-daisyui";
import {useAppDispatch} from "../../../store/hooks";
import {Dispatch} from "@reduxjs/toolkit";
import {updateFlourName, updateIngredientName, updateIngredientRatio} from "../state/editRecipeSlice";

type EditableCellProps = {
    type: 'text' | 'number',
    value: number | string,
    updateValue: ((newValue: number) => void) | ((newValue: string) => void),
    formatFunction?: ((arg: string) => string) | ((arg: number) => any),
    symbol?: string,
}

const EditableCell = (props: EditableCellProps) => {
    const { type, value, updateValue, formatFunction, symbol } = props;
    const [editable, setEditable] = useState<boolean>(false);
    const ref = useRef<HTMLTableCellElement>(null);

    const handleClickOutside = () => {
        setEditable(false);

    }

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        // TODO validate input so you cant enter NaN or values below zero
        const newValue = typeof value === 'number' ? parseFloat(e.currentTarget.value) : e.currentTarget.value;
        updateValue(newValue as never);
        console.log('handling change')
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
            {formatFunction ? formatFunction(value as never) : value}{symbol}
        </td>
    );
}

export default EditableCell;