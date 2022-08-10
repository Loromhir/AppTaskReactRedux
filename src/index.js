import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {createBrowserHistory} from 'history'

export const history= createBrowserHistory({forceRefresh: true})

 const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element =  
<BrowserRouter>
  <App />
</BrowserRouter>;
root.render(element);

