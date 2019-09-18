import React from "react";
import "./Add.css";

class Add extends React.Component {
  handleClick = e => {
    this.props.setStateModal(true);
  };

  render() {
    return (
      <div>
        <div className="addButton" onClick={this.handleClick}>
          Add
        </div>
      </div>
    );
  }
}

export default Add;
