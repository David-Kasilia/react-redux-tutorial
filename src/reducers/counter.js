const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INC':
        return state + 1
        case 'PAYLOAD':
        return state + action.payload
        case 'DEC':
            return state -1
            default : 
            return state;
    }
}

export default counterReducer;