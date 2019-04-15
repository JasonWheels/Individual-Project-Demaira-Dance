import React, { Component } from 'react'
import SchoolAPI from '../api/SchoolAPI'
import { Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class TeacherAboutPage extends Component {
  state = {
    teacher: null,
    redirect: false
  }

  componentDidMount() {
    SchoolAPI.fetchObjects('teachers', this.props.match.params.id.toString())
      .then((apiResponse) => {
        this.setState({teacher: apiResponse})
      })
    }

    _handleDelete(e) {
      SchoolAPI.deleteObject('teachers', this.props.match.params.id)
      this.setState({redirect: true})
    }


  render(){
    if(this.state.redirect) {
      return <Redirect to="/teachers" />
    }
    const teacher = this.state.teacher
    return(
      <div>
        {teacher ? 
          <div>
            <h2>{teacher.school_id}</h2>
            <h2>{teacher.first_name} {teacher.last_name}</h2>
            <h2>{teacher.email}</h2>
            <h2>{teacher.address}</h2>
            <h2>{teacher.phone_number}</h2>
            <h2>Hourly Wage: {teacher.hourly_wage}</h2>
            <Link to={`${this.props.match.params.id}/edit`}>Edit </Link>
            <button onClick={(e) =>this._handleDelete(e)} >Delete</button>
          </div>
          : null}
      </div>
    )
  }
}

export default TeacherAboutPage