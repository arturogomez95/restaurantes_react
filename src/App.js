import './App.css';
import Restaurantes from './componentes/Restaurantes';
import Nav from './componentes/Nav';


function App() {
  return (
    <div className="App">
      <Nav />

      <section id="cuerpo">
        <div className="container">
          <div className="titulo">
            <h1>Restaurantes</h1>
          </div>
          <div className="row">
            <Restaurantes
              imagen = '1.jpg'
              nombre = 'Pacifico Mar'
              direccion = 'Av 85 Nr 45-85 Barranquilla'
              descripcion = 'Comida del mar'
            />
            <Restaurantes
              imagen = '2.jpg'
              nombre = 'Italiano 65'
              direccion = 'Av 45 # 1 - 85 Medellín'
              descripcion = 'Italiana'
            />
            <Restaurantes
              imagen = '3.jpg'
              nombre = 'Fritos y Más'
              direccion = 'Calle 45 Medellín'
              descripcion = 'Rápida'
            />
            <Restaurantes
              imagen = '4.jpg'
              nombre = 'Pollo Fritos'
              direccion = 'Cr 32 #56-89 Bogotá'
              descripcion = 'Frito'
            />
          </div>
        </div>
      </section>
      </div>
  );
}

export default App;
