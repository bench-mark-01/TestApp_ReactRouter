import React, { useState, useEffect } from 'react';

export function InputBirthDate(){
    const today = new Date();
    const thisYear = today.getFullYear();
    const oldYear = thisYear - 80;

    const [birthYear, setBirthYear] = useState([]);
    const [birthMonth, setBirthMonth] = useState([]);
    const [birthDate, setBirthDate] = useState([]);

    const [userSelectYear, setUserSelectYear] = useState(oldYear);
    const [userSelectMonth, setUserSelectMonth] = useState(1);
    const [userSelectDate, setUserSelectDate] = useState(1);

    const handleChange = e => {
        if(e){
            if(e.target.name === 'year'){
                let year = Number(e.target.value);
                setUserSelectYear(year);
            }
            if(e.target.name === 'month'){
                let month = Number(e.target.value);
                setUserSelectMonth(month);
            }
            if(e.target.name === 'date'){
                let date = Number(e.target.value);
                setUserSelectDate(date);
            }
        }
        else{
            console.error('undefind');
        }
    };
    useEffect(() =>{
        const defaultYears = [];
        const defaultMonths = [];
        const defaultDays = [];
        for(let i = oldYear; i<= thisYear; i++){
            defaultYears.push(i);
        }
        setBirthYear(defaultYears);
        
        for(let i = 1; i<= 12; i++){
            defaultMonths.push(i);
        }
        setBirthMonth(defaultMonths);
        
        for(let i = 1; i<= 31; i++){
            defaultDays.push(i);
        }
        setBirthDate(defaultDays);
    },[])

    useEffect(() =>{
        const lastDay = new Date(userSelectYear, userSelectMonth, 0).getDate();
        const changeDays = [];
        for(let i = 1; i <= lastDay; i++){
            changeDays.push(i);
        }
        setBirthDate(changeDays);
    },[userSelectMonth, userSelectYear]);

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
                            {birthYear.map((year) =>{
                                const selectyear = new Date(year,0,1);
                                const options = {year: 'numeric'};
                                const jp = selectyear.toLocaleDateString('ja-jp-u-ca-japanese', options);
                                return(
                                    <option key={'Year:' + year} value={year}>
                                        {year + '(' + jp + ')'}
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
                            {birthMonth.map((month) =>{
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
                            {birthDate.map((date) =>{
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