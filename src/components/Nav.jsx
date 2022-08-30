import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Nav.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="h3">
             <h1 width="30" height="30" className="d-inline-block align-top"  >Tareas</h1>
                
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >tareas</NavLink>
                        <NavLink to="/create" >crear tarea</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}