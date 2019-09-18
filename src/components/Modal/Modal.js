import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  priorities = {
    low: { id: 1, name: 'Low' },
    normal: { id: 2, name: 'Normal' },
    high: { id: 3, name: 'High' }
  };

  state = {
    id: null,
    type: null,
    time: null,
    priority: this.priorities.normal,
    text: ''
  };

  getPriority = id => {
    for (let item in this.priorities) {
      if (this.priorities[item].id === +id) return this.priorities[item];
    }
    return 1;
  };

  cancelClick = () => {
    this.props.setStateModal(false);
  };

  textAreaOnChange = e => {
    this.setState({ text: e.target.value });
  };

  priorityOnChange = e => {
    this.setState({ priority: this.getPriority(e.target.value) });
  };

  okClick = () => {
    let timestamp = Date.now();
    let currentDate = new Date(timestamp);
    this.props.addCard({
      id: timestamp,
      type: 'doit',
      date: currentDate.toLocaleString(),
      priority: this.state.priority,
      text: this.state.text
    });
    this.props.setStateModal(false);
  };

  render() {
    return (
      <div className='shell'>
        <div className='modal'>
          <div className='form' onSubmit={this.okClick}>
            <label>New task</label>
            <textarea
              name='task'
              placeholder='Enter new task here'
              rows='5'
              cols='20'
              value={this.state.text}
              onChange={this.textAreaOnChange}
            />
            <label>
              Priority
              <select
                name='priority'
                onChange={this.priorityOnChange}
                value={this.state.priority.id}
              >
                <option value={this.priorities.high.id}>
                  {this.priorities.high.name}
                </option>
                <option value={this.priorities.normal.id}>
                  {this.priorities.normal.name}
                </option>
                <option value={this.priorities.low.id}>
                  {this.priorities.low.name}
                </option>
              </select>
            </label>
            <div className='customButtons'>
              <div className='cancelButton' onClick={this.cancelClick}>
                Cancel
              </div>
              <div className='okButton' onClick={this.okClick}>
                Ok
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
