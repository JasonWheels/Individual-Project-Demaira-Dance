import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import SchoolAPI from '../../api/SchoolAPI'

  const classForm = (id=null) => {
    let danceClass = null
    if (id) {
      SchoolAPI.fetchObjects('classes', id.toString())
        .then((apiResponse) => {
          danceClass = apiResponse
      })
    }
    
    return (
      <div>
        <h2>Add Class Information</h2>
        <FormGroup>
          <Label for="school_id" type="school_id">
            School ID:
          </Label><br/>
          <Input type="number" name="school_id" />
        </FormGroup>
        <FormGroup>
          <Label for="teacher_id" type="teacher_id">
            Teacher ID:
          </Label><br/>
          <Input type="number" name="teacher_id"  />
        </FormGroup>
        <FormGroup>
          <Label for="dance_type" type="dance_type">
            Dance Type:
          </Label><br/>
          <Input type="text" name="dance_type"  />
        </FormGroup>
        <FormGroup>
          <Label for="level" type="text">
            Level:
          </Label><br/>
          <Input type="text" name="level"/>
        </FormGroup>
        <FormGroup>
          <Label for="description" type="textarea">
           Description:
          </Label><br/>
          <Input type="textarea" name="description"  />
        </FormGroup>
        <FormGroup>
          <Label for="is_private" type="checkbox">
            Private class?
          </Label><br/>
          <Input type="checkbox" name="is_private"  />
        </FormGroup>
      </div>
    )
  }
  
  export default {
    classForm: classForm
  }