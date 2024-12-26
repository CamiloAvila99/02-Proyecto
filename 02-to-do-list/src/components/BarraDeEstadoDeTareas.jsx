import React from 'react'

const BarraDeEstadoDeTareas = ({tareas}) => {
  return (
    <div className='estado-tareas'>
      <h2 className='titulo-estado'>Estado de las tareas</h2>

      <div className='contenedor-estado-tareas'>
        <div className='tareas-completas'>
            <h3>Tareas Completas</h3>
            <div className='listado-estado'>
                <ol>
                    {tareas.filter(tarea => tarea.completada === true).map(tarea =>(
                        <li key={tarea.id}>{tarea.titulo}</li>
                    ))}
                </ol>
                    
            </div>
        </div>

        <div className='tareas-incompletas'>
            <h3>Tareas Incompletas</h3>
            <div className='listado-estado'>
                <ol>
                    {tareas.filter(tarea => tarea.completada === false).map(tarea =>(
                        <li key={tarea.id}>{tarea.titulo}</li>
                    ))}
                </ol>
                    
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default BarraDeEstadoDeTareas
