import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../Main/Main';
import Download_cvForm from '../Download_cvForm/Download_cvForm';
import CvPdf from '../ViewPDF/Cv_Pdf';
import Login from '../Login/Login';
import ViewProject from '../ViewProject/ViewProject';

function Home() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} exact/>
                <Route exact Path='/download_cv' component={Download_cvForm}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path='/curriculum_vitae' component={CvPdf}/>
                <Route exact Path='/view_project' component={ViewProject}/>
                 
            </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default Home
