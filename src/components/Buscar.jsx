import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Buscar(props) {
    const handlerSearch = (e)=>{
        props.setBuscar(e.target.value)
    }

    return (
        <div className="buscar">
                <InputGroup className="mb-0">
                    <FloatingLabel controlId="floatingInput" label="Buscar Modelo" className="mb-0" >
                        <Form.Control className="inBuscar" type="text" placeholder="Buscar Colaborador" onChange={(e)=> handlerSearch(e)}/>
                    </FloatingLabel>
                </InputGroup>
            </div>
    )
    
}

export default Buscar;