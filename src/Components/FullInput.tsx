import React, {ChangeEvent} from 'react';

type propsType = {
    valueInput:string
    callBack: (e: string) => void
    disButSet?:boolean
}


export const FullInput: React.FC<propsType> = ({callBack,valueInput,disButSet,  ...restprops}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            callBack(e.currentTarget.value)
        }

    }


    return (
        <>
            <input value={valueInput} type={"number"} step={1} onChange={onChangeHandler} style={disButSet ? {background:"red"}:{background:"white"}}/>
        </>
    );
};
