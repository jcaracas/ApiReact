import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Anios from "./Anios";



function Vehiculo(props) {
    return (
        <ListGroup>
            <ListGroup horizontal key={props.id}>
                <ListGroup.Item className="col1 p-1">
                    {props.modelo}
                </ListGroup.Item>
                <ListGroup.Item className="col2 p-0">
                    <Anios codModelo={props.codModelo} codMarca={props.codMarca} />
                </ListGroup.Item>
            </ListGroup>
        </ListGroup>        
    )
}

export default Vehiculo;