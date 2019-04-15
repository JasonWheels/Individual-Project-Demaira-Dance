import React, { Component } from 'react'
import TeacherForm from '../components/forms/TeacherForm.js'
import SchoolAPI from '../api/SchoolAPI'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class TeacherFormPage extends Component {
  state = {
    redirect: false,
    edit: false,
    teachers: null
  }

  componentDidMount(){
    if (this.props.match.params.id) {
      console.log('Change to edit')
      SchoolAPI.fetchObjects('teachers', this.props.match.params.id.toString())
        .then((apiResponse) => {
          this.setState({teachers: apiResponse})
        })
    }
  }

  _handleSubmit(e){
    e.preventDefault()
    const teacherObject = {
      school_id: e.target.elements[0].value,
      first_name: e.target.elements[1].value,
      last_name: e.target.elements[2].value,
      email: e.target.elements[3].value,
      address: e.target.elements[4].value,
      phone_number: e.target.elements[5].value,
      hourly_wage: e.target.elements[6].value
    }
    if (this.props.match.params.id) {
      SchoolAPI.editObject('teachers', this.props.match.params.id.toString(), teacherObject)
        .then((response) => console.log(response))
    }
    else {
      SchoolAPI.addNew('teachers', teacherObject)
        .then((response) => console.log(response))
    }
  }

  render() {
    return (
      <Form onSubmit={(e) => (this._handleSubmit(e))}>
        {TeacherForm.teacherForm(this.props.match.params.id)}
        <button>Submit</button>
      </Form>
      
      )
  }
}

export default TeacherFormPage