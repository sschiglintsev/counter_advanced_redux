import {combineReducers, createStore} from "redux";
import {reducerCounter} from "./reducer-counter";
import {loadState, saveState} from "../utility/localStorage";

const rootReducer = combineReducers({
    counterValue: reducerCounter
})


export const store = createStore(rootReducer, {
    counterValue: loadState()
})

// store.subscribe(() => {
//     saveState({
//         minValue: store.getState().counterValue.minValue,
//         maxValue: store.getState().counterValue.maxValue,
//         counter: store.getState().counterValue.counter,
//     })
// })

store.subscribe(() => {
    saveState(store.getState().counterValue)
});

export type rootReducerType = ReturnType<typeof rootReducer>

export type storeType = typeof store