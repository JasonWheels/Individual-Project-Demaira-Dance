import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SchoolFormPage from './pages/SchoolFormPage'
import AllSchoolsPage from './pages/AllSchoolsPage'
import SchoolAboutPage from './pages/SchoolAboutPage'
import StudentFormPage from './pages/StudentFormPage'
import AllStudentsPage from './pages/AllStudentsPage'
import StudentAboutPage from './pages/StudentAboutPage'
import TeacherFormPage from './pages/TeacherFormPage'
import AllTeachersPage from './pages/AllTeachersPage'
import TeacherAboutPage from './pages/TeacherAboutPage'
import ClassFormPage from './pages/ClassFormPage'
import AllClassesPage from './pages/AllClassesPage'
import ClassAboutPage from './pages/ClassAboutPage'
import JoinStudentsClassesFormPage from './pages/JoinStudentsClassesFormPage'
import HomePage from './pages/HomePage'
import AppNav from './components/Nav'
import EventsPage from './pages/EventsPage'

class App extends Component {
  state = {
    loginType: null,
    userObject: null,
    isLoggedIn: false,
    isAdmin: false
  }
  setUser = (loginType, response) => {
    this.setState({
      loginType: loginType,
      userObject: response,
      isLoggedIn: true
    })
  }

  // toggleLog(e) {
  //   this.setState({isLoggedIn: true})
  // }

  render() {
    const isLogged = this.state.isLogged
    if (this.loginType) {
      console.log(this.loginType)
    }
    let welcomeName = ''
    if (this.state.loginType === 'Google') {
      welcomeName = this.state.userObject.w3.ig
      console.log(this.state.userObject.w3.ig)
    }
    else if (this.state.loginType === 'Facebook') {
      welcomeName = this.state.userObject.name
    }
    else {
      welcomeName = 'test'
    }

    const renderLoginPage = (props) => {
      return (
        <LoginPage 
          setUser={(loginType, response)=>{this.setUser(loginType, response)}}
          toggleLogin={this.toggleLog}
        />
      )
    }

    const renderJoinStudentsClassesFormPage = (props) => {
      return (
        <JoinStudentsClassesFormPage
        // Fix this here
          isLoggedIn={false}
        />
      )
    }

    return (
      <div className="App">
        <AppNav />
        <div className="login-notification">
      {this.state.isLoggedIn ? <p>Logged in with {this.state.loginType} as {welcomeName}</p> : null}
        </div>
        <div className="logo">
        <img src="https://chambermaster.blob.core.windows.net/images/customers/1821/members/135/logos/MEMBER_PAGE_HEADER/Logo_with_border.jpg"></img>
        </div>
        {/* <header className="App-header">
        </header> */}
        <BrowserRouter>
          <div>
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" render={renderLoginPage} />
            <Route exact path="/schools/new" component={SchoolFormPage} />
            <Route exact path="/schools" component={AllSchoolsPage} />
            <Route exact path="/schools/:id" component={SchoolAboutPage} />
            <Route exact path="/schools/:id/edit" component={SchoolFormPage} />
            <Route exact path="/students/new" component={StudentFormPage} />
            <Route exact path="/students" component={AllStudentsPage} />
            <Route exact path="/students/:id" component={StudentAboutPage} />
            <Route exact path="/students/:id/edit" component={StudentFormPage} />
            <Route exact path="/teachers/new" component={TeacherFormPage} />
            <Route exact path="/teachers" component={AllTeachersPage} />
            <Route exact path="/teachers/:id" component={TeacherAboutPage} />
            <Route exact path="/teachers/:id/edit" component={TeacherFormPage} />
            <Route exact path="/classes/new" component={ClassFormPage} />
            <Route exact path="/classes" component={AllClassesPage} />
            <Route exact path="/classes/:id" component={ClassAboutPage} />
            <Route exact path="/classes/:id/edit" component={ClassFormPage} />
            <Route exact path="/join-classes-students" render={renderJoinStudentsClassesFormPage} />
            <Route exact path="/events" component={EventsPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

