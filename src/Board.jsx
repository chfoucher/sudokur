import { useState } from 'react';
import Button from './Button';
import Cell from './Cell';
import Block from './Block';

function initialValues() {
    const values = [];
    for (let r = 0; r < 9; r++) {
        const cols = [];
        for ( let c = 0; c < 9; c++) {
            cols.push(null);
        }
        values.push(cols);
    }
    return(values);
}

export default function Board() {
    const [selection, setSelection] = useState({ row: 0, col: 0 });
    const [values, setValues] = useState(initialValues());

    function setValue(v) {
        const newValues = Object.assign({}, values);
        newValues[selection.row][selection.col] = v;
        setValues(newValues);
    }

    function clearValue() {
        setValue(null);
    }
    function Row({r}) {
        const cols = [];
        for (let c = 0; c < 9; c++) {
            const selected = selection && selection.row === r && selection.col === c;
            cols.push(<Cell key={c} row={r} col={c} setSelection={setSelection} selected={selected} value = {values[r][c]}/>);
        }
        return (<div className='board-row'>{cols}</div>);
    }
    function Blocks() {
        return <table><tbody><tr><td><Block/></td><td><Block/></td></tr></tbody></table>
    }
    const rows = [];
    const buttons = [];
    for (let r = 0; r < 9; r++) {
        rows.push(<Row r={r} key={r}/>);
        buttons.push(<Button value={r+1} key={r} onClick={setValue}/>);
    }
    buttons.push(<button onClick={clearValue} key={10} >Clear</button>);
    return (<><div>{rows}</div><Blocks/><div>{buttons}</div></>);
}
