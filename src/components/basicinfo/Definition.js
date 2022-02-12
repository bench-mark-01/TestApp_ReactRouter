import React from 'react';

function jpYear(year){
    const targetYear = new Date(year, 0, 1);
    const options = {year: 'numeric'};
    const jp = targetYear.toLocaleDateString('ja-jp-u-ca-japanese', options);  
    return jp;
}

export function BirthYear(){
    const today = new Date();
    const thisYear = today.getFullYear();
    const birthYears = [];
    for(let i = thisYear - 80; i<= thisYear; i++){
        const jp = jpYear(i);
        const yearData = {
            num: i,
            jp: '('+ jp + ')'
        }
        birthYears.push(yearData);
    }
    return(
        birthYears.map(num =>{
            return(
                <option key={'Year:' + num.num} value={num.num}>
                    {num.num + num.jp }
                </option>
            )
        })
    )
}

export function BirthMonth(){
    const birthMonths = [];
    for(let i = 1; i<= 12; i++){
        birthMonths.push(i);
    }
    return(
        birthMonths.map(month =>{
            return(
                <option key={'Month:' + month} value={month}>
                    {month}
                </option>
            )
        })
    )
}

export function BirthDate(props){
    const lastDay = new Date(props.selectYear, props.selectMonth, 0).getDate();
    let birthDate = [];
    for(let i = 1; i <= lastDay; i++){
        birthDate.push(i);
    }
    return(
        birthDate.map(date =>{
            return(
                <option key={'Date:' + date} value={date}>
                    {date}
                </option>
            )
        })
    )
}


