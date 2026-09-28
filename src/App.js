import React from "react";
import {BrowserRouter,Routes,Route} from"react-router-dom";
import Navigation from"./Navigation";
import Home from"./Home";
import Aboutus from"./Aboutus";
import Contactus from"./Contactus";


function App() {
    
  return (
  <BrowserRouter>
  <Navigation/>
  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/Aboutus" element = {<Aboutus/>}/>
    <Route path="/Contactus" element = {<Contactus/>}/>
    </Routes>
     </BrowserRouter>
  );
}

export default App;
