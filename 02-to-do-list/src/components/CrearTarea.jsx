import React, { useState } from 'react'

const CrearTarea = ({guardarTareas}) => {

    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const cambioDeOpcion = e =>{
        setOpcionSeleccionada(e.target.value);
    }

    const capturarDatosTareas = e =>{
        e.preventDefault();

        const datosTareas = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            categoria: opcionSeleccionada,
            completada: false,
            fecha: new Date().toLocaleDateString()
        }

        guardarTareas(datosTareas);
    }

    return (
        <div className='crear-tarea'>
        <h2>Crea tu Tarea</h2>

        <form onSubmit={capturarDatosTareas} className='formulario'>

            <div className='campo'>
                <label htmlFor="titulo">Titúlo de la tarea: </label>
                <input  type="text" 
                        id='titulo'
                        name='titulo'   
                        placeholder='Titulo...'
                />
            </div>

            <h3>Categorias</h3>  
            
            <div className='opciones'> 

                <div className='opcion'>
                    <label htmlFor="trabajo">Trabajo</label>
                    <input  type="radio" 
                            id="trabajo"
                            name="tarea"  
                            value="Trabajo"
                            checked={opcionSeleccionada === 'Trabajo'}
                            onChange={cambioDeOpcion}
                    />
                </div>
                
                <div className='opcion'>
                    <label htmlFor="hogar">Hogar</label>
                    <input  type="radio" 
                            id="hogar"
                            name="tarea"  
                            value="Hogar"
                            checked={opcionSeleccionada === 'Hogar'}
                            onChange={cambioDeOpcion}
                    />
                </div>
                
                <div className='opcion'>
                    <label htmlFor="estudio">Estudio</label>
                    <input  type="radio" 
                            id="estudio"
                            name="tarea"  
                            value="Estudio"
                            checked={opcionSeleccionada === 'Estudio'}
                            onChange={cambioDeOpcion}
                    />
                </div>
                
                <div className='opcion'>
                    <label htmlFor="ocio">Ocio</label>
                    <input  type="radio" 
                            id="ocio"
                            name="tarea"  
                            value="Ocio"
                            checked={opcionSeleccionada === 'Ocio'}
                            onChange={cambioDeOpcion}
                    />
                </div>
                
                <div className='opcion'>
                    <label htmlFor="otros">Otros</label>
                    <input  type="radio" 
                            id="otros"
                            name="tarea"  
                            value="Otros"
                            checked={opcionSeleccionada === 'Otros'}
                            onChange={cambioDeOpcion}
                    />
                </div> 
            </div>
            
            <input type="submit" name='guardar' value='Guardar'/>
        </form>
        </div>
    )
}

export default CrearTarea
