import './App.css';
import Nav from './componentes/Nav';


function Nuevo() {
    return (
        <div className="Nuevos">
            <Nav />
            <section id="nuevo">
                <div className="container">
                    <div class="titulo">
                        <h1>Registro nuevo restaurante</h1>
                    </div>
                    <form>
                        <label for="" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id=""/>
                        <label for="" className="form-label">Descripción</label>
                        <input type="text" className="form-control" id=""/>
                        <label for="" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id=""/>
                        <label for="" className="form-label">Imagen URL</label>
                        <input type="text" className="form-control" id=""/>
                        <br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
  }
  
  export default Nuevo;
  