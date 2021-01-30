import React, { Component } from "react";
import "./Employees.css";
import API from "../utils/API";

class Employees extends Component {
    state = {
        foundEmployees: []
      };


    componentDidMount() {
        API.seeEmployees()
        .then(res => 
            this.setState({ foundEmployees: res.data.results }, () => {
              console.log("foundemployeesStat", this.state.foundEmployees)
            })
        ).catch(err => console.log(err));
      };

  render() {
    return (
<>
        <div class="jumbotron jumbotron-fluid" id="header">
            <div class="container">
                <h1 class="display-4 text-center"><u>Employee Directory</u></h1>
            </div>
        </div>
        <thead>
          <tr>
            <th scope="col" class="tableHead">Picture</th>
            <th scope="col" class="tableHead">Name</th>
            <th scope="col" class="tableHead">Phone</th>
            <th scope="col" class="tableHead">Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.foundEmployees.map((employee) => (
            <tr>
              <td><img alt={`${employee.name.first} ${employee.name.last}`} src={employee.picture.thumbnail} /></td>
              <td>{`${employee.name.first} ${employee.name.last}`}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
            </tr>
          ))};
        </tbody>
      
      </>
    );
  }
}

export default Employees;
