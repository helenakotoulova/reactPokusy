import Todo from './Components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' anotherText='Delete - 1'/>
      <Todo text='Master React' anotherText='Delete - 2'/>
      <Todo text= 'React Course' anotherText='Delete - 3'/>
    </div>
  );
}

export default App;
