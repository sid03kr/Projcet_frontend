import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
    };
  }
  // Google Login
  responseGoogle = (res) => {
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      provider: "google",
    });
    this.doSignUp();
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };

  doSignUp = () => {
    const { id, name, provider } = this.state;

    window.sessionStorage.setItem("id", id);
    window.sessionStorage.setItem("name", name);
    window.sessionStorage.setItem("provider", provider);
    this.props.onLogin();
    this.props.history.push("/");
  };

  render() {
    return (
      <Container>
        <GoogleLogin
          clientId="823546012831-0rejvak2treom011sr1cdttidej0k52m.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  text-align: center;
  flex-flow: column wrap;
`;

export default withRouter(Login);
