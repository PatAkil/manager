import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, InputField, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
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
  return {
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
