import React from 'react';
import Cell from './Cell';
export class Board extends React.Component {
    render() {
        return (
            <div>
                <div className='board-row'><Cell/><Cell/><Cell/></div>
                <div className='board-row'><Cell/><Cell/><Cell/></div>
                <div className='board-row'><Cell/><Cell/><Cell/></div>
            </div>
        );
    }
}
export default Board;
