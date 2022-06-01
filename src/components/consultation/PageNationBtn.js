import React from "react";
import { Link } from "react-router-dom";

export function PageNationBtn(){
    return(
        <>
            <Link to='/servey' className='button is-link'>
                前の質問に戻る
            </Link>
            <Link to='/confirm' className ="button is-link">
                回答内容を確認する
            </Link>
        </>
    );
};