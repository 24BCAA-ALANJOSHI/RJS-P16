import React from"react";
import { Link } from "react-router-dom";
function Navigation(){
    return(
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Aboutus">Aboutus</Link>
            <Link to="/Contactus">Contactus</Link>
        </nav>);}
        export default Navigation;
