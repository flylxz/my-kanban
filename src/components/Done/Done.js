import React from 'react';
import './Done.css';

class Done extends React.Component {
  removeHandleClick = e => {
    const card = Object.assign({}, this.props.card);
    this.props.removeCard(card);
  };

  render() {
    return (
      <div>
        <div className='note'>
          <div className='note-field'>
            <div>{this.props.card.priority.name}</div>
            <div>
              {this.props.card.text}
              <div />
              <div>{this.props.card.date}</div>
            </div>
          </div>
          <div className='buttons'>
            <div className='red-button' onClick={this.removeHandleClick}>
              Remove
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Done;
