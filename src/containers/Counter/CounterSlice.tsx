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
    },
});

export const counterReducer = counterSlice.reducer;
export const  {addNum}  = counterSlice.actions;