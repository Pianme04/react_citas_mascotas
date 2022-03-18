

import Paciente from "./Paciente";




const ListadoPacientes = ({pacientes, guardarPaciente, eliminarPaciente}) => {


    return ( 
        
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll" >

            {pacientes && pacientes.length ? (
                <>

                <h1 className="font-black text-center text-2xl">Listado de paciente</h1>
                 <p className="text-xl mt-5 text-center mb-5">Administra tus <span className="font-bold text-yellow-500 ">Pacientes</span></p>



            {pacientes.map(paciente => {
                return (
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        guardarPaciente={guardarPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                )
            })}
               
                </>
            ) : 
            (
                <>
                <h1 className="font-black text-center text-2xl">No hay pacientes aun </h1>

                <p className="text-xl mt-5 text-center mb-5">Empieza creando tus<span className="font-bold text-yellow-500 "> Pacientes</span></p>
                </>
            )}





        </div>
     );
}
 
export default ListadoPacientes;