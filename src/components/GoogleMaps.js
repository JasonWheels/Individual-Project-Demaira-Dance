import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
 
class Gmap extends Component {
  render() {
    return (
      <iframe
  width="450"
  height="450"
  // frameborder="0" style="border:0"
  src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDSGXlA4z1ORlrwg5RwyQSCPHNzn68j30k&zoom=15&q=demaira+dance+studio+inc" allowFullScreen>
</iframe>
    )
  }
}
 
export default Gmap