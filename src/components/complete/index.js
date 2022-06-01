import React from "react"
import { useNavigate } from "react-router-dom";

export function CompleteHeader(){
    return(
        <> 
            <span className="tag is-primary">Complete</span>
            <h1>
                <i className="fas fa-address-card"></i>
            ご回答頂きましてありがとうございました。
            </h1>
        </>
    );
};
export function Complete(){
    return(
        <>
        <h1>担当者よりご連絡を差し上げますので</h1>
        <h1>今しばらくお待ちください。</h1>
        </>
    )
}

export function PageNationBtn(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }
    return(
        <>  
            <button onClick={handleClick} className="button is-link" name='backward'>
                もう一度アンケートに答える
            </button>
        </>
    );
};