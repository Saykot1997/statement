import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Transactions: [],
    isLoading: false,
    error: "",
}

export const TransactionSlice = createSlice({
    name: 'Transactions',
    initialState,
    reducers: {
        transactionsFatchSuccess: (state, action) => {
            state.isLoading = false;
            state.Transactions = action.payload;
            state.error = "";
        },

    },
})

export const { transactionsFatchSuccess } = TransactionSlice.actions

export default TransactionSlice.reducer