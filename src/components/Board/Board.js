import React from 'react';
import Add from '../Add/Add';
import './Board.css';
import Doit from '../Doit/Doit';
import Inprogress from '../Inprogress/Inprogress';
import Done from '../Done/Done';
import Aborted from '../Aborted/Aborted';

class Board extends React.Component {
  objectFilter = (cards, type) => {
    const _cards = {};
    for (let id in cards) {
      const card = cards[id];
      if (card.type === type) _cards[id] = card;
    }
    return _cards;
  };

  objectToArray = cards => {
    return Object.keys(cards).map(id => {
      return cards[id];
    });
  };

  sortingArray = array => {
    array.sort((a, b) => {
      if (a.priority.id > b.priority.id) return -1;
      if (a.priority.id < b.priority.id) return 1;
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    });
  };

  getCardsForDoIt = () => {
    const cards = this.objectFilter(this.props.cards, 'doit');
    const _array = this.objectToArray(cards);
    this.sortingArray(_array);

    return _array.map(card => (
      <Doit key={card.id} card={card} moveCard={this.props.moveCard} />
    ));
  };

  getCardsForInprogress = () => {
    const cards = this.objectFilter(this.props.cards, 'inprogress');
    const _array = this.objectToArray(cards);
    this.sortingArray(_array);

    return _array.map(card => (
      <Inprogress key={card.id} card={card} moveCard={this.props.moveCard} />
    ));
  };

  getCardsForDone = () => {
    const cards = this.objectFilter(this.props.cards, 'done');
    const _array = this.objectToArray(cards);
    this.sortingArray(_array);

    return _array.map(card => (
      <Done key={card.id} card={card} removeCard={this.props.removeCard} />
    ));
  };

  getCardsForAborted = () => {
    const cards = this.objectFilter(this.props.cards, 'aborted');
    const _array = this.objectToArray(cards);
    this.sortingArray(_array);

    return _array.map(card => (
      <Aborted key={card.id} card={card} removeCard={this.props.removeCard} />
    ));
  };

  render() {
    return (
      <div className='table'>
        <h2>Kanban</h2>
        <div className='table-header'>
          <div className='top'>
            Do it <Add setStateModal={this.props.setStateModal} />
          </div>
          <div className='top'>In progress</div>
          <div className='top'>Done</div>
          <div className='top'>Aborted</div>
        </div>
        <div className='table-body'>
          <div className='bottom'>{this.getCardsForDoIt()}</div>
          <div className='bottom'>{this.getCardsForInprogress()}</div>
          <div className='bottom'>{this.getCardsForDone()}</div>
          <div className='bottom'>{this.getCardsForAborted()}</div>
        </div>
      </div>
    );
  }
}

export default Board;
