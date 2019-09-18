import React from 'react';
import './Doit.css';

class Doit extends React.Component {
  proceedHandleClick = e => {
    const card = Object.assign({}, this.props.card);
    card.type = 'inprogress';
    this.props.moveCard(card);
  };
  abortHandleClick = e => {
    const card = Object.assign({}, this.props.card);
    card.type = 'aborted';
    this.props.moveCard(card);
  };

  // setNoteColor = () => {
  //   let color;
  //   switch (this.props.card.priority.id) {
  //     case 3:
  //       color = '.hi-priority-note';
  //       break;
  //     default:
  //       color = '.normal-priority-note';
  //       break;
  //     case 1:
  //       color = '.low-priority-note';
  //       break;
  //   }
  //   console.log(this.props.card.priority.id);
  //   console.log(color);
  //   return color;
  // };

  render() {
    return (
      <div className='note'>
        <div /*className={this.setNoteColor()}*/ className='note-field'>
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

export default Doit;
