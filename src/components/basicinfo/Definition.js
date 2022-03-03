function jpYear(year){
    const targetYear = new Date(year, 0, 1);
    const options = {year: 'numeric'};
    const jp = targetYear.toLocaleDateString('ja-jp-u-ca-japanese', options);  
    return jp;
}

export function birthYear(){
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
    return birthYears;
}

export function birthMonth(){
    const birthMonth = [];
    for(let i = 1; i<= 12; i++){
        birthMonth.push(i);
    }
    return birthMonth;
}

export function birthDate(year, month){
    console.log(year);
    console.log(month);
    const lastDay = new Date(year.num, month.num, 0).getDate();
    const birthDates = [];
    for(let i = 1; i <= lastDay; i++){
        birthDates.push(i);
    }
    return birthDates;
}


