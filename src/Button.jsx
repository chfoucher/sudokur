export default function Button({ value, onClick }) {
    function click() {onClick(value);}
    return (<button onClick={click} >{value}</button>);
}