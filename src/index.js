//import the React and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom/client';

//Get a reference to the div with ID root 
const el=document.getElementById("root");

//Tell React to take control of that element
const root=ReactDOM.createRoot(el);

//Create a component
function App(){
    return <h1>{new Date().toLocaleTimeString()}</h1>
}

//Show the component on screen 
root.render(<App/>);