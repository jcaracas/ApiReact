import React from "react";
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';


function Anios(props) {
    const modelo = props.codModelo
    const marca = props.codMarca
    const [anios,setAnios] = useState([])
    const listAnios = anios.slice(0,4)
    
    
    const consultarInformacion = async (cod,mod) => {
        const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/'+cod+'/modelos/'+mod+'/anos';
        const response = await fetch(url)
        const data = await response.json()
        setAnios(data)
    }
    const handleClick = (e)=>{
        e.preventDefault()
        consultarInformacion(marca,modelo);
      }

    return(
        <div className="anios">
            <Accordion defaultActive="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={(e)=> { handleClick(e) }}></Accordion.Header>
                    <Accordion.Body>
                        <div className="detalleAnio">
                            {
                                listAnios.map(lista=>{
                                    return (
                                            <span key={lista.codigo}>{lista.nome}</span>
                                    )
                                })
                            }
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        
    )
}

export default Anios;