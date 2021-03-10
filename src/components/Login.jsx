import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import KakaoLogin from "react-kakao-login";
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
  // Kakao Login
  responseKakao = (res) => {
    this.setState({
      id: res.profile.id,
      name: res.profile.properties.nickname,
      provider: "kakao",
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
        <KakaoButton
          jsKey="c4e56c3782c201a626b9d5f3bcfb058e"
          buttonText="Kakao"
          onSuccess={this.responseKakao}
          onFailure={this.responseFail}
          getProfile="true"
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const KakaoButton = styled(KakaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export default withRouter(Login);
