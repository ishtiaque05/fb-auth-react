import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import SignIn from './components/SignIn';
import { fbSuccessResponse } from './actions';
import reducer from './reducers';
import {bake_cookie, read_cookie} from 'sfcookies';

const store = createStore(reducer);
check_access();
export function check_access(){
  if(read_cookie('authenticated_user') == 'granted'){
    console.log('authenticated_user', read_cookie('authenticated_user'));
    browserHistory.replace('/app');
  }else{
    console.log('authenticated_user', read_cookie('authenticated_user'));
    browserHistory.replace('/signin');
  }
}


ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App}/>
      <Route path="/signin" component={SignIn}/>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
