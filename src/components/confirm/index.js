import React, {useContext} from 'react';
import { confirmContext } from '../App';
import { jpYear } from '../basicinfo/Definition';
import { PageNationBtn } from './PageNationBtn';

export function ConfirmHeader(){
    return(
        <> 
            <span className="tag is-primary">STEP4</span>
            <h1>
                <i className="fas fa-address-card"></i>
            ご入力内容をご確認ください
            </h1>
        </>
    );
};

export function Confirm(){
    const [ basicinfo, survey, consultation] = useContext(confirmContext);
    const jy = jpYear(basicinfo.year)
    return (
        <>
            <div className = 'content'>
                <h4>基本情報</h4>
                <p>-性別-</p>
                <p>{basicinfo.gender}</p>
                <p>-生年月日-</p>
                <p>{basicinfo.year + '年'+'(' + jy + ')'+ ' ' + basicinfo.month + '月'+ basicinfo.month + '日'}</p>
                <h4>アンケート回答内容</h4>
                <p>現在生命保険に加入されていますか？</p>
                <p>A. {survey.insured}</p>
                <p>現在入院中ですか?</p>
                <p>または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？</p>
                <p>A. {survey.hospital}</p>
                <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
                <p>A. {survey.medical}</p>
                <h4>ご相談内容</h4>
                <p>{consultation}</p>
            </div>
        </>
    );
};

export { PageNationBtn as ConfirmPageNation}
