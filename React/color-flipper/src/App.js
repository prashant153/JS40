import React from "react";
import './app.css';
import Main from "./components/main";
import Nav from "./components/nav";
import Route from "./Route";

function App() {
  return (
    <div>
      <Nav/>
      <Route pathname="/index">
        <Main flipper="simple"/>
      </Route> 
      <Route pathname="/hex">
        <Main flipper="hex"/>
      </Route>            
    </div>
  );
}

export default App;
