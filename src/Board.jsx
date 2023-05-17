import Cell from './Cell';
export default function Board() {
    return (
        <>
            <div className='board-row'><Cell/><Cell/><Cell/></div>
            <div className='board-row'><Cell/><Cell/><Cell/></div>
            <div className='board-row'><Cell/><Cell/><Cell/></div>
        </>
    );
}
