import {Button, Modal} from "react-daisyui";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectRecipe} from "../../features/recipe/state/editRecipeSelectors";
import {selectIsDeleteVisible} from "./modalSlice";

const DeleteRecipeModal = () => {
    const { title } = useAppSelector(selectRecipe)!;
    const isDeleteVisible: boolean = useAppSelector(selectIsDeleteVisible);
    //const {}

    return (
        <Modal open={isDeleteVisible}>
            <Modal.Header>
                Are you sure you want to delete '{title}'? This action can not be undone.
            </Modal.Header>

            <Modal.Actions>
                <Button color="primary">Cancel</Button>
                <Button color="warning">DELETE!</Button>
            </Modal.Actions>
        </Modal>
    )
};

export default DeleteRecipeModal;