import EditableCell from "../EditableCell";
import {useEffect, useState} from "react";
import {updateFlourName, updateIngredientName, updateIngredientRatio} from "../../state/editRecipeSlice";
import {useAppDispatch} from "../../../../store/hooks";

type EditableNameCellProps = {
    id: string,
    initialNameValue: string,
    isFlour?: boolean,
}

const EditableNameCell = (props: EditableNameCellProps) => {
    const { id, initialNameValue, isFlour } = props;
    const [nameValue, setNameValue] = useState<string>(initialNameValue);
    const dispatch = useAppDispatch();

    const updateNameValue = (newNameValue: string): void => {
        setNameValue(newNameValue);
    }

    useEffect(() => {
        isFlour ? updateFlourName({ id: id, newName: nameValue }) : updateIngredientName({ id: id, newName: nameValue })
    }, [nameValue])

    return (
        <EditableCell
            type='text'
            value={nameValue}
            updateValue={updateNameValue}
        />
    );
}

export default EditableNameCell;