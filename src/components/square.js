import React, { Component } from 'react';
const style = {
    backgroundColor: 'white',
    border: 'black solid 2px',
    textalign: 'center',
    fontsize: '20px',
    width: '40px',
    height: '40px',
    margin: -1,
    display: 'inline-block',
    verticalAlign: 'top',
}
//  const tiles = ['', '0', 'X'];
class Square extends Component {
    // state ={
    //     currentBoard  : 0,

    // }
    // handleClick=()=>{
    //     this.setState(prevState=>{
    //         return {
    //             currentBoard  :(prevState.currentBoard + 4) % 3
    //         }
    //     })
    // }
    render() {
        return (
            <div style={style} onClick={this.props.handleClick}>
                {[this.props.value]}
            </div>
        );
    }
}

export default Square;