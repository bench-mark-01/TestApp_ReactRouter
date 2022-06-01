import React, {createContext, useState} from 'react';
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { BasicInfoHeader, BasicInfo, BasicInfoPageNation } from './basicinfo';
import { ServeyHeader, Servey, ServeyPageNation } from './servey';
import { ConsultationHeader, Consultation, ConsultationPageNation } from './consultation';
import { NotFound } from './NotFound';
import { ConfirmHeader, Confirm, ConfirmPageNation } from './confirm'
import { CompleteHeader, Complete, PageNationBtn } from './complete'

export const basicInfoContext = createContext();
export const surveyContext = createContext();
export const consultationContext = createContext();
export const confirmContext = createContext();

export function Layout(){

    const [basicinfo, setBasicInfo] = useState({
        gender: '男性',
        year: new Date().getFullYear(),
        month: 1,
        date: 1 
    });

    const [servey, setServey] = useState({
        insured: '',
        hospital: '',
        medical: ''
    });

    const [ consultation, setConsultation] = useState('無回答');

    return(
        <>
            <BrowserRouter>
                <section className="columns is-full is-centered is-vcentered">
                    <div className="column is-half my-6">
                        <article className="message">
                            <div className="message-header is-flex is-justify-content-center">
                                <Routes>
                                    <Route path='/' element={<BasicInfoHeader/>}/>
                                    <Route path='/servey' element={<ServeyHeader/>}/>
                                    <Route path='/consultation' element={<ConsultationHeader/>}/>
                                    <Route path='/confirm' element={<ConfirmHeader/>}/>
                                    <Route path='/complete' element={<CompleteHeader/>}/>
                                    <Route element={<NotFound/>}/>
                                </Routes>
                            </div>
                            <div className="message-body">
                                    <Routes>
                                        <Route path='/' element={
                                            <basicInfoContext.Provider value = {[basicinfo,setBasicInfo]}>
                                                <BasicInfo/>
                                            </basicInfoContext.Provider>
                                        }/>
                                        <Route path='/servey' element={
                                            <surveyContext.Provider value = {[servey, setServey]}>
                                                <Servey/>
                                            </surveyContext.Provider>
                                        }/> 
                                        <Route path='/consultation' element={
                                            <consultationContext.Provider value = {setConsultation}>
                                                <Consultation/>
                                            </consultationContext.Provider>
                                        }/>
                                        <Route path='/confirm' element = { 
                                            <confirmContext.Provider value = {[basicinfo, servey, consultation]}>
                                                <Confirm/>
                                            </confirmContext.Provider>
                                        }/>
                                        <Route path='/complete' element={<Complete/>}/>
                                    </Routes>
                            </div>
                        </article>
                        <div className="buttons is-centered">
                            <Routes>
                                <Route path='/' element={<BasicInfoPageNation/>}/>
                                <Route path='servey' element={
                                    <surveyContext.Provider value = {[servey, setServey]}>
                                        <ServeyPageNation/>
                                    </surveyContext.Provider>    
                                }/>
                                <Route path='consultation' element={<ConsultationPageNation/>}/>
                                <Route path='confirm' element={<ConfirmPageNation/>}/>
                                <Route path='/complete' element={<PageNationBtn/>}/>
                            </Routes> 
                        </div>
                    </div>
                </section>
            </BrowserRouter>
        </>
    );
}
