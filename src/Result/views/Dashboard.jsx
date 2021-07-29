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
import { Line, Pie } from "react-chartjs-2";
import Header from "../components/Navbars/DemoNavbar";
// reactstrap components
import {Redirect} from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardImg,
  Button,
  CardText,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "../variables/charts.jsx";

class Dashboard extends React.Component {

  mo = () => {
    alert('moo')

  }
  render() {
   
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card body inverse color="dark">
              <div className="d-flex justify-content-between align-items-top">
                <CardTitle className="text-white font-weight-bold h3 ">
                  STUDENT DASHBOARD
                </CardTitle>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="text-white
                  ">Welcome Yewande</h3>
                </div>
              </div>
            
            </Card>

            <Row>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-globe text-warning" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Courses </p>
                          <br />
                          <CardTitle tag="p">40</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  
                </Card>
              </Col>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-money-coins text-success" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">TLU</p>
                          <br />
                          <CardTitle tag="p"> 134</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                 
                </Card>
              </Col>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-vector text-danger" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">GPA</p>
                          <br />
                          <CardTitle tag="p">4.00</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                 
                </Card>
              </Col>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-favourite-28 text-primary" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">CGPA </p>
                          <br />
                          <CardTitle tag="p">4.50</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                
                </Card>
              </Col>
            </Row>
            <Row></Row>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">RESULT ACADEMIC STATISTICS</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
             
            </Card>

            <Card>
              <CardHeader>
                <CardTitle tag="h5">ACADEMIC PERFORMANCE ANALYSIS</CardTitle>
                <p className="card-category">Recent Transaction Performance</p>
              </CardHeader>
              <CardBody>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" />Very Good{" "}
                  <i className="fa fa-circle text-warning" /> Excellent{" "}
                  <i className="fa fa-circle text-danger" /> Fair{" "}
                  <i className="fa fa-circle text-gray" /> Good
                </div>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Update now
                </div>
              </CardFooter>
            </Card>
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default Dashboard;
