import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Cabecera(props) {
    
    const handleClick = (e)=>{
        e.preventDefault()
        const listaOrdenada = props.sortLista.reverse()
        props.setListaOrdenada(listaOrdenada)
    }
    return (
        <div className="cabecera">
            <ListGroup horizontal>
                <ListGroup.Item className="col1 pointer" variant="primary" onClick={(e)=>{handleClick(e)}}>Modelos &#8645;</ListGroup.Item>
                <ListGroup.Item className="col2" variant="primary">Año</ListGroup.Item>
            </ListGroup>  
        </div>
    )
}

export default Cabecera;