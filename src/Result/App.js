/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/paper-dashboard.min.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Login from './views/login'
import './App.css'
import 'antd/dist/antd.css'; 
import AdminLayout from "./layouts/Admin.jsx";
const hist = createBrowserHistory();
class App extends React.Component{
    render(){
        return(
          <Provider store = {store}>
    <Router history={hist}>
    <Switch>
      <Route path="/portal" render={props => <AdminLayout {...props} />} />
      <Route path="/" exact component ={Login} />
      <Redirect to="/portal/dashboard" />
    </Switch>
  </Router>
  </Provider>

        )
    }

}
export default App;