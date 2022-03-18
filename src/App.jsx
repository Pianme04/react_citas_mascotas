
import {useState , useEffect} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {

  const [pacientes, guardarPacientes] = useState([])
  const [paciente,guardarPaciente] = useState({})



  useEffect(() => {

    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      guardarPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])

  useEffect(() => {

    localStorage.setItem('pacientes' , JSON.stringify(pacientes));
    console.log('Editando o agrenado')


  },[pacientes])


  const eliminarPaciente = id => {
      const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
      guardarPacientes(pacientesActualizados)
  }



  return (

    <div className="container mx-auto mt-20" >
      <Header

      />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          guardarPacientes={guardarPacientes}
          paciente={paciente}
          guardarPaciente={guardarPaciente}
          
        />
        <ListadoPacientes

          pacientes={pacientes}
          guardarPaciente={guardarPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>


    </div>
  )
}

export default App
