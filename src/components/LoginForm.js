import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, InputField, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
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
          <Button>
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

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
