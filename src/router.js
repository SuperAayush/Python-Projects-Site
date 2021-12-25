import React from 'react';
import { Route, ReactLocation } from "react-location";
import Day1 from "./Components/Day1"
import App from "./App"

export const routes: Route[] = [

    {
        path:'/',
        element:<App />
    },
    {
        path: 'day1',
        element: <Day1 />
    }
];

export const location = new ReactLocation();