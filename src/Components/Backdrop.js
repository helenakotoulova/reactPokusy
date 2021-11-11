// to co se zobrazi na pozadi, kdy mame spusteny overlay (modal)
// zde se pozadi vybarvi v podobe className='backDrop'
function Backdrop(props) {
    return <div className='backdrop' onClick={props.onCancel} />; // zde muzeme i div zapsat jako self-clsoing tag, 
    // protoze neobsahuje zadny text. v normalnim html by to neslo.
    // div je built-in component, tzn. zna funkci onClick, pak definujeme onCancel,
    //coz je nas prop, ktery forwardujeme k backdropu v Todo.
}

export default Backdrop;