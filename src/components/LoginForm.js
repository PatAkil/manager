import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, InputField, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputField
          label="Email"
          placeholder="user@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <InputField
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button
          onPress={this.onButtonPress.bind(this)}
          >
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { email, password } = state.auth;
  return {
    email,
    password,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
