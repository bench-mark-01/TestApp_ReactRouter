import React from 'react';
import { InputServey } from './InputServey';
import { PageNationBtn } from './PageNationBtn';

export function ServeyHeader(){
    return(
        <>
            <span className="tag is-primary">STEP2</span>
            <h1>
                <i className="fas fa-chalkboard-teacher"></i>
                アンケートにお答えください
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
export { PageNationBtn as ServeyPageNation };