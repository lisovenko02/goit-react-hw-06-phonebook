import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        findContact(state, action) {
            return action.payload;
        }
    }
});

export const { findContact } = slice.actions;
export const filterReducer = slice.reducer;