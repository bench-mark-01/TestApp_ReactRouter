import React, { useContext } from 'react';
import { surveyContext } from '../App'

export function InputServey(){
    const [survey, setSurvey] = useContext(surveyContext)

    const handleChange = e => {
        if(e){
            switch(e.target.name){
                case 'insured':
                    if(e.target.value === 'no'){
                        setSurvey({...survey, insured: 'いいえ'});
                    }
                    if(e.target.value === 'yes'){
                        setSurvey({...survey, insured: 'はい'});
                    }
                    break;

                case 'hospital':
                    if(e.target.value === 'no'){
                        setSurvey({...survey, hospital: 'いいえ'});
                    }
                    if(e.target.value === 'yes'){
                        setSurvey({...survey, hospital: 'はい'});
                    }
                    break;

                case 'medical':
                    if(e.target.value === 'no'){
                        setSurvey({...survey, medical: 'いいえ'});
                    }
                    if(e.target.value === 'yes'){
                    setSurvey({...survey, medical: 'はい'});
                    }
                    break;
            }
        }
    }
    return(
        <>
            <div className='content'>
                <p>現在生命保険に加入されていますか？</p>
                <form>
                <label>はい
                    <input 
                        value='yes'
                        onChange={handleChange}
                        type='radio' 
                        name='insured'
                        checked={survey.insured === 'はい'}    
                        />
                </label>
                <label>いいえ
                    <input 
                        value='no'
                        onChange={handleChange}
                        type='radio' 
                        name='insured'
                        checked={survey.insured === 'いいえ'}    
                    />
                </label>
                </form>
            </div>
            <div id='fade-in' className={ survey.insured ? 'fade-in content':'none' } >
                <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？</p>
                <form>
                <label>はい
                    <input 
                        value='yes'
                        onChange={handleChange}
                        type='radio' 
                        name='hospital'
                        checked={survey.hospital === 'はい'}/>
                </label>
                <label>いいえ
                    <input 
                        value='no'
                        onChange={handleChange}
                        type='radio' 
                        name='hospital'
                        checked={survey.hospital === 'いいえ'}/>
                </label>
                </form>
            </div>
            <div id='fade-in' className={ survey.hospital ? 'fade-in content':'none' } >
                <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
                <form>
                <label>はい
                    <input 
                        value='yes'
                        onChange={handleChange}
                        type='radio'    
                        name='medical'
                        checked={survey.medical === 'はい'}/>
                </label>
                <label>いいえ
                    <input 
                        value='no'
                        onChange={handleChange}
                        type='radio' 
                        name='medical'
                        checked={survey.medical === 'いいえ'}/>
                </label>
                </form>
            </div>

        </>
    );
};



