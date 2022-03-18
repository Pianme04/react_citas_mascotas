const Paciente = ({paciente, guardarPaciente, eliminarPaciente}) => {

    const {nombre , propietario , email , telefono,fecha,sintomas, imagen, id}= paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar el registro')
        if(respuesta) {
            eliminarPaciente(id)
        }
    }
    return ( 
        <div className="bg-gray-200 m-5 px-5 py-6 rounded-xl shadow-mb">
            <p className="font-bold mb-2 uppercase">Nombre : <span className="text-yellow-500 normal-case">{nombre}</span></p>
            <p className="font-bold mb-2 uppercase">Propietario: <span className="text-yellow-500 normal-case">{propietario} </span></p>
            <p className="font-bold mb-2 uppercase">Email : <span className="text-yellow-500 normal-case">{email}</span></p>
            <p className="font-bold mb-2 uppercase">Telefono: <span className="text-yellow-500 normal-case">+52 {telefono} </span></p>
            
            <p className="font-bold mb-2 uppercase">Alta: <span className="text-yellow-500 normal-case">{fecha}</span></p>     
            <p className="font-bold mb-2 uppercase">Sintomas : <span className="text-yellow-500 normal-case">{sintomas}</span></p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-yellow-400 mt-2 hover:bg-yellow-500 font-bold rounded-md"
                    onClick={() => guardarPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-400 mt-2 hover:bg-red-500 font-bold rounded-md"
                    onClick={handleEliminar}

                >
                    Eliminar.
                </button>   

            </div>
            <div className="flex w-1/2 m-auto p-3">
                    <a href={imagen} download > <img src={imagen} alt="Imagen no encontrada"/></a>
            </div>
        </div>
     );
}
 
export default Paciente;