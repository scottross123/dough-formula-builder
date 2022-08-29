import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";
import {Recipe} from "../../features/recipe/types";

type ModalState = {
    isCreateVisible: boolean
    isDeleteVisible: boolean
}

const initialState: ModalState = {
    isCreateVisible: false,
    isDeleteVisible: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleCreateRecipeModal: (state, action: PayloadAction<void>) => {
            state.isCreateVisible = !state.isCreateVisible;
        },
        toggleDeleteRecipeModal: (state, action: PayloadAction<void>) => {
            state.isDeleteVisible = !state.isCreateVisible;
        }
    }
});

export const { toggleCreateRecipeModal, toggleDeleteRecipeModal } = modalSlice.actions;
export default modalSlice.reducer;

export const selectIsCreateVisible = (state: RootState): boolean => state.modal.isCreateVisible;
export const selectIsDeleteVisible = (state: RootState): boolean => state.modal.isDeleteVisible;