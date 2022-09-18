export const increment = (number) => {
    return {
        type: 'INC'
        
    }
}

export const decrement = () => {
    return {
        type: 'DEC'
    }
}

export const payLoad = (number) => {
    return {
        type: 'PAYLOAD',
        payload: number
    }
}

