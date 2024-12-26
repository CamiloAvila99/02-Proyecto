import { useState } from "react"
import CrearTarea from "./components/CrearTarea"
import MostrarTareas from "./components/MostarTareas"
import BarraDeEstadoDeTareas from "./components/BarraDeEstadoDeTareas";

function App() {
  
  const [tareas, setTareas] = useState(() => {
    //recupera los datos almacenados en el localstorage de la aplicación
    const savedTareas = localStorage.getItem('tareas')
    return savedTareas ? JSON.parse(savedTareas) : [];
  });

  /*------------------------------------------------------------*/
  //Almacena los datos en el localstorage
  const guardarTareas = (datosTareas) =>{
    //Verificar que tarea no sea null o undefined
    if(!datosTareas) return;

    //Verifica que 'tareas' sea un array (si es necesario)
    if(!Array.isArray(tareas)){
      console.log("no es un array");
      return;
    }

    //Actualiza el estado de las tareas
    const nuevasTareas = [...tareas, datosTareas];

    setTareas(nuevasTareas);

    //Guarda los datos en el localstorage
    localStorage.setItem('tareas', JSON.stringify(nuevasTareas));
  }
  /*------------------------------------------------------------*/

  return (
    <div className="contenedor-principal">
      <header className="header">
        {/*ENCABEZADO -  TITULO DE LA APLICACIÓN*/}
        <h1>TO DO LIST</h1>
      </header>

      <div className="form-est-tareas">
        {/*FORMULARIO PARA CREAR LAS TAREAS*/}
        <CrearTarea
          guardarTareas = {guardarTareas}
        />
      
        {/*ESTADO DE LAS TAREAS*/}
        <BarraDeEstadoDeTareas
          tareas = {tareas}
        />
      </div>
      
      {/*MUESTRA TAREAS CREADAS*/}
      <MostrarTareas
        tareas = {tareas}
        setTareas = {setTareas}
      />
      
    </div>
  )
}

export default App
