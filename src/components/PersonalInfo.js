import React, { Component } from "react";

// this controlled component will contain a form that will produce an unordered list
// the UL will contain personal information about the user
// UL will contain Fname, Lname, D.O.B, City, Country, ACT, SAT, GMAT, IELTs scores

// need to figure out a way to get multiple scores and give the user the option of N/A if they do not have the test score

class PersonalInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    this.setState({ value: this.state.value });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Name:
          <input type="text" value={ this.state.value } onChange={ this.handleChange } />
          Birthday:
          <input type="date" value={ this.state.value } onChange={ this.handleChange } />
          Country:
          <input type="text" value={ this.state.value } onChange={ this.handleChange } />
          Scores:
          <input type="text" value={ this.state.value } onChange={ this.handleChange } />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// form below is from Banu's index.html file from Q2 - need to incorporate into jsx 

<div class="col s6">
                <form action="/users/<%= user.id%>" method="post">
                  <input type="text" placeholder="Name" name="name">
                  <input type="text" placeholder="Last Name" name="last_name">
                  <input type="text" placeholder="Country" name="country">
                  <input type="text" placeholder="City" name="city">
                  <input type="text" placeholder="State if applicable" name="state">
              </div>
              <div class="col s6">
                  <input name="alma_mater" type="text" placeholder="alma mater here">
                  <input name="gpa" type="number" step="0.01" class="form-control" min="0" max="10"  value="0.00" placeholder="GPA">
                  <input name="toefl" type="number" placeholder="TOEFL">
                  <input name="ielts" type="number" step="0.1" class="form-control" min="0" max="10"  value="0.00" placeholder="IELTS">
                  <input name="sat" type="number" placeholder="SAT">
              </div>
              <div class="col s12">
                <input type="submit" value="Submit">
              </div>
            </form>
          </div>



export default PersonalInfoForm;
