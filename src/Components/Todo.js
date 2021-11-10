// another component
function Todo(props) {
    return (
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    );
  
}

export default Todo;
// name of the function should start with capital letter
// aby se odlisily od built-in functions, resp components of html
// <Todo /> self closing tag. slo by zapsat i jako <Todo></Todo> ale to je zbytecne,
// kdyz tam nebudu nic mezi to psat
