import React from 'react';
import { InputServey } from './InputServey';
import { PaginationBtn } from './PaginationBtn';

export function ServeyHeader(){
    return(
        <>
            <span class="tag is-primary">STEP2</span>
            <h1>
                <i class="fas fa-chalkboard-teacher"></i>
                ご相談内容をご記入ください
            </h1>
        </>
    );
};

export function Servey(){
    return(
        <>
            <InputServey/>
        </>
    );
};

export { PaginationBtn as ServeyPagination };