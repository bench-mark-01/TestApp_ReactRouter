import React, { useContext } from 'react';
import { basicInfoContext } from '../App'

export function GenderSelect(){
    const [basicInfo, setBasicInfo] = useContext(basicInfoContext);
    const handleChange = e => {
        if(e){
            setBasicInfo({...basicInfo, gender: e.target.value})
        }
        else{
            console.log('UNDEFIND');
        }
    }
    return (
        <>
            <div className='content'>
                <p>
                    -性別-
                </p>
                <label>
                <input
                    type='radio'
                    value='男性'
                    onChange={handleChange}
                    checked={basicInfo.gender === '男性'}
                />
                    男性
                </label>
                <label>
                <input
                    type='radio'
                    value='女性'
                    onChange={handleChange}
                    checked={basicInfo.gender === '女性'}
                />
                女性
                </label>
            </div>
        </>
    );
};
