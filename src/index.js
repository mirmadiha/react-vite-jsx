//import the React and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom/client';

//Get a reference to the div with ID root 
const el=document.getElementById("root");

//Tell React to take control of that element
const root=ReactDOM.createRoot(el);

//Create a component
function App(){
    const name="John";
    const age=25;

    return(
        <h3>Hi! My name is {name} and my age is {age}</h3>
    )
}

//Show the component on screen 
root.render(<App/>);