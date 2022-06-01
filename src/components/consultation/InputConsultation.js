import React, { useContext } from 'react';
import { consultationContext } from '../App';

export function InputConsultation(){

    const setConsultation = useContext(consultationContext);

    const handleChange = e => {
        if(e.target.value){
            setConsultation(e.target.value);
        }
    }
    return(
        <>
            <div className='content'>
                <p>-ご相談内容-</p>
                <form action="">
                    <textarea className="textarea" onChange={handleChange} placeholder="10 lines of textarea" rows="10"></textarea>
                </form>
            </div>
        </>
    );
};
