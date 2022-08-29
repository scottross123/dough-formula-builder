import {Button, Modal} from "react-daisyui";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectDeleteRecipeId, setDeleteRecipeId} from "./modalSlice";
import { useDeleteRecipeMutation, useGetRecipeQuery } from "../../features/recipe/api/recipesApi";
import {useNavigate} from "react-router";
import {setEditRecipe} from "../../features/recipe/state/editRecipeSlice";

const DeleteRecipeModal = () => {
    const deleteRecipeId: string | undefined = useAppSelector(selectDeleteRecipeId);
    const { data: recipe } = useGetRecipeQuery(deleteRecipeId!);
    const [deleteRecipe, { isLoading }] = useDeleteRecipeMutation();
    const title = recipe?.title;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            await deleteRecipe(deleteRecipeId!);
        } catch {
            alert("thats awkward")
        }
        dispatch(setDeleteRecipeId(undefined));
        dispatch(setEditRecipe(undefined))
        navigate("/recipes", { replace: true });
    }

    return (
        <Modal open={deleteRecipeId ? true : false}>
            <Modal.Header>
                Are you sure you want to delete '{title}'? This action can not be undone.
            </Modal.Header>

            <Modal.Actions>
                <Button onClick={() => dispatch(setDeleteRecipeId(undefined))} color="primary">Cancel</Button>
                <Button onClick={handleClick} color="warning">DELETE!</Button>
            </Modal.Actions>
        </Modal>
    )
};

export default DeleteRecipeModal;