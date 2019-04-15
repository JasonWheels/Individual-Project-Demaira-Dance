import React, { Component } from 'react'
import SchoolAPI from '../api/SchoolAPI'
import StudentList from '../components/StudentList'
import { Link } from 'react-router-dom'
import { isNull } from 'util';

class AllStudentsPage extends Component{
  state = {
    allStudents: [],
    
  }

  componentDidMount() {
    SchoolAPI.fetchObjects('students')
      .then((apiResponse) => {
        this.setState({allStudents: apiResponse})
      })

  }
  render(){
    const allStudents = this.state.allStudents
    return (
      <div>
        {allStudents ? <h2>All Students Listed Below</h2> : null}
        {StudentList.studentList(allStudents)}
        <div className='add-new-link'>
          <Link to="/students/new">Add New Student</Link>
        </div>
      </div>

    )
  }
}

export default AllStudentsPage