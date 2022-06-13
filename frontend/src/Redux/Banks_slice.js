import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Banks: [],
    isLoading: false,
    error: "",
}

export const BanksSlice = createSlice({
    name: 'Banks',
    initialState,
    reducers: {
        fatchSuccess: (state, action) => {
            state.isLoading = false;
            state.Banks = action.payload;
            state.error = "";
        },
    },
})

export const { fatchSuccess } = BanksSlice.actions

export default BanksSlice.reducer