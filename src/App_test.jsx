// import ReactDOM from "react-dom";


// const App = () => {
//     return <h1>Hello</h1>;
// };

// const container = document.getElementById( "root" );


// ReactDOM.render( <App/>, container );


import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return <h1>nogumma</h1>;
};

const root = ReactDOM.createRoot( document.getElementById("root"));
root.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>
 );