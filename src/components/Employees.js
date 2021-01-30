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


    
  // Setting the component's initial state
//   state = {
//     firstName: "",
//     lastName: "",
//     password: ""
//   };

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     const value = event.target.value;
//     const name = event.target.name;

//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     if (!this.state.firstName || !this.state.lastName) {
//       alert("Fill out your first and last name please!")
//     } else {
//       alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      
//     }

//     // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
//     this.setState({
//       firstName: "",
//       lastName: "",
//       password:""
//     });
//   };
//.sort//

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
            <th scope="col">Picture</th>//buttons here that will tie to sorting and filtering funcitons above//
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.foundEmployees.map((employee) => (
            <tr>
              <td><img alt={`${employee.name.first} ${employee.name.last}`} src={employee.picture.thumbnail} /></td>
              <td>{`${employee.name.first} ${employee.name.last}`}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              {/* <td>{moment(employee.dob.date).format("MM-DD-YYYY")}</td> */}
            </tr>
          ))};
        </tbody>
      
      </>
    );
  }
}

export default Employees;
