import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (state, action) => {
            // Modify the draft state directly
            state.push(...action.payload);
        }
    }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;
