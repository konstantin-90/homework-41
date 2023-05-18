import React, { Component } from 'react';
import "./main.css";


class SmileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smile: [
        { id: 1, symbol: '😀', count: 0 },
        { id: 2, symbol: '😃', count: 0 },
        { id: 3, symbol: '😄', count: 0 },
      ],
      winner: null,
    };
  }

  handleSmileClick = (id) => {
    this.setState((prevState) => {
      const updatedSmile = prevState.smile.map((smile) => {
        if (smile.id === id) {
          return { ...smile, count: smile.count + 1 };
        }
        return smile;
      });

      return { smile: updatedSmile };
    });
  };

  handleShowResults = () => {
    const { smile } = this.state;
    let maxCount = 0;
    let winner = null;

    smile.forEach((smile) => {
      if (smile.count > maxCount) {
        maxCount = smile.count;
        winner = smile;
      }
    });

    this.setState({ winner });
  };


  render() {
    const { smile, winner } = this.state;

    return (
      <div className='wrapper'>
        <ul className='wrapper__list'>
          {smile.map((smile) => (
            <li key={smile.id} className='wrapper__item'>
              {smile.symbol} - {smile.count}
              <button onClick={() => this.handleSmileClick(smile.id)}>
                +
                </button>
            </li>
          ))}
        </ul>
        <button onClick={this.handleShowResults} className='wrapper__button'>Show Results</button>
        {winner && <div>Winner: {winner.symbol}</div>}
      </div>
    );
  }
}

export default SmileList;