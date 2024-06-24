import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    isExpanded: boolean;
}

const initialState: MenuState = {
    isExpanded: true,
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isExpanded = !state.isExpanded;
        },
    },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
