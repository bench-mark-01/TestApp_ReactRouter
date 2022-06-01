import React from "react";
import { useNavigate } from "react-router-dom";

export function PageNationBtn(){
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/servey')
    }
    return(

            <button onClick={handleClick} className="button is-link">
                次の質問へ進む
            </button>
    );
};