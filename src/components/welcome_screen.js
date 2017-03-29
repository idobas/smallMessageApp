import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMessages} from '../actions/index';
import {Link} from 'react-router';

class WelcomeScreen extends Component {
  componentWillMount() {
    // will be called on the first time this component is rendered
    this.props.fetchMessages();
  }

  getNumberOfUnreadMessages() {
    return this.props.messages.filter(message => {
      return message.isRead === 'false'
    }).length;
  }

  render() {
    return (
      <div>
        <h1>Hello Jim</h1>
        <h2>You have {this.getNumberOfUnreadMessages()} unread messages out of {this.props.messages.length} total</h2>
        <Link to='messages' className="btn btn-primary">
          View Messages
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages.all
  }
}

export default connect(mapStateToProps, {fetchMessages})(WelcomeScreen);
