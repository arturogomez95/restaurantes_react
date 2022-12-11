import './App.css';
import Nav from './componentes/Nav';
import Restaurantes from './componentes/Restaurantes';



function Busqueda() {
    
    const restaurantes = [
    {
        nombre: 'Pacifico Mar',
        direccion: 'Av 85 Nr 45-85 Barranquilla',
        descripcion: 'Comida del mar',
        imagen:'1.jpg'
    },
    {
        nombre: 'Italiano 65',
        direccion: 'Av 45 # 1 - 85 Medellín',
        descripcion: 'Italiana',
        imagen:'2.jpg'
    },
    {
        nombre: 'Fritos y Más',
        direccion: 'Calle 45 Medellín',
        descripcion: 'Rápida',
        imagen:'3.jpg'
    },
    {
        nombre: 'Pollo Fritos',
        direccion: 'Cr 32 #56-89 Bogotá',
        descripcion: 'Frito',
        imagen:'4.jpg'
    }
    ];

    function consultar(){
        // document.getElementById("nombreBuscado").value
        var nombreBuscado = 'Pollo Fritos';

        for(let j=0;j<restaurantes.length;j++){
            if(nombreBuscado === restaurantes[j].nombre){
                
                var valoresNombre = restaurantes[j].nombre;
                var valoresDireccion = restaurantes[j].direccion;
                var valoresDescripcion = restaurantes[j].descripcion;
                var valoresImagen = restaurantes[j].imagen;

                console.log(valoresNombre)
                console.log(valoresDireccion)
                console.log(valoresDescripcion)
                console.log(valoresImagen)


            }else{
                console.log("No encontrado")
            }
        }
    }

    return (
        <div className="Busqueda">
            <Nav />

            <section id="busqueda">
                <div className="container">
                    <div className="titulo">
                        <h1>Buscar</h1>
                    </div>
                    <form name="form" action="" method="get">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Escribe el noombre del restaurante: Pacifico Mar | Italiano 65 | Fritos y Más | Pollo Fritos</label>
                            <input type="text" className="form-control form-control-lg" id="nombreBuscado" placeholder="Pacifico Mar | Italiano 65 | Fritos y Más | Pollo Fritos"/>
                            </div>
                    </form>
                    <button type="submit" className="btn btn-primary" id="btnBusqueda" consultar = {consultar} >Buscar </button>
                </div>
            </section>


            <section id="Resultado">
                <div className="container">
                    <div className="titulo">
                        <h1>Resultado</h1>
                    </div>
                    <div className="row">
                        <Restaurantes
                            imagen = '{{valoresImagen}}'
                            nombre = '{{valoresNombre}}'
                            direccion = '{{valoresDescripcion}}'
                            descripcion = '{{valoresImagen}}'
                        />
                    </div>
                </div>
            </section>

        </div>
    );
  }

export default Busqueda;

