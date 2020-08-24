import React from 'react';
import 'isomorphic-fetch'; //We need this statement to use the Fetch API. You will also need to install isomorphic-fetch ('npm install --save isomorphic-fetch es6-promise') for
//this code to work when you write your own code with the Fetch API. This was already done when you 'npm install'ed this project
import './App.css';
import Weather from './components/Weather';

export default () => {
    return (
        <div className="body">
        <Weather />
        </div>
    )
}