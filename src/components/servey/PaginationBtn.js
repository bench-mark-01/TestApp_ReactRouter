import React from 'react';
import { Link } from 'react-router-dom';

export function PaginationBtn(){
    return(
        <>
            <Link to='/' className ='button is-link'>
                前の質問へ進む
            </Link>
            <Link to='/consultation' className ='button is-link'>
                次の質問へ進む
            </Link>
        </>
    );
};