import React from "react";
import '../App.css'


function Nav(){
    return(
        <section id="navegador">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="index.js">Restaurantes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="busqueda-index.js">Busqueda</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="nuevo-index.js">Nuevo</a>
                </li>
                </ul>
            </div>
            </nav>
        </section>
     
    );

}

export default Nav;