//import the React and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom/client';

//Get a reference to the div with ID root 
const el=document.getElementById("root");

//Tell React to take control of that element
const root=ReactDOM.createRoot(el);

//Create a component
function App(){
    return(
        //object cannot be displayed but can be used as a prop
        <h3><input placeHolder="write your name"/></h3> 
    )
}

//Show the component on screen 
root.render(<App/>);