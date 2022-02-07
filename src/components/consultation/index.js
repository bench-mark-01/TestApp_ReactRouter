import React from 'react';
import { InputConsultation } from './InputConsultation';
import { PaginationBtn } from './PaginationBtn';

export function ConsultationHeader(){
    return(
        <>
            <span class="tag is-primary">STEP3</span>
            <h1>
                <i class="fas fa-file-alt"></i>
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

export { PaginationBtn as ConsultationPagitation }