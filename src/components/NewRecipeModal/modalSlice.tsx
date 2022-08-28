import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";
import {Recipe} from "../../features/recipe/types";

type ModalState = {
    isVisible: boolean
}

const initialState: ModalState = {
    isVisible: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<void>) => {
            state.isVisible = !state.isVisible;
        }
    }
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;

export const selectIsVisible = (state: RootState): boolean => state.modal.isVisible;