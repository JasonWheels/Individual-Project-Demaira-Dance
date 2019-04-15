import React, { Component } from 'react'
import SchoolAPI from '../api/SchoolAPI'
import Gmap from '../components/GoogleMaps'

class SchoolAboutPage extends Component {
  state = {
    school: null
  }

  componentDidMount() {
    SchoolAPI.fetchObjects('schools', this.props.match.params.id.toString())
      .then((apiResponse) => {
        this.setState({school: apiResponse})
      })
    }

  render(){
    const school = this.state.school
    return(
      <div>
        {school ? 
          <div>
            <h1>{school.name}</h1>
            <img src="https://chambermaster.blob.core.windows.net/images/customers/1821/members/135/photos/GALLERY_MAIN/Oak_Park_Outside.JPG" alt="Demaira Dance Studio Front"></img>
            <p>{school.description}</p>
            <div className="contact">
              <h3>Contact Us</h3>
              <p>{school.email}</p>
              <p>{school.address}</p>
              <p>{school.phone_number}</p>
            </div>
            <h3>Our Current Prices</h3>
            <h4>Regular Class: <strong>${school.regular_class_price}</strong> Private Class: <strong>${school.private_class_price}</strong></h4>
            <hr/>
            <Gmap />
          </div>
          : null}
      </div>
    )
  }
}

export default SchoolAboutPage