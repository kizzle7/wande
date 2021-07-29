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
import Dashboard from "./views/Dashboard.jsx";



import Profile from './views/Audit/profile'
import MakeRequest from './views/Audit/make_request'
import SendResult from './views/Audit/send_result'



var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/portal"
  },

  {
    path: "/make_request",
    name: "Make Request",
    component: MakeRequest,
    layout: "/portal"
  },
 
  {
    path: "/send_result",
    name: "Send Result",
    component: SendResult,
    layout: "/portal"
  },
  {
    path: "/profile",
    name: "My Profile",
    component: Profile,
    layout: "/portal"
  },

  
];
export default routes;
