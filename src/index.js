import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config'
import {
  BrowserRouter,
} from 'react-router-dom'

import routes from "./router"
import Nav from './nav/index'

ReactDOM.render(
  <BrowserRouter>
    <Nav />
    {renderRoutes(routes, { initialCount: 0 })}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals