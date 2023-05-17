import { useState } from 'react';
import Cell from './Cell';

export default function Board() {
    const [selection, setSelection] = useState(null);

    function Row({r}) {
        const cols = [];
        for (let c = 0; c < 9; c++) {
            const selected = selection && selection.row === r && selection.col === c;
            cols.push(<Cell key={c} row={r} col={c} setSelection={setSelection} selected={selected} />);
        }
        return (<div className='board-row'>{cols}</div>);
    }
    const rows = [];
    for (let r = 0; r < 9; r++) {
        rows.push(<Row r={r} key={r}/>);
    }
    return (<>{rows}</>);
}
