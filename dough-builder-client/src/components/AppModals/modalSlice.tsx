import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";
import {Recipe} from "../../features/recipe/types";

type ModalState = {
    isCreateVisible: boolean,
    deleteRecipeId?: string
}

const initialState: ModalState = {
    isCreateVisible: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleCreateRecipeModal: (state, action: PayloadAction<void>) => {
            state.isCreateVisible = !state.isCreateVisible;
        },
        setDeleteRecipeId: (state, action: PayloadAction<string | undefined>) => {
            const deleteRecipeId = action.payload;
            state.deleteRecipeId = deleteRecipeId;
        }
    }
});

export const { toggleCreateRecipeModal, setDeleteRecipeId } = modalSlice.actions;
export default modalSlice.reducer;

export const selectIsCreateVisible = (state: RootState): boolean => state.modal.isCreateVisible;
export const selectDeleteRecipeId = (state: RootState): string | undefined => state.modal.deleteRecipeId;