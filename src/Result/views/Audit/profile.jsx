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
import { Line, Pie,Bar,Radar ,Doughnut} from "react-chartjs-2";
// reactstrap components
import wande from '../../img/wande.jpeg'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Modal, ModalHeader, ModalBody, ModalFooter ,Button,
  Form, FormGroup, Label, Input, FormText,
  Col
 
} from "reactstrap";
// core components


class Profile extends React.Component {
  state = {
    modal: false,
    createModal: false
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    })
  }

  open = () => {
      this.setState({modal: true})
  }



    toggle2 = (e) => {
      e.preventDefault();
      this.setState({
        createModal: !this.state.createModal
      })

  }
  render(){
 
   
    return (
      <>
        <div className="mt-5 pt-4">
       
              <Card className="card-stats">
                <CardBody>
                  <Row >
                    <Col md="12">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="text-info pt-1 pl-3">Homepage / <span>Profile</span></p> 
                        <div className="d-flex justify-content-end">
                     
                       </div>
                     
  

                      </div>
                    </Col>
                    <Col>
                     
                    </Col>
                  </Row>
                </CardBody>
              </Card>
           

           <div class="container">
               <div class="text-center">
                   <Card>
                       <CardBody>
                           <img src={wande} style={{borderRadius: '50%'}}  width="13%" />
                       </CardBody>
                   </Card>
               </div>
           <div class="row">
               <div class="col-md-6">
               <Card className="card-stats">
                <CardBody>
                  <Row >
                    <Col md="12">
                      <div className="">
                        <p class="lead font-weight-bold">BIO DATA INFORMATIONS</p> 
                        <div className="">
                            <div>
                                <p>FIRST NAME :YEWANDE</p>
                                <hr />
                                <p>LAST NAME :  BELLO </p>
                                <hr />
                                <p>MIDDLE NAME :  OLUWATAMILORE </p>
                                <hr />
                                <p>ADDRESS: LAGOS STATE</p>
                                <hr />
                                <p>STATE OF ORIGIN :LAGOS</p>
                                <hr />
                                <p>NATIONALITY : NIGERIAN</p>
                                <hr />
                                <p>DATE OF BIRTH: NIL</p>
                                <hr />
                                <p>OTHERS: </p>
                                <hr />
                            </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                     
                    </Col>
                  </Row>
                </CardBody>
              </Card>
           
                   
               </div>
               <div class="col-md-6">
               <Card className="card-stats">
                <CardBody>
                <Row >
                    <Col md="12">
                      <div className="">
                        <p class="lead  font-weight-bold">ACADEMIC INFORMATIONS</p> 
                        <div className="">
                            <div>
                                <p>FACULTY : SCHOOL OF SCIENCE</p>
                                <hr />
                                <p>DEPARTMENT : COMPUTER SCIENCE</p>
                                <hr />
                                <p>MATRIC NUMBER: 160591069</p>
                                <hr />
                                <p>SESSION : 2020/2021</p>
                                <hr />
                                <p>LEVEL : 400</p>
                                <hr />
                                <p>GPA : 4.50</p>
                                <hr />
                                <p>CGPA : 4.23</p>
                                <hr />
                                <p>TOAL COURSES OFFERED :200</p>
                                <hr />
                               
                            </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                     
                    </Col>
                  </Row>
                </CardBody>
              </Card>
           
               </div>
           </div>
           </div>

           
          
           
               
         

          <div>
     
      <Modal isOpen={this.state.modal} toggle={this.toggle} className="mt-5 pt-5">
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
            <Input type="radio" name="radio1" />{' '}
            Phone SMS
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Email Address
          </Label>
        </FormGroup>
      
      </FormGroup>
      <Button color="info" size="md">Search</Button>
      </Form>
        </ModalBody>
       
      </Modal>

      
    </div>
         
          
         
        </div>
      </>
    );
  }

}

export default Profile;
