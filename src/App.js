import React from 'react';
import { Routes, Route } from 'react-router-dom' ;
import Books from './components/Books';
import { NavBar } from './components/NavBar'; 
import CreateBook from './components/CreateBook';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
      <Routes>
        <Route path='/' element={<NavBar/>}/>     {/* //este se renderiza, pero Books nop :( */}
        <Route path='/' element={<Books/>} />
        <Route path="/create" element={<CreateBook/>} />
        <Route path="/edit/:id" element={<Books/>} />
    </Routes>
   
      
  );
}

export default App;
