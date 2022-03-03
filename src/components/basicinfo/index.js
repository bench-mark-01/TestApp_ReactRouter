import React from 'react';
import { GenderSelect } from './GenderSelect';
import { InputBirthDate } from './InputBirthDate';
import { PaginationBtn } from './PaginationBtn';

export function BasicInfoHeader(){
    return(
        <> 
            <span className="tag is-primary">STEP1</span>
            <h1>
                <i className="fas fa-address-card"></i>
            お客様の情報を入力して下さい
            </h1>
        </>
    );
};

export function BasicInfo(){
    return (
        <>
            <GenderSelect/>
            <InputBirthDate/>
        </>
    );
};

export { PaginationBtn as BasicInfoPagination } 
