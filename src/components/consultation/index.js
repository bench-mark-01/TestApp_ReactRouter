import React from 'react';
import { InputConsultation } from './InputConsultation';
import { PageNationBtn } from './PageNationBtn';
export function ConsultationHeader(){
    return(
        <>
            <span className="tag is-primary">STEP3</span>
            <h1>
                <i className="fas fa-file-alt"></i>
                ご相談内容をご記入ください
            </h1>
        </>
    );
};
export function Consultation(){
    return(
        <>
            <InputConsultation/>
        </>
    );
};
export { PageNationBtn as ConsultationPageNation }