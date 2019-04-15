import React, { Component } from 'react'
// import ClassForm from '../components/forms/ClassForm.js'
import SchoolAPI from '../api/SchoolAPI'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import DisplayAllEnrollments from '../components/DisplayAllEnrollments'
import { Table } from 'reactstrap'

class JoinStudentsClassesFormPage extends Component {
  state = {
    selectFrom: 'class',
    joinObject: null
  }

  _handleAdd(e){
    e.preventDefault()
    console.log('Added')
    const joinObject = {
      class_id: e.target.elements[0].value,
      student_id: e.target.elements[1].value
    }

    SchoolAPI.addNew('join-classes-students', joinObject)
        .then((response) => console.log(response))
  }

  _handleDelete(e, tableIndex){
    e.preventDefault()
    SchoolAPI.deleteObject('join-classes-students', tableIndex)
    SchoolAPI.fetchObjects('join-classes-students')
      .then((apiResponse) => {
        this.setState({joinObject: apiResponse})
      })
  }

  componentDidMount(){
    SchoolAPI.fetchObjects('join-classes-students')
      .then((apiResponse) => {
        this.setState({joinObject: apiResponse})
      })
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn
    console.log(isLoggedIn)
    let joinObject = this.state.joinObject
    return (
      <div>
        {joinObject ? (DisplayAllEnrollments.display(joinObject)): null}
        {isLoggedIn ? 
        <div>
        <div className="join-students-classes">
      <Form inline onSubmit={(e) => this._handleAdd(e)}>
          <FormGroup>
            <Label>Class ID </Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Student ID </Label>
            <Input type="text" />
          </FormGroup> 
        <button>Add</button>
      </Form>
        </div>
      <br/>
      <div className="join-students-classes">
      <Form inline onSubmit={(e) => this._handleDelete(e, e.target.elements[0].value)}>
          <FormGroup>
            <Label>Join Index to Remove </Label>
            <Input type="text" />
          </FormGroup>
        <button>Delete</button>
      </Form>
      </div>
      </div>
      : 
      <h3>Please Log In to Enrollment</h3>}
        
      </div>
    )
  }
}

export default JoinStudentsClassesFormPage