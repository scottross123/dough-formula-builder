import {FormEvent, useRef, useState} from "react";
import {useAppDispatch} from "../../../../../../app/hooks";
import {updateIngredientName, updateIngredientRatio} from "../../../../../../app/recipeSlice";
import {formatContent} from "../../../../utils/numberFormats";
import OutsideClickProvider from "./OutsideClickProvider";

type NameCellProps = {
    ingredientId: string,
    name: string,
    type: 'flour' | 'ingredient',
}

const NameCell = (props: NameCellProps) => {
    const { ingredientId, name } = props;
    const [editable, setEditable] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLTableCellElement>(null);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const newName = e.currentTarget.value;
        dispatch(updateIngredientName({id: ingredientId, newName: newName}))
    }

    const handleClickOutside = () => {
        setEditable(false);
    }

    if (editable) {
        return (
            <td ref={ref}>
                <OutsideClickProvider parentRef={ref} handleClickOutside={handleClickOutside}>
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                    />
                </OutsideClickProvider>
            </td>
        );
    }

    return (
        <td onClick={() => setEditable(true)}>
            {name}
        </td>
    );
}

export default NameCell;