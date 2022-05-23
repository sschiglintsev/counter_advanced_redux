import React, {FC} from 'react';
type PropsType = {
    title: string
    callBack:() => void
    disBut?:boolean
}

export const FullButton:React.FC<PropsType> = ({title,callBack,disBut, ...restProps}) => {

    const onclickHandler = () => {
        callBack()
    }

    return (
        <>
            <button onClick={onclickHandler} disabled={disBut}>{title}</button>
        </>
    );
};
