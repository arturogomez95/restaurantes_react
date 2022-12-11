import React from "react";
import '../App.css'

function Restaurantes(props){
    return(

        <div className="col-3">
            <div className="card">
                <img className='card-img-top' alt="Card image cap" src='../imagenes/${props.imagen}'/>
                <div className="card-body">
                <h5 className="card-title" id="labelNombre1">{props.nombre}</h5>
                <p className="card-text" id="labelDireccion1">{props.direccion}</p>
                <p className="card-text" id="labelDescripcion1">{props.descripcion}</p>
                </div>
            </div>
        </div>
    );

}

export default Restaurantes;