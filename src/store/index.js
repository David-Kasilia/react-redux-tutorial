import { legacy_createStore as createStore} from 'redux'

const reducerFunction= (state={ counter : 0 }, action) => {

// Synchronous Function
// We should not mutate the original state

if (action.type === 'INC'){
    return { counter:state.counter + 1 };
}

if (action.type === 'DEC'){
    return { counter:state.counter - 1 };
}

if (action.type === 'ADD'){
    return { counter:state.counter + action.payload };
}


    return state
}

const store = createStore(reducerFunction)

export default store;