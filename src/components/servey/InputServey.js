import React, { useState } from 'react';

export function InputServey(){

    const [insured, setInsured] = useState();
    const [hospital, setHospital] = useState();
    const [medical, setMedical] = useState();

    const handleChange = e => {
        if(e){
            switch(e.target.name){
                case 'insured':
                    if(e.target.value === 'no'){
                        setInsured('no');
                    }
                    if(e.target.value === 'yes'){
                        setInsured('yes');
                    }
                    break;
                case 'hospital':
                    if(e.target.value === 'no'){
                        setHospital('no');
                    }
                    if(e.target.value === 'yes'){
                        setHospital('yes');
                    }
                    break;
                case 'medical':
                    if(e.target.value === 'no'){
                        setMedical('no');
                    }
                    if(e.target.value === 'yes'){
                        setMedical('yes');
                    }
                    break;
            }
        }
    }

    return(
        <>
            <div className='field'>
                <p>現在生命保険に加入されていますか？</p>
                <form>
                <label>はい
                    <input 
                        value='yes'
                        onChange={handleChange}
                        type='radio' 
                        name='insured'
                        checked={insured === 'yes'}    
                        />
                </label>
                <label>いいえ
                    <input 
                        value='no'
                        onChange={handleChange}
                        type='radio' 
                        name='insured'
                        checked={insured === 'no'}    
                    />
                </label>
                </form>
            </div>
            <div id='fade-in' className={ insured ? 'fade-in field':'none' }>
                <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？</p>
                <form>
                <label>はい
                    <input 
                        value='yes'
                        onChange={handleChange}
                        type='radio' 
                        name='hospital'
                        checked={hospital === 'yes'}/>
                </label>
                <label>いいえ
                    <input 
                        value='no'
                        onChange={handleChange}
                        type='radio' 
                        name='hospital'
                        checked={hospital === 'no'}/>
                </label>
                </form>
            </div>
            <div id='fade-in' className={ hospital ? 'fade-in field':'none' }>
                <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
                <form>
                <label>はい
                    <input 
                        value='yes'
                        onChange={handleChange}
                        type='radio'    
                        name='medical'
                        checked={medical === 'yes'}/>
                </label>
                <label>いいえ
                    <input 
                        value='no'
                        onChange={handleChange}
                        type='radio' 
                        name='medical'
                        checked={medical === 'no'}/>
                </label>
                </form>
            </div>

        </>
    );
};



