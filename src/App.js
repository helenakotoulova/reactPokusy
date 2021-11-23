import Todo from './Components/Todo';
import Goal from './Components/Gol';
import Garage from './Components/Garaz';
import MyForm from './Components/Formular';
import FavouriteColor from './Components/FavouriteColor';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' anotherText='Delete - 1'/>
      <Todo text='Master React' anotherText='Delete - 2'/>
      <Todo text= 'React Course' anotherText='Delete - 3'/>
      <Goal isGoal={true} />
      <Goal isGoal={false} />
      <Garage />
      <MyForm />
      <FavouriteColor />
    </div>
  );
}

export default App;
