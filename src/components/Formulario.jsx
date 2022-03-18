
import { useState , useEffect } from 'react'
import Error from './Error'


const Formulario = ({pacientes, guardarPacientes, paciente, guardarPaciente}) => {

    const [nombre , guardarNombre] = useState('')

    const [propietario , guardarPropietario] = useState('')

    const [email , guardarEmail] = useState('')

    const [telefono , guardarTelefono] = useState('')

    const [imagen , guardarImagen] = useState('')
    const [fecha , guardarFecha] = useState('')


    const [sintomas , guardarSintomas] = useState('')  


    //Erorres
    const [error , guardarError] = useState(false)

    //mensaje correcto

    const [correcto , guardarCorrecto] = useState(false)


    //generar una id aleatoria
    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)


        return random + fecha

    }


    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            console.log(paciente)
            guardarNombre(paciente.nombre)
            guardarPropietario(paciente.propietario)
            guardarEmail(paciente.email)
            guardarTelefono(paciente.telefono)
            guardarImagen(paciente.imagen)
            guardarFecha(paciente.fecha)
            guardarSintomas(paciente.sintomas)
        } else {

        }
    }, [paciente])

    const validarDatos = e => {
        e.preventDefault();

        if([nombre,propietario,email,telefono,fecha,sintomas,imagen].includes('')){

            guardarError(true)
            return;
        }
        //consutrir objeto del paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            telefono,
            imagen,
            fecha,
            sintomas,

        }

        if(paciente.id) {
          
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            guardarPacientes(pacientesActualizados)
            guardarPaciente({})
        } else {
            objetoPaciente.id = generarId()
            guardarPacientes([...pacientes, objetoPaciente])
            
        }

       guardarError(false)
       //tomamos una copia con spreed operator
       

       //reiniciamos el form
       guardarNombre('')
       guardarPropietario('')
       guardarEmail('')
       guardarTelefono('')
       guardarImagen('')
       guardarFecha('')
       guardarSintomas('')
       guardarCorrecto(true)
       setTimeout(() => {
        guardarCorrecto(false)
       }, 3000);

    }


    return ( 
        <div className="bg-gray md:w-1/2 lg:w-2/5" >
            <h1 className="font-black text-3xl text-center mt-3">Seguimiento pacientes</h1>
            <p className="text-lg text-center mb-5">Agrega pacientes y <span className="text-yellow-500 font-bold "> administralos</span></p>


            {error ? <Error

                error="Todos los campos son obligatorios"
            /> : null}

            <form 
            onSubmit={validarDatos}
            className="shadow-sm rounded-lg py-10 mx-6"
            
            
            >
                
                <div className="mb-5">
                    <label  htmlFor="mascota"  className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                        type="text"
                        id="mascota"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 placeholder-yellow-500 rounded-md"
                        value={nombre}
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>
                
                <div className="mb-5">
                    <label  htmlFor="propietario"  className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 placeholder-yellow-500 rounded-md"
                        value={propietario}
                        onChange={e => guardarPropietario(e.target.value)}
                    />
                </div>       

                <div className="mb-5">
                    <label  htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                        type="mail"
                        id="email"
                        placeholder="Email"
                        className="border-2 w-full p-2 placeholder-yellow-500 rounded-md"
                        value={email}
                        onChange={e => guardarEmail(e.target.value)}
                    />
                </div>   

                <div className="mb-5">
                    <label  htmlFor="telefono" className="block text-gray-700 uppercase font-bold">Telefono</label>
                    <input
                        type="number"
                        id="telefono"
                        placeholder="+52"
                        className="border-2 w-full p-2 placeholder-yellow-500 rounded-md"
                        value={telefono}
                        onChange={e => guardarTelefono(e.target.value)}
                    />
                </div>  

                <div className="mb-5">
                    <label  htmlFor="imagen" className="block text-gray-700 uppercase font-bold">Imagen</label>
                    <input
                        type="text"
                        id="imagen"
                        placeholder="Ingresa el link de la imagen"
                        className="border-2 w-full p-2 placeholder-yellow-500 rounded-md"
                        value={imagen}
                        onChange={e => guardarImagen(e.target.value)}
                    />
                </div>            

                <div className="mb-5">
                    <label  htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input
                        type="date"
                        id="alta" 
                        className="border-2 w-full p-2 placeholder-yellow-500 rounded-md"
                        value={fecha}
                        onChange={e => guardarFecha(e.target.value)}
                    />
                </div>  


  

                <div className="mb-5">
                    <label  htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea

                        id="sintomas"
                        className="border-2 w-full p-2 placeholder-yellow-500 rounded-md"
                        placeholder="Ingresa los sintomas"
                        value={sintomas}
                        onChange={e => guardarSintomas(e.target.value)}
                    />
                </div>    

                <input

                    type="submit"
                    value={paciente.id ? 'Guardar Paciente': 'Crear Paciente'}
                    className="bg-yellow-500 w-full p-4 text-gray uppercase font-black hover:bg-yellow-400 cursor-pointer transition-color" 
                />   

 

                {correcto ? <div className='bg-green-300 p-3 mt-2'> <p className='font-black text-center'>Has creado correctamente al paciente</p></div> :null}                                      
            </form>
        </div>
     );
}
 
export default Formulario;