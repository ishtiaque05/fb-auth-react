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

let facebookResponsePayload = {response: null};

if(facebookResponsePayload.response == null){
  browserHistory.replace('/signin');
}else{
  browserHistory.replace('/app');
}
const store = createStore(reducer);

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
