import React from 'react';
import Books from './components/Books';
import { NavBar } from './components/NavBar'; 
import {Route, BrowserRouter} from 'react-router-dom' ;
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CreateBook from './components/CreateBook';


function App() {
  return (
    <BrowserRouter>
       <NavBar />
       <Route exact path="/" component={Books} />
       <Route path="/create" component={CreateBook} />
       <Route path="/edit/:id" component={Books} />
    </BrowserRouter>
  );
}

export default App;
