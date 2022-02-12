import React, { useState } from 'react';

import {BirthYear, BirthMonth, BirthDate} from './Definition';

export function InputBirthDate(){
    const [selectYear, setSelectYear] = useState({type: 'year', num: new Date().getFullYear()});
    const [selectMonth, setSelectMonth] = useState({type: 'month', num: 1});
    const [selectDate, setSelectDate] = useState();

    const handleChange = e => {
        if(e){
            if(e.target.name === 'year'){
                const year = {
                    type: 'year',
                    num: Number(e.target.value)
                }
                setSelectYear(year);
            }
            if(e.target.name === 'month'){
                const month = {
                    type: 'month',
                    num: Number(e.target.value)
                }
                setSelectMonth(month);
            }
            if(e.target.name === 'date'){
                const date = {
                    type: 'date',
                    num: Number(e.target.value)
                }
                setSelectDate(date);
            }
        }
    };

    return(
        <>
            <div className='field'>
                <label>
                    -生年月日-
                </label>  
                <form className='is-flex is-align-items-center'>
                    <div className='select'>
                        <select
                            name = 'year'
                            onChange={handleChange}
                            >
                            <BirthYear />
                        </select>
                    </div>
                    <label>
                        年
                    </label>
                    <div className='select'>
                        <select
                            name = 'month'
                            onChange={handleChange}
                            >
                            <BirthMonth />
                        </select>
                    </div>
                    <label>
                        月
                    </label>
                    <div className='select'>
                        <select
                            name = 'date'
                            onChange={handleChange}
                            >
                            <BirthDate selectYear = {selectYear.num} selectMonth = {selectMonth.num} />
                        </select>
                    </div>
                    <label>
                        日
                    </label>
                </form>
            </div>
        </>
    )
}