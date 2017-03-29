import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import WelcomeScreen from './components/welcome_screen';
import MessageList from './components/message_list';
import MessageShow from './components/message_show';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={WelcomeScreen} />
    <Route path="messages" component={MessageList} />
    <Route path="messages/:id" component={MessageShow} />
  </Route>
);
