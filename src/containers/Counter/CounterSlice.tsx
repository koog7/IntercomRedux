import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: string;
    message: string;
    color: string;
    pincode: string;
}

const initialState: CounterState = {
    value: '',
    message: '',
    color: '',
    pincode: '',
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addNum: (state, action: PayloadAction<string>) => {
            if(state.value.length < 4){
                state.value += '*'
                state.pincode += action.payload
            }
        },
        clearArea: (state) => {
            state.value = state.value.slice(0, -1);
            state.pincode = state.pincode.slice(0, -1);
            state.message = '';
            state.color = '';
        },
        enter: (state, action: PayloadAction<{ message: string, color: string }>) => {
            state.message = action.payload.message;
            state.color = action.payload.color;
        },
    },
});

export const counterReducer = counterSlice.reducer;
export const  {addNum, clearArea,enter}  = counterSlice.actions;