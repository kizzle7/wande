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
import { NavLink } from "react-router-dom";
import { Nav, Collapse, Button, CardBody, Card } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import logo from "../../assets/img/g5453.png";
import logo2 from "../../assets/img/g5453.png";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isOpen2: false,
      collapse: false,
      pcBar: true,
      color: false,
      hovColor: false,
      hovColor2: false,
      hovColor3: false,
      hovColor4: false,
      hovColor5: false,
    };
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
    this.toggle.bind(this);
    this.toggle2.bind(this);
  }

  hover = (e) => {
    e.preventDefault();
    this.setState({
      hovColor: true,
    });
  };
  hover2 = (e) => {
    e.preventDefault();
    this.setState({
      hovColor2: true,
    });
  };
  hover3 = (e) => {
    e.preventDefault();
    this.setState({
      hovColor3: true,
    });
  };
  hover4 = (e) => {
    e.preventDefault();
    this.setState({
      hovColor4: true,
    });
  };
  hover5 = (e) => {
    e.preventDefault();
    this.setState({
      hovColor5: true,
    });
  };

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  out = () => {
    this.setState({
      hovColor: false,
    });
  };
  out2 = () => {
    this.setState({
      hovColor2: false,
    });
  };
  out3 = () => {
    this.setState({
      hovColor3: false,
    });
  };
  out4 = () => {
    this.setState({
      hovColor4: false,
    });
  };

  out5 = () => {
    this.setState({
      hovColor5: false,
    });
  };

  toggle3 = (e) => {
    e.preventDefault();
    this.setState({
      isOpen2: !this.state.isOpen2,
    });
  };

  slide = () => {
    // document.documentElement.classList.toggle("main-panel");
    // this.sidebarToggle.current.classList.toggle("toggled");
    let { pcBar } = this.state;
    var all = document.getElementsByClassName("main-panel");
    var all1 = document.getElementsByClassName("sidebar");
    var dash = document.getElementsByClassName("vert");
    this.setState({ pcBar: !pcBar }, () => {
      if (!pcBar) {
        for (var i = 0; i < all.length; i++) {
          all[i].style.width = `calc(100% - 45px)`;
        }
        for (var i = 0; i < all1.length; i++) {
          all1[i].style.width = `45px`;
          this.setState({
            color: true,
          });
        }
        for (var i = 0; i < dash.length; i++) {
          dash[i].style.marginLeft = "40px";
        }
      } else {
        for (var i = 0; i < all.length; i++) {
          all[i].style.width = `calc(100% - 230px)`;
          all[i].style.position = `relative`;
        }
        for (var i = 0; i < all1.length; i++) {
          all1[i].style.width = "230px";

          this.setState({
            color: false,
          });
        }
        for (var i = 0; i < dash.length; i++) {
          dash[i].style.marginLeft = "240px";
        }
      }
    });
  };

  logout = (e) => {
      e.preventDefault();
      sessionStorage.setItem('token', '')
      this.props.history.push("/");
    };  

  toggle2 = (e) => {
    e.preventDefault();
    this.setState({
      isOpen2: !this.state.isOpen2,
    });
  };

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    this.setState({
      color: true,
    });
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <>
        <div
          className="sidebar bg body"
          data-color={this.props.bgColor}
          data-active-color="{this.props.activeColor}"
          onMouseLeave={this.slide}
          onMouseEnter={this.slide}
        >
          {this.state.color ? (
            <div className="sidebarLogo mb-1 mt-0">
              <a href="/admin/dashboard" className="simple-text logo-mini">
                <div>
                  <img src={logo} alt="react-logo" className="sidebarLogo" />
                </div>
              </a>
            </div>
          ) : (
            <div className="simple-text py-2 image-underbg ">
              <a href="/admin/dashboard" className="simple-text logo-mini">
                <div>
                  <img
                    src={logo2}
                    alt="react-logo"
                    className="w-99 pt-2 text-center"
                    style={
                      this.state.color
                        ? { maxHeight: "100px" }
                        : { maxHeight: "50px", marginLeft: "5px" }
                    }
                  />
                </div>
              </a>
            </div>
          )}

          <div className="sidebar-wrapper pt-3" ref={this.sidebar}>
            <Nav className="hover pl-0 mt-3">
           
              <li className="pt-0">
                <NavLink
                  to="/portal/dashboard"
                  className="nav-link ml-0  text-white"
                  activeClassName="choosen"
                >
                  <i className="fa fa-bank" >
                    <span className="pl-3">Dashboard</span>
                  </i>
                </NavLink>
              </li><br />
              <li className="pt-0">
                <NavLink
                  to="/portal/make_request"
                  className="nav-link ml-0  text-white"
                  activeClassName="choosen"
                >
                  <i className="fa fa-file-o" >
                    <span className="pl-3">Get Result</span>
                  </i>
                </NavLink>
              </li><br />
            
              <li className="pt-0">
                <NavLink
                  to="/portal/profile"
                  className="nav-link ml-0  text-white"
                  activeClassName="choosen"
                >
                  <i className="fa fa-user" >
                    <span className="pl-3">My Profile</span>
                  </i>
                </NavLink>
              </li><br />



              <li className="pt-0">
                <NavLink
                  to="/login"
                  className="nav-link ml-0  text-white"
                  activeClassName="choosen"
                >
                  <i className="fa fa-sign-out" onClick={this.logout}>
                    <span className="pl-3">Log out</span>
                  </i>
                </NavLink>
              </li>
            </Nav>
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
