import React from 'react';
import Board from '../Board/Board';
import Modal from '../Modal/Modal';

class Base extends React.Component {
  state = {
    stateModal: false,
    cards: {}
  };

  addCard = card => {
    let cards = Object.assign({}, this.state.cards);
    cards[card.id] = card;
    this.setState({ cards: cards });
    console.log(this.state.cards);
  };

  moveCard = card => {
    let cards = Object.assign({}, this.state.cards);
    cards[card.id] = card;
    this.setState({ cards: cards });
  };

  removeCard = card => {
    let cards = Object.assign({}, this.state.cards);
    delete cards[card.id];
    this.setState({ cards: cards });
  };

  componentDidUpdate = () => {
    localStorage.setItem('savedCards', JSON.stringify(this.state.cards));
  };

  componentDidMount = () => {
    let savedCards = JSON.parse(localStorage.getItem('savedCards'));
    if (savedCards) {
      this.setState({ cards: savedCards });
    }
  };

  getModal = () => {
    if (this.state.stateModal)
      return (
        <Modal setStateModal={this.setStateModal} addCard={this.addCard} />
      );
    return null;
  };

  setStateModal = stateModal => {
    this.setState({ stateModal: stateModal });
  };

  render() {
    return (
      <div>
        <Board
          setStateModal={this.setStateModal}
          cards={this.state.cards}
          moveCard={this.moveCard}
          removeCard={this.removeCard}
          saveToStorage={this.saveToStorage}
        />
        {this.getModal()}
      </div>
    );
  }
}

export default Base;
