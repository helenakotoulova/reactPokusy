import React, {useState} from 'react';

function FavouriteColor() {
    const [color, setColor] = useState("red"); // Notice that again, we are destructuring the returned values from useState.
    // The first value, color, is our current state.
    //The second value, setColor, is the fuction that is used to update our state.
    // We should never directly update state. Ex: color = "red" is not allowed.
    // We will use a button to update the state:
    const [clickedId, setClickedId] = useState("-1");

    function handler(e) {
        console.log(e.target.id)
        setClickedId(e.target.id)
        console.log(e.target.innerText)
        setColor(e.target.innerText)


    }
  
    return (
      <>
        <h1>My favorite color is {color} and favourite ID is {clickedId}!</h1>
        <button
          type="button"
          id={1}
          onClick={(e) => handler(e)}
        >Blue</button>
        <button
            id={2}
          type="button"
          onClick={(e) => handler(e)}
        >Red</button>
      </>
    );
  }
 export default FavouriteColor;