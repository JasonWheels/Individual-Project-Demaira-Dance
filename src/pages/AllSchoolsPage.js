import React, { Component } from 'react'
import SchoolAPI from '../api/SchoolAPI'
import SchoolList from '../components/SchoolList'
import { Link } from 'react-router-dom'
import { isNull } from 'util';

class AllSchoolsPage extends Component{
  state = {
    allSchools: [],
  }

  componentDidMount() {
    SchoolAPI.fetchObjects('schools')
      .then((apiResponse) => {
        this.setState({allSchools: apiResponse})
      })

  }
  render(){
    const allSchools = this.state.allSchools
    return (
      <div>
        <h3>All Students Listed Below</h3>
        {/* {allSchools ? <h2>All Schools Listed Below</h2> : null} */}
        {SchoolList.schoolList(allSchools)}
        <div className='add-new-link'>
          <Link to="/schools/new">Add New School</Link>
        </div>
      </div>

    )
  }
}

export default AllSchoolsPage