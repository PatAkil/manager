import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY_API_KEY}`,
      authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
      databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
      projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
      storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
      messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
