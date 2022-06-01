import React from "react";
import { Link } from "react-router-dom";

export function PageNationBtn(){
    return(
        <>
            <Link to='/servey' className='button is-link'>
                前の質問に戻る
            </Link>
            <Link to='/complete' className ="button is-link">
                この内容で送信する
            </Link>
        </>
    );
};