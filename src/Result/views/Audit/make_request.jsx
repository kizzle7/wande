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
// react plugin used to create charts
import { Line, Pie, Bar, Radar, Doughnut } from "react-chartjs-2";
// reactstrap components
import axios from "axios";
import { notification, Result, Spin } from "antd";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
} from "reactstrap";
// core components

class MakeReq extends React.Component {
  state = {
    modal: false,
    createModal: false,
    statusSend: false,
    semester: "",
    session: "",
    platform: "",
    phone: "",
    sendType: "",
    email: "",
    load: false,
    error: false,
  };

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal,
      email: "",
      phone: "",
    });
  };

  open = () => {
    this.setState({ modal: true });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toggle2 = (e) => {
    e.preventDefault();
    this.setState({
      createModal: !this.state.createModal,
    });
  };

  submit = (e) => {
    e.preventDefault();
    const data = {
      semester: this.state.semester,
      session: this.state.session,
      platform: this.state.platform,
      phone: this.state.phone,
      email: this.state.email,
    };
    console.log(data);
    if (data.semester && data.session && data.platform) {
      this.setState({ load: true });
      if (data.platform === "Phone") {
        axios
          .post(`http://localhost:4000/api/v1/sms`, data)
          .then((res) => {
            if (res.data.message) {
              this.setState({
                load: false,
                modal: false,
                statusSend: true,
                phone: "",
                email: "",
                semester: "",
                session: "",
                platform: "",
                sendType: "Phone Number",
              });
              this.openNotification("Phone Number");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (data.platform === "Email") {
        axios
          .post(`http://localhost:4000/api/v1/email`, data)
          .then((res) => {
            if (res.data.message) {
              console.log("sent");
              this.setState({
                load: false,
                modal: false,
                statusSend: true,
                phone: "",
                email: "",
                semester: "",
                session: "",
                platform: "",
                sendType: "Email Address",
              });
              this.openNotification("Email Address");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (data.platform === "Both") {
        axios
          .post(`http://localhost:4000/api/v1/sms`, data)
          .then((res) => {
            if (res.data.message) {
              console.log("sent");
              this.setState({
                load: false,
                modal: false,
                statusSend: true,
                phone: "",
                email: "",
                semester: "",
                session: "",
                platform: "",
                sendType: "Phone Number and Email Address",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
        axios
          .post(`http://localhost:4000/api/v1/email`, data)
          .then((res) => {
            if (res.data.message) {
              console.log("sent");
              this.openNotification("Email Address and Phone Number");
              this.setState({
                load: false,
                modal: false,
                statusSend: true,
                phone: "",
                email: "",
                semester: "",
                session: "",
                platform: "",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      this.setState({ error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 2200);
    }
  };
  openNotification = (text) => {};
  render() {
    return (
      <>
        <div className="mt-5 pt-4">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col md="12">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-info pt-1 pl-3">
                      Homepage / <span>Make Request</span>
                    </p>
                    <div className="d-flex justify-content-end">
                      <Button onClick={this.toggle} color="info" size="sm">
                        Request Result{" "}
                        <span className="fa fa-plus-circle"></span>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </CardBody>
          </Card>

          {this.state.statusSend && (
            <Result status="success" title="Your result has been sent!" />
          )}

          <div>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className="mt-5 pt-5"
            >
              <ModalHeader toggle={this.toggle}>Request Data Form</ModalHeader>
              <ModalBody>
                <Form>
                  {this.state.error && (
                    <h4 className="text-center text-danger">
                      All fields are required!
                    </h4>
                  )}
                  <FormGroup>
                    <Label for="exampleSelect">Session</Label>
                    <Input
                      type="select"
                      name="session"
                      id="exampleSelect"
                      onChange={this.onChange}
                    >
                      <option>Select Session</option>
                      <option>2020/2021</option>
                      <option>2019/2020</option>
                      <option>2018/2019</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Semester</Label>
                    <Input
                      type="select"
                      name="semester"
                      id="exampleSelect"
                      onChange={this.onChange}
                    >
                      <option>Select Semester</option>
                      <option>First Semester</option>
                      <option>Second Semester</option>
                    </Input>
                  </FormGroup>

                  <FormGroup tag="fieldset" className="d-flex justify-content">
                    <legend>Send To</legend>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="platform"
                          onChange={this.onChange}
                          value="Phone"
                        />{" "}
                        Phone SMS
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="platform"
                          onChange={this.onChange}
                          value="Email"
                        />{" "}
                        Email Address
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="platform"
                          onChange={this.onChange}
                          value="Both"
                        />{" "}
                        Both
                      </Label>
                    </FormGroup>
                  </FormGroup>

                  {this.state.platform === "Email" && (
                    <FormGroup>
                      <Label for="exampleSelect" className="font-weight-bold">
                        Preffered Email
                      </Label>
                      <Input
                        type="text"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                      />
                    </FormGroup>
                  )}

                  {this.state.load ? (
                    <button
                      className="btn btn-default btn-block"
                      type="button"
                      style={{ background: "black", color: "white" }}
                    >
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </button>
                  ) : (
                    <Button
                      onClick={this.submit}
                      color="btn-dark btn-block"
                      style={{ background: "black", color: "white" }}
                    >
                      Submit
                    </Button>
                  )}
                </Form>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}

export default MakeReq;
