import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) { 
            state.counter++
        },
        decrement(state, action) { 
            state.counter --
        },
        addBy(state, action) { 
            state.counter += action.payload
        },
    }
})

export const actions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;














// Before Redux Toolkit

// import { legacy_createStore as createStore} from 'redux'

// const reducerFunction= (state={ counter : 0 }, action) => {

// // Synchronous Function
// // We should not mutate the original state

// if (action.type === 'INC'){
//     return { counter:state.counter + 1 };
// }

// if (action.type === 'DEC'){
//     return { counter:state.counter - 1 };
// }

// if (action.type === 'ADD'){
//     return { counter:state.counter + action.payload };
// }


//     return state
// }

// const store = createStore(reducerFunction)

// export default store;