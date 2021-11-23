// Modal is often a name for overlay
function Modal(props) {
  function cancelHandler() {
      props.onCancel();
  }

  function confirmHandler() {
      props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
      <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

// button je built-in prvek, tzn zna onClick function.

export default Modal;


/*
tady mam nadefinovane u button jejich atribut onClick jako onClick={cancelHandler} a primo zde pak definuji cancelHandler - jde o funkci,
ktera mi zavola props.onCancel()
=> pak v Todo.js dam <Modal onCancel={closeModalHandler}/>. 

zatimco u backdropu to mam jinak: <div onClick={props.onCancel}></div>. 
a pak v Todo.js napisu <Backdrop onCancel={closeModalHandler}/>
*/
