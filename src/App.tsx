import React, { useState} from 'react';
import c from './App.module.css'
import {Settings} from "./Components/Settings";
import {Counter} from "./Components/Counter";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./redux/store";
import {
    addCounterAC,
    resetCounterAC,
    setMaxValueAC,
    setMinValueAC
} from "./redux/reducer-counter";

function App() {
    const dispatch = useDispatch()

    const addCounter = () => {
        dispatch(addCounterAC())  //
    }

    const [control, setControl] = useState(false)

    const changeWindow = () => {
        setControl(!control)
        dispatch(resetCounterAC())
    }

    const setValueMax = (e: string) => {
        dispatch(setMaxValueAC(e))
    }

    const setValueMin = (e: string) => {
        dispatch(setMinValueAC(e))
    }

    const resetCounter = () => {
        dispatch(resetCounterAC())
    }

    return (
        <div className={c.App}>
            <div className={c.header}>
                COUNTER
            </div>
            {
                control ?
                    <Settings changeWindow={changeWindow}
                              setValueMax={setValueMax}
                              setValueMin={setValueMin}
                              />
                    :
                    <Counter changeWindow={changeWindow}
                             addCounter={addCounter}
                             resetCounter={resetCounter}
                    />
            }
        </div>
    )
}

export default App;
