import React from "react";
import Vehiculo from "./Vehiculo";
import Cabecera from "./Cabecera";
import { useState, useEffect } from "react";


function Vehiculos(props) {
    const [vehiculos, setVehiculos] = useState([]);
    const modelos=vehiculos.slice(0,50)
    const marca = props.codigo

  
    useEffect(() => {
        consultarInformacion(marca);
    }, [marca]);

    const consultarInformacion = async (cod) => {
        const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/'+cod+'/modelos';
        const response = await fetch(url)
        const data = await response.json()
        setVehiculos(data.modelos)  
    }

    return (
        <div className="secctionModelos">
            <Cabecera sortLista={modelos} setListaOrdenada={setVehiculos}/>
            <div className="detalleLista">
                {
                    modelos.filter((modelo)=>{
                        return (
                            modelo.nome.toLowerCase().includes(props.buscar.toLowerCase())
                        )}).map(modelo=>{
                            return (
                            <Vehiculo key={modelo.codigo} modelo={modelo.nome} codMarca={marca} codModelo={modelo.codigo} />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Vehiculos;