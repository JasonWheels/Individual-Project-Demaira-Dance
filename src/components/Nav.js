import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'
// import Sections from '../../config/Sections.json';

class AppNav extends Component {

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="lg">
          <Nav tabs>
          <NavbarBrand href="/">Demaira Home</NavbarBrand>
            <NavItem> <NavLink href="/schools/1">About School</NavLink></NavItem>
            <NavItem> <NavLink href="/schools">Our Schools</NavLink></NavItem>
            <NavItem> <NavLink href="/classes">Classes</NavLink></NavItem>
            <NavItem> <NavLink href="/students">Students</NavLink></NavItem>
            <NavItem> <NavLink href="/teachers">Teachers</NavLink></NavItem>
            <NavItem> <NavLink href="/events">Events</NavLink></NavItem>
            <NavItem> <NavLink href="/join-classes-students">Enrollment</NavLink></NavItem>
            <NavItem> <NavLink href="/login">Login</NavLink></NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default AppNav