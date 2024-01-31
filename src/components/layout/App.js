import { useState } from 'react';
import { Header } from '../header/Header';
import Task from '../taskmodal/Task';
import TodoList from '../todoList/TodoList';
import './App.css';

function App() {

  const [modal, setModal] = useState(true)

  let [bodyTask, setBody] = useState({
    taskName: null,
    task: null,
    status: false
  })

  return (
    <div className="App">
      <Header bodyTask={bodyTask} setBody={setBody} setModal={setModal} modal={modal}/>
      {modal ? <TodoList setBody={setBody} setModal={setModal}/> : <Task setBody={setBody} bodyTask={bodyTask}/>}
    </div>
  );
}

export default App;
