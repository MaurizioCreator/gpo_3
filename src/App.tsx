import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Start from "./Pages/Start";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
    <Route path={'/start'} element={<Start/>}/>
    <Route path={'/registration'} element={<Registration/>}/>
    <Route path={'/login'} element={<Login/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
