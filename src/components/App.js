import React from 'react';
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { BasicInfoHeader, BasicInfo, BasicInfoPagination } from './basicinfo';
import { ServeyHeader, Servey, ServeyPagination } from './servey';
import { ConsultationHeader, Consultation, ConsultationPagitation } from './consultation';
import { NotFound } from './NotFound';

export default function Layout(){
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
                                    <Route element={<NotFound/>}/>
                                </Routes>
                            </div>
                            <div className="message-body">
                                <Routes>
                                    <Route path='/' element={<BasicInfo/>}/>
                                    <Route path='/servey' element={<Servey/>}/>
                                    <Route path='/consultation' element={<Consultation/>}/>
                                </Routes>
                            </div>
                        </article>
                        <div className="buttons is-centered">
                            <Routes>
                                    <Route path='/' element={<BasicInfoPagination/>}/>
                                    <Route path='servey' element={<ServeyPagination/>}/>
                                    <Route path='consultation' element={<ConsultationPagitation/>}/>
                            </Routes> 
                        </div>
                    </div>
                </section>
            </BrowserRouter>
        </>
    );
}
