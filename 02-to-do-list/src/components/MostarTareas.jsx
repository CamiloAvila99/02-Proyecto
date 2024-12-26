import React from 'react'

const MostarTareas = ({tareas, setTareas}) => {

    const elminarTarea = (id) =>{
        //Fitrar las tareas para poderlas Eliminar
        let nuevoArrayTareas = tareas.filter(tarea => tarea.id !== id);

         //Actualizar estado del listado
        setTareas(nuevoArrayTareas);

        //Actualizar los datos en el LocalStorage
        localStorage.setItem('tareas', JSON.stringify(nuevoArrayTareas));
    }

    //Estado de las tareas completadas

    const completarTarea = (id) =>{
        const nuevasTareas = tareas.map((tarea) =>{
        if(tarea.id === id){
            return{...tarea, completada: true};
        }
        return tarea
        });

        setTareas(nuevasTareas);
        localStorage.setItem('tareas', JSON.stringify(nuevasTareas));
    }

  return (
    <div className='contenedor-tareas'>
        <h2>Tareas</h2>

        <div className='subcontenedor-tareas'>
            {
                
                tareas && tareas.length > 0 ? (
                    <>
                        {/*TAREAS TRABAJO*/}
                        {tareas.filter(tarea => tarea.categoria === 'Trabajo' && !tarea.completada).length > 0 && (
                        <div className='tareas'>
                            <h3>Trabajo</h3>
                            {tareas.filter(tarea => tarea.categoria === 'Trabajo' && !tarea.completada).map((tarea, id) =>
                                (
                                    <div className='lista-tareas' key={id}>
                                        <h4>{tarea.titulo}</h4>
                                        <ul>
                                            <li>
                                                Categoria: {tarea.categoria}
                                            </li>
                                            <li>
                                                Fecha de Creación: {tarea.fecha} 
                                            </li>
                                        </ul>
                                        
                                        <div className='botones'>
                                            <button onClick={() => {elminarTarea(tarea.id)}}>Eliminar</button>
                                            <button onClick={() => {completarTarea(tarea.id)}}>Tarea Completada</button>
                                        </div>
                                    </div>
                                    
                                )
                            )}
                        </div>
                        )}
                        
                            
                        {/*TAREAS HOGAR*/}
                        {tareas.filter(tarea => tarea.categoria === 'Hogar' && !tarea.completada).length > 0 && (
                            <div className='tareas'>
                                <h3>Hogar</h3>
                                {tareas.filter(tarea => tarea.categoria === 'Hogar' && !tarea.completada).map((tarea, id) =>
                                    (
                                        <div className='lista-tareas' key={id}>
                                            <h4>{tarea.titulo}</h4>
                                            <ul>
                                                <li>
                                                    Categoria: {tarea.categoria}
                                                </li>
                                                <li>
                                                    Fecha de Creación: {tarea.fecha} 
                                                </li>
                                            </ul>
                                            <div className='botones'>
                                                <button onClick={()=> {elminarTarea(tarea.id)}}>Eliminar</button>
                                                <button onClick={() =>{completarTarea(tarea.id)}}>Tarea Completada</button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>     
                        )}
                        

                        {/*TAREAS ESTUDIO*/}
                        {tareas.filter(tarea => tarea.categoria === 'Estudio' && !tarea.completada).length > 0 && (
                            <div className='tareas'>
                                <h3>estudio</h3>
                                {tareas.filter(tarea => tarea.categoria === 'Estudio' && !tarea.completada).map((tarea, id) =>
                                    (
                                        <div className='lista-tareas' key={id}>
                                            <h4>{tarea.titulo}</h4>
                                            <ul>
                                                <li>
                                                    Categoria: {tarea.categoria}
                                                </li>
                                                <li>
                                                    Fecha de Creación: {tarea.fecha} 
                                                </li>
                                            </ul>
                                            <div className='botones'>
                                                <button onClick={() => {elminarTarea(tarea.id)}}>Eliminar</button>
                                                <button onClick={() => {completarTarea(tarea.id)}}>Tarea Completada</button>
                                            </div>                                        
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                        

                        {/*TAREAS OCIO*/}

                        {tareas.filter(tarea => tarea.categoria === 'Ocio' && !tarea.completada).length > 0 && (
                            <div className='tareas'>
                                <h3>ocio</h3>
                                {tareas.filter(tarea => tarea.categoria === 'Ocio' && !tarea.completada).map((tarea, id) =>(
                                    <div className='lista-tareas' key={id}>
                                        <h4>{tarea.titulo}</h4>
                                        <ul>
                                            <li>
                                                Categoria: {tarea.categoria}
                                            </li>
                                            <li>
                                                Fecha de Creación: {tarea.fecha} 
                                            </li>
                                        </ul>
                                        <div className='botones'>
                                            <button onClick={() => {elminarTarea(tarea.id)}}>Eliminar</button>
                                            <button onClick={() => {completarTarea(tarea.id)}}>Tarea Completada</button>
                                        </div>   
                                    </div>
                                    )
                                )}
                            </div>
                        )}
                        
                        
                        {/*OTROS*/}
                        {tareas.filter(tarea => tarea.categoria === 'Otros' && !tarea.completada).length > 0 && (
                            <div className='tareas'>
                                <h3>Otros</h3>
                                {tareas.filter(tarea => tarea.categoria === 'Otros' && !tarea.completada).map((tarea, id) =>
                                    (
                                        <div className='lista-tareas' key={id}>
                                            <h4>{tarea.titulo}</h4>
                                            <ul>
                                                <li>
                                                    Categoria: {tarea.categoria}
                                                </li>
                                                <li>
                                                    Fecha de Creación: {tarea.fecha} 
                                                </li>
                                            </ul>
                                            <div className='botones'>
                                                <button onClick={()=>{elminarTarea(tarea.id)}}>Eliminar</button>
                                                <button onClick={()=>{completarTarea(tarea.id)}}>Tarea Completada</button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        )}  
                    </>
                )
                : 
                (<h3 className='no-tareas'>No hay Tareas disponibles</h3>)
            }
        </div>
    </div>
  )
}

export default MostarTareas
