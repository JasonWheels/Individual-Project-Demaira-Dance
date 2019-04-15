import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import SchoolAPI from '../../api/SchoolAPI'

  const teacherForm = (id=null) => {
    let school = null
    if (id) {
      SchoolAPI.fetchObjects('teachers', id.toString())
        .then((apiResponse) => {
          school = apiResponse
      })
    }
    
    return (
      <div>
        <h2>Teacher Form</h2>
        <FormGroup>
          <Label for="school_id" type="school_id">
            School ID:
          </Label><br/>
          <Input type="number" name="school_id" />
        </FormGroup>
        <FormGroup>
          <Label for="first_name" type="first_name">
            First Name:
          </Label><br/>
          <Input type="text" name="first_name" />
        </FormGroup>
        <FormGroup>
          <Label for="last_name" type="last_name">
            Last Name:
          </Label><br/>
          <Input type="text" name="last_name" />
        </FormGroup>
        <FormGroup>
          <Label for="email" type="email">
            Email:
          </Label><br/>
          <Input type="email" name="email"  />
        </FormGroup>
        <FormGroup>
          <Label for="address" type="textarea">
            Address:
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
          <Label for="hourly_wage" type="number">
            Hourly Wage:
          </Label><br/>
          <Input type="number" name="hourly_wage"  />
        </FormGroup>
      </div>
    )
  }
  
  export default {
    teacherForm: teacherForm
  }