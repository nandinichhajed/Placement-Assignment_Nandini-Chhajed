import { Component } from 'react';

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    };
  }

  handleCellClick = (index) => {
    if (!this.state.board[index] && !this.state.winner) {
      const updatedBoard = [...this.state.board];
      updatedBoard[index] = this.state.currentPlayer;

      this.setState(
        {
          board: updatedBoard,
          currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
        },
        () => {
          this.checkWinner();
        }
      );
    }
  };

  checkWinner = () => {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];
      const board = this.state.board;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({ winner: board[a] });
        break;
      }
    }
  };

  resetGame = () => {
    this.setState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    });
  };

  render() {
    return (
      <div className="tic-tac-toe">
        <div className="board">
          {this.state.board.map((cell, index) => (
            <div
              key={index}
              className="cell"
              onClick={() => this.handleCellClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        {this.state.winner && (
          <div className="winner">
            <p>Player {this.state.winner} wins!</p>
            <button onClick={this.resetGame}>Reset Game</button>
          </div>
        )}
      </div>
    );
  }
}

export default TicTacToe;
