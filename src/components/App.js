import React, { Component } from 'react';
import Square from './square';
class App extends Component {
  state = {
    board: [
            "", "", "",
            "", "", "",
            "", "", ""
            ],
    turn: 'X',
  }
  playWon=()=>{
   const board  = this.state.board;
   const winningCOnditions = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
   ];
   for (let i=0;i<winningCOnditions.length;i++){
     const [ a, b, c] = winningCOnditions[i]
     if (board[a]!=='' && board[a]===board[b] && board [b]===board[c]){
       return  board[a];
     }
   }
   let isBoardFull = true ;
   for (let  i = 0; i<board.length;i++){
     if(board[i]===''){
       isBoardFull = false;
       break;
     }
   }
   if (!isBoardFull){
     return ''
   }
   else { 
     return 'tie'
   }
  }
  updatBoard(i) {
    let board = this.state.board.slice();
    let turn = this.state.turn;
    if (board[i] == '') {
      board[i] = turn;
      turn = turn === '0' ? 'X' : '0';
    }
    this.setState({
      board,
      turn,
    })
  }
  render() {
    return (
      <div>
        <h1>{this.playWon()}</h1>
        <div>  <Square value={this.state.board[0]} handleClick={this.updatBoard.bind(this, 0)} /> <Square value={this.state.board[1]} handleClick={this.updatBoard.bind(this, 1)} /> <Square value={this.state.board[2]} handleClick={this.updatBoard.bind(this, 2)} /></div>
        <div>  <Square value={this.state.board[3]} handleClick={this.updatBoard.bind(this, 3)} /> <Square value={this.state.board[4]} handleClick={this.updatBoard.bind(this, 4)} /> <Square value={this.state.board[5]} handleClick={this.updatBoard.bind(this, 5)} /></div>
        <div>  <Square value={this.state.board[6]} handleClick={this.updatBoard.bind(this, 6)} /> <Square value={this.state.board[7]} handleClick={this.updatBoard.bind(this, 7)} /> <Square value={this.state.board[8]} handleClick={this.updatBoard.bind(this, 8)} /></div>
      </div>
    );
  }
}

export default App;
