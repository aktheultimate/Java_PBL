import React, { Component } from 'react'
import { Route , Switch } from "react-router-dom";
// import {Button, Form, FormGroup , Label, Input} from 'react-bootstrap'
// import {FacebookLoginButton } from 'react-social-login-buttons'
// import {GoogleLoginButton} from 'react-social-login-buttons'
import './containers/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './containers/AfterLog/Home'
import Register from './containers/Registration/Register'
import Login from './containers/Registration/Login'
import TrainBook from './containers/AfterLog/Page/TrainBook'
import ForgotPass from './containers/Registration/ForgotPass'
import Main from './containers/AfterLog/Page/Main'
import adminlogin from './containers/AfterLog/Admin/adminlogin'
import traindata from './containers/AfterLog/Admin/traindata.js'
import stationdata from './containers/AfterLog/Admin/stationdata'
import AfterBook from './containers/AfterLog/Page/AfterBook'
import ChangePassword from './containers/AfterLog/Admin/ChangePassword'
import History from './containers/AfterLog/Page/History'

export class App extends Component {
  render() {
    return (
   <div>
     <Switch>
       <Route exact path='/home' component={AfterBook}/>
       <Route exact path='/main' component={Main}/>
       <Route exact path='/' component={Home}/>
       <Route exact path='/register' component={Register}/>
       <Route exact path='/change-password' component={ChangePassword}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/trainbook' component={TrainBook}/>
       <Route exact path='/forgot-password' component={ForgotPass}/>
      
       <Route exact path='/admin-login' component={adminlogin}/>
       <Route exact path='/traindata' component={traindata}/>
       <Route exact path='/stationdata' component={stationdata}/>
       <Route exact path='/home' component={AfterBook}/>
       <Route exact path='/user/history' component={History}/>
       {/* <Route exact path='/user/history/cancelled' component={History}/>
       <Route exact path='/user/history/active' component={History}/> */}
     </Switch>
   </div>
    );
  }
}
export default App;
