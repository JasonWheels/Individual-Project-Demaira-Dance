import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import SchoolAPI from '../../api/SchoolAPI'

  const schoolForm = (id=null) => {
    let school = null
    if (id) {
      SchoolAPI.fetchObjects('schools', id.toString())
        .then((apiResponse) => {
          school = apiResponse
      })
    }
    

    return (
      <div>
        <h2>Add School Information</h2>
        {/* <Form onSubmit={(e)=> this._handleSubmit(e)}> */}
        <FormGroup>
          <Label for="name" type="name">
            School Name:
          </Label><br/>
          <Input type="text" name="name" />
        </FormGroup>
        <FormGroup>
          <Label for="email" type="email">
            Email:
          </Label><br/>
          <Input type="email" name="email"  />
        </FormGroup>
        <FormGroup>
          <Label for="address" type="textarea">
            School Address:
          </Label><br/>
          <Input type="textarea" name="address"  />
        </FormGroup>
        <FormGroup>
          <Label for="phone_number" type="text">
            Phone Number:
          </Label><br/>
          <Input type="number" name="phone_number"/>
        </FormGroup>
        <FormGroup>
          <Label for="regular_class_price" type="number">
            Regular Class Price:
          </Label><br/>
          <Input type="number" name="regular_class_price"  />
        </FormGroup>
        <FormGroup>
          <Label for="private_class_price" type="number">
            Private Class Price:
          </Label><br/>
          <Input type="number" name="private_class_price"  />
        </FormGroup>
        <FormGroup>
        <Label for="description" type="textarea">
            Description:
          </Label><br/>
          <Input type="textarea" name="description"  />
        </FormGroup>
        {/* <Button>Submit</Button>
      </Form> */}
      </div>
    )
  }
  
  export default {
    schoolForm: schoolForm
  }