import { createSlice } from "@reduxjs/toolkit";

interface RandomNumbersState {
    numbers: number[];
}

const initialState: RandomNumbersState = {
    numbers: [],
};

const randomNumbersSlice = createSlice({
    name: 'randomNumbers',
    initialState,
    reducers: {
        addRandomNumber: (state) => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            state.numbers.push(randomNumber);
        }
    }
});

export const { addRandomNumber } = randomNumbersSlice.actions;

export default randomNumbersSlice.reducer;
