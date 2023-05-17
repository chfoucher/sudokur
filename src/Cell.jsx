export default function Cell({ row, col, selected, setSelection, value }) {
    function handleClick() {
        setSelection({row, col});
    }

    return (<button onClick={handleClick} className="cell" style={{background: selected?"#E77A0D":"white"}}>{value}</button>);
}
