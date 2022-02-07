import React from 'react';
import ReactDom from 'react-dom';
import { 
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';

export function InputServeyHeader(){
    return(
        <h1>
            アンケート
        </h1>
    );
};

export function NotFound(){
    return(
        <>
            <p>現在生命保険に加入されていますか？</p>
            <form action="">
            <label for="">はい
                <input type="radio" name="" id="" />
            </label>
            <label for="">いいえ
                <input type="radio" name="" id="" />
            </label>
            </form>

            <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？</p>
            <form action="">
            <label for="">はい
                <input type="radio" name="" id="" />
            </label>
            <label for="">いいえ
                <input type="radio" name="" id="" />
            </label>
            </form>

            <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
            <form action="">
            <label for="">はい
                <input type="radio" name="" id="" />
            </label>
            <label for="">いいえ
                <input type="radio" name="" id="" />
            </label>
            </form>
        </>
    );
};

