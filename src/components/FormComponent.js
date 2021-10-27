import React, { useState } from "react";

const Formulario = () =>{
    
    const[datos, setDatos] =useState({
        //creo objeto

        nombre:'',
        cantidad:'',
        duracionDesde:'',
        duracionHasta:'',
        edadDesde:'',
        edadHasta:'',
    })

    const handleInputChange = (event) =>{
        console.log(event.target.value)

        setDatos({
            ...datos,
            [event.target.name] : event.target.value

        })

    }


    return (
        <form className="col" >
            <div className="row">
                <label>
                    Nombre
                    <input
                        name="nombre" 
                        type="text" 
                        onChange={handleInputChange}
                        placeholder="Nombre"
                    />
                </label>
            </div>
            <div className="row">
                <label>
                    Cantidad de jugadores
                    <input 
                        name="cantidad" 
                        type="text" 
                        onChange={handleInputChange}
                        placeholder="Desde"
                    />
                </label>
            </div>
            <div className="row">
                <label>
                    Duración
                    <input 
                        name="duracionDesde" 
                        type="text" 
                        onChange={handleInputChange}
                        placeholder="Desde"
                    />

                    <input
                        name="duracionHasta" 
                        type="text" 
                        onChange={handleInputChange}
                        placeholder="Hasta"
                    />
                </label>
            </div>
            <div className="row">
                <label>
                    Edad sugerida
                    <input 
                        name="edadDesde" 
                        type="number" 
                        onChange={handleInputChange}
                        placeholder="Desde"
                    />
                    <input 
                        name="edadHasta" 
                        type="number" 
                        onChange={handleInputChange}
                        placeholder="Hasta"
                    />
                </label>
            </div>
            <button type="submit" value="Submit">Guardar </button>
        </form>
    )
}

export default Formulario;