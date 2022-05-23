const ADD_COUNTER = "ADD-COUNTER"
const SET_COUNTER = "SET-COUNTER"
const SET_MIN_VALUE = "SET-MIN-VALUE"
const SET_MAX_VALUE = "SET-MAX-VALUE"
const RESET_COUNTER = "RESET-COUNTER"

export type counterType = {
    counter: string,
    minValue: string,
    maxValue: string
}

const initState: counterType = {
    counter: '0',
    minValue: '0',
    maxValue: '10'
}

export const reducerCounter = (state: counterType = initState, action: actionCounterType): counterType => {
    switch (action.type) {
        case "ADD-COUNTER": {
            if (JSON.parse(state.counter) + 1 > state.maxValue) {
                return state
            } else {
                return {...state, counter: JSON.parse(state.counter) + 1}
            }
        }
        case "SET-COUNTER": {
            return {...state, counter: action.payload.startValue}
        }
        case "SET-MIN-VALUE": {
            return {...state, minValue: action.payload.minValue}
        }
        case "SET-MAX-VALUE": {
            return {...state, maxValue: action.payload.maxValue}
        }
        case "RESET-COUNTER": {
            return {...state, counter:state.minValue}
        }
        default:
            return state
    }
}


export type actionCounterType = addCounterACType
    | setCounterACType
    | setMinValueACType
    | setMaxValueACType
    | resetCounterACType

export type addCounterACType = ReturnType<typeof addCounterAC>

export const addCounterAC = () => {
    return {
        type: ADD_COUNTER
    } as const
}

export type setCounterACType = ReturnType<typeof setCounterAC>

export const setCounterAC = (startValue: string) => {
    return {
        type: SET_COUNTER,
        payload: {
            startValue
        }
    } as const
}

export type setMinValueACType = ReturnType<typeof setMinValueAC>

export const setMinValueAC = (minValue: string) => {
    return {
        type: SET_MIN_VALUE,
        payload: {
            minValue
        }
    } as const
}

export type setMaxValueACType = ReturnType<typeof setMaxValueAC>

export const setMaxValueAC = (maxValue: string) => {
    return {
        type: SET_MAX_VALUE,
        payload: {
            maxValue
        }
    } as const
}

export type resetCounterACType = ReturnType<typeof resetCounterAC>

export const resetCounterAC = () => {
    return {
        type: RESET_COUNTER,
    } as const
}
