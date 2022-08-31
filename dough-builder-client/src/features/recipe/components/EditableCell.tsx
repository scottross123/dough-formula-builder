import OutsideClickProvider from "../providers/OutsideClickProvider";
import {FormEvent, useEffect, useRef, useState} from "react";
import { Input } from "react-daisyui";
import {useAppDispatch} from "../../../store/hooks";
import {Dispatch} from "@reduxjs/toolkit";
import {updateFlourName, updateIngredientName, updateIngredientRatio} from "../state/editRecipeSlice";

type EditableCellProps = {
    type: 'text' | 'number',
    initialValue: number | string,
    callbackFn: ((newValue: string) => void) | ((newValue: number) => void),
    formatFn?: ((arg: string) => string) | ((arg: number) => any),
}

const EditableCell = (props: EditableCellProps) => {
    const { type, initialValue, callbackFn, formatFn } = props;
    const [value, setValue] = useState<typeof initialValue>(initialValue);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const ref = useRef<HTMLTableCellElement>(null);

    useEffect(() => {
        callbackFn(value as never);
    }, [isEdit])

    const handleClickOutside = () => {
        setIsEdit(false)
    }

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        // TODO validate input so you cant enter NaN or values below zero
        const newValue = typeof value === 'number' ? parseFloat(e.currentTarget.value) : e.currentTarget.value;
        setValue(newValue);
    }

    if (isEdit) {
        return (
            <span className="" ref={ref}>
                <OutsideClickProvider parentRef={ref} handleClickOutside={handleClickOutside}>
                    <Input
                        size="sm"
                        type={type}
                        value={value}
                        onChange={handleChange}
                    />
                </OutsideClickProvider>
            </span>
        );
    }

    return (
        <span onClick={() => setIsEdit(true)}>
            {formatFn ? formatFn(value as never) : value}
        </span>
    );
}

export default EditableCell;