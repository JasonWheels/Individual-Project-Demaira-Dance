import React, { Component } from 'react'
import SchoolAPI from '../api/SchoolAPI'
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router'

class ClassAboutPage extends Component {
  state = {
    danceClass: null
  }

  componentDidMount() {
    SchoolAPI.fetchObjects('classes', this.props.match.params.id.toString())
      .then((apiResponse) => {
        this.setState({danceClass: apiResponse})
      })
    }

    _handleDelete(e) {
      SchoolAPI.deleteObject('classes', this.props.match.params.id)
      this.setState({redirect: true})
    }

  render(){
    const danceClass = this.state.danceClass
    return(
      <div>
        {danceClass ? 
          <div>
            <h2>School ID: {danceClass.school_id}</h2>
            <h2>Teacher ID: {danceClass.teacher_id}</h2>
            <h2>Type: {danceClass.dance_type}</h2>
            <h2>Level: {danceClass.level}</h2>
            <h2>{danceClass.description}</h2>
            <h2>Private Class?  {danceClass.is_private.toString()}</h2>
            <Link to={`${this.props.match.params.id}/edit`}>Edit </Link>
            <button onClick={(e) =>this._handleDelete(e)} >Delete</button>
          </div>
          : null}
      </div>
    )
  }
}

export default ClassAboutPage

