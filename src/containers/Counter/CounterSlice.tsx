import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: string;
}

const initialState: CounterState = {
    value: '',
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addNum: (state, action: PayloadAction<string>) => {
            if(state.value.length < 4){
                state.value += action.payload;
            }
        },
        clearArea: (state) => {
            state.value = state.value.slice(0, -1);
        },
    },
});

export const counterReducer = counterSlice.reducer;
export const  {addNum, clearArea}  = counterSlice.actions;