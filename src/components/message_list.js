import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMessages} from '../actions/index';
import {Link} from 'react-router';

class MessageList extends Component {
  componentWillMount() {
    // will be called on the first time this component is rendered
    this.props.fetchMessages();
  }

  renderMessages() {
    return this.props.messages.map(message => {
      let contentToShow = message.content;
      let isReadClass = message.isRead === 'true' ? 'mark-as-read' : 'mark-as-unread';
      if (contentToShow.length > 100) {
        contentToShow = contentToShow.slice(0, 100) + '...';
      }
      return (
        <li className='list-group-item' key={message.content}>
          <Link to={`messages/${message.id}`}>
              <span className={isReadClass}>{message.subject}</span>
              <br/>
              <span>{contentToShow}</span>
          </Link>
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <h2>Your Messages:</h2>
        <ul className='list-group'>
          {this.renderMessages()}
        </ul>
        <Link to='/' className='btn btn-danger message-list-button'>
          Back
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

export default connect(mapStateToProps, {fetchMessages})(MessageList);
