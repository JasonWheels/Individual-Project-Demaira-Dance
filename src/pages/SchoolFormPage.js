import React, { Component } from 'react'
import SchoolForm from '../components/forms/SchoolForm.js'
import SchoolAPI from '../api/SchoolAPI'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class SchoolFormPage extends Component {
  state = {
    redirect: false,
    edit: false,
    school: null
  }

  componentDidMount(){
    if (this.props.match.params.id) {
      console.log('Change to edit')
      SchoolAPI.fetchObjects('schools', this.props.match.params.id.toString())
        .then((apiResponse) => {
          this.setState({school: apiResponse})
        })
    }
  }

  _handleSubmit(e){
    e.preventDefault()
    const schoolObject = {
      name: e.target.elements[0].value,
      email: e.target.elements[1].value,
      address: e.target.elements[2].value,
      phone_number: e.target.elements[3].value,
      regular_class_price: e.target.elements[4].value,
      private_class_price: e.target.elements[5].value,
      description: e.target.elements[6].value
    }
    if (this.props.match.params.id) {
      SchoolAPI.editObject('schools', this.props.match.params.id.toString(), schoolObject)
        .then((response) => console.log(response))
    }
    else {
      SchoolAPI.addNew('schools', schoolObject)
        .then((response) => console.log(response))
    }
  }

  render() {
    return (
      <Form onSubmit={(e) => (this._handleSubmit(e))}>
        {SchoolForm.schoolForm(this.props.match.params.id)}
        {/* (this.props.match.params.id.toString())} */}
        <button>Submit</button>
      </Form>
      
      )
  }
}

export default SchoolFormPage