import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Outlet } from 'react-location';
import {routes, location } from "./router"

ReactDOM.render(
  <Router routes={routes} location={location}>
    <Outlet />
    </Router>,
  document.getElementById('root')
);

