import React, { Component } from 'react'
import SchoolAPI from '../api/SchoolAPI'
import TeacherList from '../components/TeacherList'
import { Link } from 'react-router-dom'
import { isNull } from 'util';

class AllTeachersPage extends Component{
  state = {
    allTeachers: [],
    
  }

  componentDidMount() {
    SchoolAPI.fetchObjects('teachers')
      .then((apiResponse) => {
        this.setState({allTeachers: apiResponse})
      })

  }

  render(){
    
    const allTeachers = this.state.allTeachers
    return (
      <div>
        {allTeachers ? <h2>All Teachers Listed Below</h2> : null}
        {TeacherList.teacherList(allTeachers)}
        <div className='add-new-link'>
          <Link to="/teachers/new">Add New Teacher</Link>
        </div>
      </div>

    )
  }
}

export default AllTeachersPage