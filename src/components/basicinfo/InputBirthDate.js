import React, { useEffect, useState, useContext } from 'react';
import {birthYear, birthMonth, birthDate} from './Definition';
import { basicInfoContext } from '../App';

export function InputBirthDate(){
    const [ basicinfo, setBasicInfo ] = useContext(basicInfoContext);
    const by = birthYear();
    const bm = birthMonth();
    const [birthDates, setBirthDates ] = useState(birthDate(basicinfo.Year, basicinfo.month));

    const handleChange = e => {
        if(e){
            if(e.target.name === 'year'){
                setBasicInfo({...basicinfo, year: e.target.value })
            }
            if(e.target.name === 'month'){
                setBasicInfo({...basicinfo, month: e.target.value })
            }
            if(e.target.name === 'date'){
                setBasicInfo({...basicinfo, date: e.target.value })
            }
        }
    };
    useEffect(() => {
        const changeDays = birthDate(basicinfo.year, basicinfo.month);
        setBirthDates(changeDays);
    },[basicinfo])
    return(
        <>
            <div className='content'>
                <label>
                    -生年月日-
                </label>  
                <form className='is-flex is-align-items-center'>
                    <div className='select'>
                        <select
                            name = 'year'
                            onChange={handleChange}
                            defaultValue = {basicinfo.year}
                            >
                            {by.map(year =>{
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
                            {bm.map(month =>{
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