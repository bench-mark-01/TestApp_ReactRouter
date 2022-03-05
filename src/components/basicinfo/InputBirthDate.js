import React, { useEffect, useState } from 'react';
import {birthYear, birthMonth, birthDate} from './definition';

export function InputBirthDate(){
    const [selectYear, setSelectYear] = useState({type: 'year', num: new Date().getFullYear()});
    const [selectMonth, setSelectMonth] = useState({type: 'month', num: 1});
    const [selectDate, setSelectDate] = useState();

    const [birthYears, setBirthYears] = useState(birthYear());
    const [birthMonths, setBirthMonths] = useState(birthMonth());
    const [birthDates, setBirthDates ] = useState(birthDate(selectYear, selectMonth));

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

    useEffect(() => {
        const changeDays = birthDate(selectYear, selectMonth);
        setBirthDates(changeDays);
    },[selectYear, selectMonth])

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
                            defaultValue = {selectYear}
                            >
                            {birthYears.map(year =>{
                                return(
                                    <option key={'Year:' + year.num} value={year.num}>
                                        {year.num + year.jp }
                                    </option>
                                )
                            })}
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
                            {birthMonths.map(month =>{
                                return(
                                    <option key={'Month:' + month} value={month}>
                                        {month}
                                    </option>
                                )
                            })}
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
                            {birthDates.map(date => {
                                return(
                                    <option key={'Date:' + date} value={date}>
                                        {date}
                                    </option>
                                )
                            })}
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