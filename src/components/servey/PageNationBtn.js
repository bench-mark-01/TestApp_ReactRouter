import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { surveyContext } from '../App';


export function PageNationBtn(){
    const [survey, serveyContext] = useContext(surveyContext)

    const navigate = useNavigate();
    
    const handleClick = (e) =>{
        if(e.target.name === 'backward'){
            navigate('/')
        }else if(e.target.name === 'forward'){
            
            if(survey.insured && survey.hospital && survey.medical)
            {
                navigate('/consultation')
            }else(
                window.alert('全ての質問にお答えください')
            )
        }
    }
    return(
        <>  
            <button onClick={handleClick} className="button is-link" name='backward'>
                前の質問へ戻る
            </button>

            <button onClick={handleClick} className="button is-link" name='forward'>
                次の質問へ進む
            </button>
        </>
    );
};
