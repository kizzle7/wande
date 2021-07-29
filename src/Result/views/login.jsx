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
/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
  FormText,
} from "reactstrap";
import logo from "../assets/img/g5453.png";
import { Redirect } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import axios from "axios";

class Login extends React.Component {
  state = {
    load: false,
    status: false,
    email: "",
    password: "",
    token: false,
    catch: false,
    firstName: "",
    lastName: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onClick = (e) => {
    e.preventDefault();
    this.setState({
      visible: true,
    });
  };

  login = (e) => {
    e.preventDefault();
    console.log("clicked");
    const login = {
      email: this.state.email,
      password: this.state.password,
    };
    if (login.email || login.password) {
      this.setState({
        load: true,
      });
      axios
        .post(
          `http://localhost:5000/byteproof-service/api/v1/auth/login`,
          login
        )
        .then((res) => {
          console.log(res.data.result.usertoken);
          sessionStorage.setItem("token", res.data.result.accessToken);
          if (sessionStorage.getItem("token")) {
            this.props.history.push({
              pathname: "/admin/dashboard",
              state: {
                firstName: res.result.user.firstName,
                LastName: res.result.user.lastName,
              },
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            catch: true,
            load: !this.state.load,
          });
          setTimeout(() => {
            this.setState({
              catch: false,
            });
          }, 800);
        });
    } else {
      this.setState({
        status: true,
      });
      setTimeout(() => {
        this.setState({
          status: false,
        });
      }, 1000);
    }
  };

  render() {
    if (sessionStorage.getItem("token")) {
      return <Redirect to="admin/dashboard" />;
    }
    if (this.state.token) {
      return <Redirect to="admin/dashboard" />;
    }
    return (
      <>
        <div className="content login-bg">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="mt-5  d-flex justify-content-center align-items-center">
            <div class="card text-center" style={{ width: "20rem" }}>
              <div className="d-flex justify-content-center">
              <img
                src={logo}
                class="logo-normal w-50 text-center card-img-top"
                alt="..."
              />
              </div>
              <div class="card-body login-inner">
                {this.state.status && (
                  <p class="card-text text-danger text-center">
                    Fields Cannot be Empty
                  </p>
                )}
                {this.state.catch && (
                  <p class="card-text text-danger text-center ">
                    Invalid Login
                  </p>
                )}
                <Form className="col-md-12 pt-1">
                  <FormGroup>
                    <Label for="exampleEmail" className="text-left text-info">
                      Email
                    </Label>
                    {!this.state.status ? (
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        onChange={this.onChange}
                      />
                    ) : (
                      <Input
                        type="email"
                        className="error"
                        name="email"
                        id="exampleEmail"
                        onChange={this.onChange}
                      />
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label
                      for="examplePassword"
                      className="text-left text-info"
                    >
                      Password
                    </Label>
                    {!this.state.status ? (
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        onChange={this.onChange}
                      />
                    ) : (
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        className="error"
                        onChange={this.onChange}
                      />
                    )}
                  </FormGroup>
                  <small className="text-black text-center font-weight-bold">
                    Get Admin to grant you a credentials if you dont have a
                    valid credentials
                  </small>
                  {this.state.load ? (
                    <button className="btn btn-default btn-block" type="button">
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Logging In...
                    </button>
                  ) : (
                    <Button
                      onClick={this.onClick}
                      onClick={this.login}
                      color="info btn-block"
                    >
                      Login
                    </Button>
                  )}
                </Form>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
}

export default Login;
