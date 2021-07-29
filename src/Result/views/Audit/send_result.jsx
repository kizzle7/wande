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

class Send extends React.Component {
  state = {
    modal: false,
    createModal: false,
  };

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal,
    });
  };

  open = () => {
    this.setState({ modal: true });
  };

  toggle2 = (e) => {
    e.preventDefault();
    this.setState({
      createModal: !this.state.createModal,
    });
  };
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
                        Request <span className="fa fa-plus-circle"></span>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </CardBody>
          </Card>

          <div>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className="mt-5 pt-5"
            >
              <ModalHeader toggle={this.toggle}>Request Data Form</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label for="exampleSelect">Session</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Select Session</option>
                      <option>2020/2021</option>
                      <option>2019/2020</option>
                      <option>2018/2019</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Semester</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Select Semester</option>
                      <option>First</option>
                      <option>Second</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleSelect">Matric Number</Label>
                    <Input
                      type="text"
                      name="updateAccount"
                      onChange={this.onChange}
                      value={this.state.updateAccount}
                    />
                  </FormGroup>
                  <FormGroup tag="fieldset" className="d-flex justify-content">
                    <legend>Send To</legend>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" /> Phone SMS
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" /> Email Address
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <Button color="info" size="md">
                    Search
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}

export default Send;
