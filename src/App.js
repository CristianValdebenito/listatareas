import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListaTareas from './Components/ListaTareas';

function App() {
  const [tareas,setTareas]=useState([]);
  return (
    <div className="App">
     <ListaTareas tareas={tareas} setTareas={setTareas}></ListaTareas>
    </div>
  );
}

export default App;