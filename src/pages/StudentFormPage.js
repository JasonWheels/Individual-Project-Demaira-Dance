import React, { Component } from 'react'
import StudentForm from '../components/forms/StudentForm.js'
import SchoolAPI from '../api/SchoolAPI'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class StudentFormPage extends Component {
  state = {
    redirect: false,
    edit: false,
    students: null
  }

  componentDidMount(){
    if (this.props.match.params.id) {
      console.log('Change to edit')
      SchoolAPI.fetchObjects('students', this.props.match.params.id.toString())
        .then((apiResponse) => {
          this.setState({students: apiResponse})
        })
    }
  }

  _handleSubmit(e){
    e.preventDefault()
    const studentObject = {
      school_id: e.target.elements[0].value,
      student_first_name: e.target.elements[1].value,
      student_last_name: e.target.elements[2].value,
      parent_name: e.target.elements[3].value,
      email: e.target.elements[4].value,
      address: e.target.elements[5].value,
      phone_number: e.target.elements[6].value,
      join_date: e.target.elements[7].value
    }
    if (this.props.match.params.id) {
      SchoolAPI.editObject('students', this.props.match.params.id.toString(), studentObject)
        .then((response) => console.log(response))
    }
    else {
      SchoolAPI.addNew('students', studentObject)
        .then((response) => console.log(response))
    }
  }

  render() {
    return (
      <Form onSubmit={(e) => (this._handleSubmit(e))}>
        {StudentForm.studentForm(this.props.match.params.id)}
        <button>Submit</button>
      </Form>
      
      )
  }
}

export default StudentFormPage