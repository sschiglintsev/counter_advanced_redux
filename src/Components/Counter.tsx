import React from 'react';
import c from "../App.module.css";
import {FullButton} from "./FullButton";
import {useSelector} from "react-redux";
import {rootReducerType} from "../redux/store";

type propsType = {
    changeWindow: () => void
    addCounter: () => void
    resetCounter: ()=>void
}

export const Counter: React.FC<propsType> = ({changeWindow,addCounter,resetCounter, ...restProps}) => {
    const counter = useSelector<rootReducerType, string>(state => state.counterValue.counter)
    const maxValue = useSelector<rootReducerType, string>(state => state.counterValue.maxValue)

    const changeWindowHandler = () => {
        changeWindow()
    }
    const addCounterHandler = () => {
        addCounter()
    }

    const setMinHandler = () => {
        resetCounter()
    }


    return (
        <div className={c.Window}>
            <h3>Counter</h3>
            <div className={c.Window_min_max}>
                <h1 style={counter==maxValue ? {color:"red"}:{color:"white"}}>{counter}</h1>
            </div>
            <div className={c.Window_min_max}>
                <FullButton title={'INC'} callBack={addCounterHandler} disBut={counter==maxValue? true: false}/>
                <FullButton title={'RESET'} callBack={setMinHandler}/>
                <FullButton title={'SET'} callBack={changeWindowHandler}/>
            </div>
        </div>
    );
};
