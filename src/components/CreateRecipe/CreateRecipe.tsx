import {Button, Modal} from "react-daisyui";
import {useState} from "react";
import {useAppDispatch} from "../../store/hooks";
import {toggleModal} from "../NewRecipeModal/modalSlice";

const CreateRecipe = () => {
    const dispatch = useAppDispatch();

    return (
        <li>
            <a onClick={() => dispatch(toggleModal())}>Create a new recipe!</a>
        </li>
    );
}

export default CreateRecipe;
