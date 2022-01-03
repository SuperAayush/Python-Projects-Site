import React from 'react';
import { Route, ReactLocation } from "react-location";
import Day1 from "./Components/Day1"
import Day2 from "./Components/Day2"
import Day3 from "./Components/Day3"
import Day4 from "./Components/Day4"
import App from "./App"

export const routes: Route[] = [

    {
        path:'/',
        element:<App />
    },
    {
        path: 'day1',
        element: <Day1 />
   },
   {
        path: 'day2',
        element: <Day2 />
    },
    {
        path: 'day3',
        element: <Day3 />
    },
    {
        path: 'day4',
        element: <Day4 />
    }
];

export const location = new ReactLocation();