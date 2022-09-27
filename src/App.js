import Miapi from './components/Miapi';
import Vehiculos from "./components/Vehiculos";
import Buscar from './components/Buscar';
import Carrusel from './components/Carrusel';

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function App() {
  const [codigo,setCodigo]=useState('')
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    document.getElementsByClassName("inBuscar")[0].value='';
}, [codigo]);
  
  return (
    <div className="App">
      <div className="App-header">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><h1>Verificador de Vehiculos</h1></Navbar.Brand>
              <div className="inputs justify-content-end">
                <Miapi setCodigo={setCodigo} setBuscar={setBuscar} />
                <Buscar setBuscar={setBuscar}/>
              </div>  
          </Container>
        </Navbar>
        <Card body className='content'>
          <Vehiculos codigo={codigo} buscar={buscar}/>
        </Card>
        <Card body className='content'>
          <Carrusel />
        </Card>
      </div>
    </div>
  );
}

export default App;
