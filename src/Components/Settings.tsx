import React, {ChangeEvent} from 'react';
import c from "../App.module.css";
import {FullButton} from "./FullButton";
import {FullInput} from "./FullInput";
import {useSelector} from "react-redux";
import {rootReducerType} from "../redux/store";

type propsType = {
    changeWindow: () => void
    setValueMin: (e: string) => void
    setValueMax: (e: string) => void
}

export const Settings: React.FC<propsType> = ({
                                                  changeWindow,
                                                  setValueMin, setValueMax,
                                                  ...restProps
                                              }) => {

    const changeWindowHandler = () => {
        changeWindow()
    }
    const minValue = useSelector<rootReducerType, string>(state => state.counterValue.minValue)
    const maxValue = useSelector<rootReducerType, string>(state => state.counterValue.maxValue)

    return (
        <div className={c.Window}>
            <h3>Settings</h3>
            <div className={c.Window_min_max}>
                <FullInput callBack={setValueMax} valueInput={maxValue}
                           disButSet={minValue > maxValue ? true : false}/>
                max value
            </div>
            <div className={c.Window_min_max}>
                <FullInput callBack={setValueMin} valueInput={minValue}
                           disButSet={minValue > maxValue ? true : false}/>
                min value
            </div>
            <FullButton title={'SET'} callBack={changeWindowHandler} disBut={minValue > maxValue ? true : false}/>
            {minValue > maxValue
                ? <div className={c.err}>
                    Set right value
                </div>
                : ''}
        </div>
    );
};
