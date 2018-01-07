import React, { Component } from 'react';

class Square extends Component {
    render() {
        let winHighlight = '';
        if (this.props.winLine != null && this.props.winLine.length > 0) {
            winHighlight = this.props.winLine.indexOf(this.props.index) !== -1
                ? 'win-highlight' : '';
        }
        return (
            <button className={`square ${winHighlight}`} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;