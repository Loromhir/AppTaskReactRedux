import React , {useState} from 'react';
import { NavBar } from './components/NavBar'; 
import { Routes, Route } from 'react-router-dom' ;
import Books from './components/Books';
import CreateBook from './components/CreateBook';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {

  
  const [pathname, setPathname]= useState('');

  function notifyPathname(pathname){
    setPathname({
      pathname: pathname
    });
  }

  return (
     <React.Fragment>
     <NavBar notifyPathname={notifyPathname} pathname={pathname}/>  
     <Routes>  
        <Route path='/' element={<Books/>} />
        <Route path="/create" element={<CreateBook/>} />
        <Route path="/edit/:id" element={<Books/>} />
    </Routes>
    </React.Fragment>
      
  );
}

export default App;
