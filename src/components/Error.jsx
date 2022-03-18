const Error = ({error}) => {
    return ( 
        <div className="bg-red-300 p-4 m-2 text-center">
            <p>{error}</p>
        </div>
     );
}
 
export default Error;