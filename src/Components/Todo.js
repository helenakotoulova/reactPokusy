import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

// another component
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); // it is react hook, they can be directly called in components.
  // na zacatku je to false - zavreny modal
  // first element - ModalIsOpen - souvisi s tou hodnotou inputu - false, tu hodnotu muzeme v prubehu menit
  // ten durhy element - setModalIsOpen - pomoci nej menime tu hodnotu prvniho elementu
  // useState vzdy vraci dve hodnoty - current state (modalIsOpen) and function that updates it (setModalIsOpen)


  // nested function for deleting button:
  function deleteHandler() {
    //console.log("clicked");
    //console.log(props.text);
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          {props.anotherText}
        </button>
      </div>
      <div>
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      </div>
    </div>
  );
}

export default Todo;

/* 
POZN:
1. 
name of the function should start with capital letter, aby se odlisily od built-in functions, 
resp components of html

2.
<Todo /> self closing tag. slo by zapsat i jako <Todo></Todo> ale to je zbytecne,
kdyz tam nebudu nic mezi to psat

3. 
Funkci deleteHandler v onClick={deleteHandler} pisu jen takhle a ne jako deleteHandler(), protoze
takhle by se jiak primo executovala, coz by bylo prilis brzy - my chceme, aby se
executovala, az pri kliknuti

4. 
{ modalIsOpen ? <Modal /> : null} 
tohle by slo zapsat jeste jednodusseji jako:
{modalIsOpen && <Modal />} - znamena to: if both are true, do the second.
<Modal /} is always true.

5.
Pri kliknuti na delete se zobrazi overlay (nas Modal) a pozadi (nas Backdrop).
Chceme aby pri kliknuti na pozadi, ten Modal zmizel.

Takhle to ale fungovat nebude, protoze Backdrop je nas component takze nezna onClick prop!!!!

function closeModalHandler() {
  setModalIsOpen=false;
}

{modalIsOpen && <Backdrop onClick={closeModalHandler} />}


*/
