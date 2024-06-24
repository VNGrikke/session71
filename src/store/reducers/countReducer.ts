import { createSlice } from "@reduxjs/toolkit"

const countState:number = 0

const countReducer = createSlice({
    name: "countReducer",
    initialState: countState,
    reducers: {
        increase: (state: number) => state += 1,
        decrease: (state: number) => state -= 1,
        reset: (state: number) => state = 0,
    }
})

export const { increase, decrease, reset} = countReducer.actions

export default countReducer.reducer