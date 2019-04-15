import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import SchoolAPI from '../../api/SchoolAPI'
// import NumericInput from 'react-numeric-input'
// import PostAPI from '../api/PostAPI'
// import CategoryAPI from '../api/CategoryAPI'  

  const studentForm = (id=null) => {
    let school = null
    if (id) {
      SchoolAPI.fetchObjects('students', id.toString())
        .then((apiResponse) => {
          school = apiResponse
      })
    }
    
    return (
      <div>
        <h2>Hello</h2>
        <FormGroup>
          <Label for="school_id" type="school_id">
            School ID:
          </Label><br/>
          <Input type="number" name="school_id" />
        </FormGroup>
        <FormGroup>
          <Label for="student_first_name" type="student_first_name">
            First Name:
          </Label><br/>
          <Input type="text" name="student_first_name" />
        </FormGroup>
        <FormGroup>
          <Label for="student_last_name" type="student_last_name">
            Last Name:
          </Label><br/>
          <Input type="text" name="student_last_name" />
        </FormGroup>
        <FormGroup>
          <Label for="parent_name" type="parent_name">
            Parent Name:
          </Label><br/>
          <Input type="text" name="parent_name" />
        </FormGroup>
        <FormGroup>
          <Label for="email" type="email">
            Email:
          </Label><br/>
          <Input type="email" name="email"  />
        </FormGroup>
        <FormGroup>
          <Label for="address" type="textarea">
            Student Address:
          </Label><br/>
          <Input type="textarea" name="address"  />
        </FormGroup>
        <FormGroup>
          <Label for="phone_number" type="text">
            Phone Number:
          </Label><br/>
          <Input for="phone_number" type="number" />
        </FormGroup>
        <FormGroup>
          <Label for="join_date" type="date">
            Join Date:
          </Label><br/>
          <Input type="date" name="join_date"  />
        </FormGroup>
      </div>
    )
  }
  
  export default {
    studentForm: studentForm
  }