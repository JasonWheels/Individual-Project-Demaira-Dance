import React, { Component } from 'react'
import ClassForm from '../components/forms/ClassForm.js'
import SchoolAPI from '../api/SchoolAPI'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class ClassFormPage extends Component {
  state = {
    redirect: false,
    edit: false,
    danceClasses: null
  }

  componentDidMount(){
    if (this.props.match.params.id) {
      console.log('Change to edit')
      SchoolAPI.fetchObjects('classes', this.props.match.params.id.toString())
        .then((apiResponse) => {
          this.setState({danceClasses: apiResponse})
        })
    }
  }

  _handleSubmit(e){
    e.preventDefault()
    const dancelassObject = {
      school_id: e.target.elements[0].value,
      teacher_id: e.target.elements[1].value,
      dance_type: e.target.elements[2].value,
      level: e.target.elements[3].value,
      description: e.target.elements[4].value,
      is_private: e.target.elements[5].value,
    }
    if (this.props.match.params.id) {
      SchoolAPI.editObject('classes', this.props.match.params.id.toString(), dancelassObject)
        .then((response) => console.log(response))
    }
    else {
      SchoolAPI.addNew('classes', dancelassObject)
        .then((response) => console.log(response))
    }
  }

  render() {
    return (
      <Form onSubmit={(e) => (this._handleSubmit(e))}>
        {ClassForm.classForm(this.props.match.params.id)}
        <button>Submit</button>
      </Form>
      
      )
  }
}

export default ClassFormPage