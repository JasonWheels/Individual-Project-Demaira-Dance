import React, { Component } from 'react';
import { GoogleLogin }from 'react-google-login'
import { GoogleLogout } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { Redirect } from 'react-router-dom'
import { PostData } from '../services/PostData';


class LoginPage extends Component {

  state = {
    loginType: null,
    redirect: false
  }

  render(){

    const responseGoogle = (response) => {
      console.log(response.w3.ig)
      this.props.setUser('Google', response)
      
      this.setState({loginType: 'Google'})
      this.setState({redirect: true})
    }
  
    const responseFacebook = (response) => {
      console.log(response.name)
      this.props.setUser('Facebook', response)
      this.setState({loginType: 'Facebook'})
      this.setState({redirect: true})
    }

    if (this.state.redirect === true){
      // this.props.toggleLogin()
      return <Redirect to="" />
    }

    return(
      <div>
        <h2>Login with</h2>
      <GoogleLogin
        clientId="166722114235-pj4tg52fgq1esl6fmjvo6c6qh6uag4uf.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        // onFailure={responseGoogle} 
        />
        <br/>
        <br/>
        <h3>or</h3>
        <br/>
      <FacebookLogin
        appId="1217026808452097"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook} />
        <br/>
        <br/>
    {/* <GoogleLogout
      buttonText="Logout"
      // onLogoutSuccess={logout}
    >
    </GoogleLogout> */}
      </div>


    )
  }
}

export default LoginPage

// onClick={componentClicked} for facebook