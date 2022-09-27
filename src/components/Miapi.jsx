import React from "react";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import InputGroup from 'react-bootstrap/InputGroup';

function Miapi(props) {
    const [listVehiculos, setListVehiculos] = useState([]);
    
    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
        const response = await fetch(url)
        const data = await response.json()
        setListVehiculos(data)
        
    }
    const handleChange = (e)=>{
        props.setCodigo(e.target.value)
        props.setBuscar('')
      }


    return (
        <div className="select">
            <InputGroup className="mb-0">
                <Form.Select className="optionSelect" aria-label="Seleccionar Vehiculo" value='0' onChange={(e)=> handleChange(e)}>
                    <option >Seleccionar Marca de Vehiculo</option>
                    {
                        listVehiculos.map(lista=>{
                        return (
                            <option key={lista.nome} value={lista.codigo} >{lista.nome}</option>
                        )
                        })
                    }
                </Form.Select>
            </InputGroup>
        
      </div>
    )
}

export default Miapi;