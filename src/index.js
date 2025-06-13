//import the React and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom/client';

//Get a reference to the div with ID root 
const el=document.getElementById("root");

//Tell React to take control of that element
const root=ReactDOM.createRoot(el);

//Create a component
function App(){
    let message=[4,6,3,2];
    if(Math.random()>0.5){
        message="Hello from React";
    }
    return <h1>{message}</h1>
}

//Show the component on screen 
root.render(<App/>);