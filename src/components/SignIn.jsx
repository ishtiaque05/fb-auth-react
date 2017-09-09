import React, { Component } from 'react';
import { Link } from 'react-router';
import FacebookLogin from 'react-facebook-login';

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
