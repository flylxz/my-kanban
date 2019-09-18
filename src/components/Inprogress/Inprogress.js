import React from 'react';
import './Inprogress.css';

class Inprogress extends React.Component {
  proceedHandleClick = e => {
    const card = Object.assign({}, this.props.card);
    card.type = 'done';
    this.props.moveCard(card);
  };
  abortHandleClick = e => {
    const card = Object.assign({}, this.props.card);
    card.type = 'aborted';
    this.props.moveCard(card);
  };

  render() {
    return (
      <div className='note'>
        <div /*className={setNoteColor()}*/ className='note-field'>
          <div>{this.props.card.priority.name}</div>
          <div>
            {this.props.card.text}
            <div />
            <div>{this.props.card.date}</div>
          </div>
          <div className='buttons'>
            <div className='green-button' onClick={this.proceedHandleClick}>
              Proceed
            </div>
            <div className='red-button' onClick={this.abortHandleClick}>
              Abort
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inprogress;
