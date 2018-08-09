import React, { Component } from 'react';
import Square from './Square';
class Board extends Component {
    renderSquare(i) {
        return <Square winLine={this.props.winLine} key={i} index={i} 
         value={this.props.squares[i]}
         onClick={() => this.props.onClick(i)} />
    }
    render() {
        const rows = [
            [0,1,2],
            [3,4,5],
            [6,7,8]
        ];
        const row = rows.map((i,j)=>{
            const cells = i.map((k,l)=>{
                return (
                    this.renderSquare(k)
                )
            })
            return (
                <div key={j} className="board-row">{cells}</div>
            );            
        });
        return (
            <div>
                {row}
            </div>
        );
    }
}
export default Board;