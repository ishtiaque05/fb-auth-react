import React, { Component } from 'react';
import { Link } from 'react-router';
import FacebookLogin from 'react-facebook-login';
import {bake_cookie, read_cookie} from 'sfcookies';
import { check_access } from '../index'

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      response: null
    }
  }


  render(){
    const responseFacebook = (response) => {
      this.setState({response})
      console.log('response from facebook', response);
      console.log('State', this.state);
      bake_cookie('authenticated_user', 'granted');
      check_access()
    }
    return(
      <FacebookLogin
          appId="515420832140693"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
    )
  }
}

export default SignIn;
