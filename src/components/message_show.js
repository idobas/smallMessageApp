import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMessages} from '../actions/index';
import {Link} from 'react-router';

class MessageShow extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  renderMessage() {
    let id = this.props.params.id;
    let message = this.props.messages.find(message => {return message.id === id});
    if (!message) {
      return <div>Loading...</div>;
    }
    return (
        <div>
          <h3>{message.subject}</h3>
          <p>{message.content}</p>
        </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderMessage()}
        <Link to='/messages' className='btn btn-danger message-list-button'>
          Back to messages
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

export default connect(mapStateToProps, {fetchMessages})(MessageShow);
