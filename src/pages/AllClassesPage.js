import React, { Component } from 'react'
import SchoolAPI from '../api/SchoolAPI'
import ClassList from '../components/ClassList'
import { Link } from 'react-router-dom'
import { isNull } from 'util';

class AllClassesPage extends Component{
  state = {
    allClasses: [],
    
  }

  componentDidMount() {
    SchoolAPI.fetchObjects('classes')
      .then((apiResponse) => {
        this.setState({allClasses: apiResponse})
      })

  }
  render(){
    const allClasses = this.state.allClasses
    return (
      <div>
        {allClasses ? <h2>All Classes Listed Below</h2> : null}
        {ClassList.classList(allClasses)}
      <div className='add-new-link'>
        <Link to="/classes/new">Add New Class</Link>
      </div>
      </div>

    )
  }
}

export default AllClassesPage