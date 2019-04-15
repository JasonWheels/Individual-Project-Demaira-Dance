import React, { Component } from 'react'
import SchoolAPI from '../api/SchoolAPI'
import { Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class StudentAboutPage extends Component {
  state = {
    student: null,
    joinStudentClasses: null,
    danceClasses: null,
    redirect: false
  }

  componentDidMount() {
    SchoolAPI.fetchObjects('students', this.props.match.params.id.toString())
      .then((apiResponse) => {
        this.setState({student: apiResponse})
      })
    SchoolAPI.fetchObjects('join-classes-students')
      .then((joinApiResponse) => {
        this.setState({joinStudentClasses: joinApiResponse})
      })
    SchoolAPI.fetchObjects('classes')
      .then((classApiResponse) => {
        this.setState({danceClasses: classApiResponse})
      })
  }

    getStudentClass(dc) {
      const student_id = this.props.match.params.id
      const classesIdForStudent = []
      dc.map((joinClass, index) => {
        if (joinClass.student_id.toString() === student_id) {
          // List of class Ids for each Student
          classesIdForStudent.push(joinClass.student_id)
        }
      })
      console.log(classesIdForStudent)
      if (this.state.danceClasses) {
        let danceClasses = this.state.danceClasses
        danceClasses.map((danceClass, index) => {
          if (danceClass.student_id in classesIdForStudent) {
            console.log(danceClass.dance_type)
          }
        })
      }
    }

    _handleDelete(e) {
      SchoolAPI.deleteObject('students', this.props.match.params.id)
      this.setState({redirect: true})
    }

  render(){
    if(this.state.redirect) {
      return <Redirect to="/students" />
    }
    const dc = this.state.joinStudentClasses
    if (dc) {
      this.getStudentClass(dc)
    }
    const student = this.state.student
    return(
      <div>
        {student ? 
          <div>
            <h2>{student.school_id}</h2>
            <h2>{student.student_first_name} {student.student_last_name}</h2>
            <h2>Parent Name: {student.parent_name}</h2>
            <h2>{student.email}</h2>
            <h2>{student.address}</h2>
            <h2>{student.phone_number}</h2>
            <h2>Join-Date: {student.join_date}</h2>
            <Link to={`${this.props.match.params.id}/edit`}>Edit </Link>
            <button onClick={(e) => this._handleDelete(e)}>Delete</button>
            {() => {

            }}
          </div>
          : null}
      </div>
    )
  }
}

export default StudentAboutPage