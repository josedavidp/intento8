import React, {useState} from 'react';
import axios from 'axios';
import ImgIngresar from '../images/bg.png';



const Registro = () => {



    const [name, setFirstName] = useState('');
    const [lastname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setConfirmPassword] = useState('');
    const [aceptoTerminos, setAceptoTerminos] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (aceptoTerminos) {
            try {

               
                if (password !== password2) {

                    alert('ERROR! Las Contraseñas no coinciden')
                    return;
                }

                const response = await axios.post('http://localhost:4001/api/auth/new', {
                    name,
                    lastname,
                    email,
                    password,
                    password2,
                });
                    alert('Registro Exitoso!! Porfavor Regrese al inicio de sesion')
                console.log('Respuesta del servidor:', response.data);

               
            } catch (error) {
                console.error('Error al enviar datos al servidor:', error.message);
                alert('Porfavor Complete Todos Los Campos')
               
            }
        } else {
            alert('Por favor acepta los términos y condiciones');
        }
    };

    const handleCheckbox = (event) => {
        setAceptoTerminos(!aceptoTerminos);
    };

    return (
        <>
            <div className="min-h-screen py-40" style={{backgroundColor: 'white'}}>
                <div className="container mx-auto">
                    <div
                        className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-blue rounded-xl mx-auto shadow-lg overflow-hidden">
                        <div
                            className="w-full lg:w-1/2 flex flex-col items-center justify-start p-5 bg-no-repeat bg-cover bg-center"
                            style={{backgroundImage: `url(${ImgIngresar})`}}>
                        </div>
                        <div className="w-full lg:w-1/2 py-16 px-12">
                            <h2 className="text-3xl mb-4 text-yellow">Registrate</h2>
                            <p className="mb-4 text-white">
                                Crea tu cuenta, es gratis y solo toma unos minutos
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-5">
                                    <input type="text" placeholder="Nombres" className="border border-gray py-1 px-2"
                                           value={name} onChange={(e) => setFirstName(e.target.value)}/>
                                    <input type="text" placeholder="Apellidos" className="border border-gray py-1 px-2"
                                           value={lastname} onChange={(e) => setSurname(e.target.value)}/>
                                </div>
                                <div className="mt-5">
                                    <input type="text" placeholder="Email"
                                           className="border border-gray py-1 px-2 w-full" value={email}
                                           onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="mt-5">
                                    <input type="password" placeholder="Clave"
                                           className="border border-gray py-1 px-2 w-full" value={password}
                                           onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="mt-5">
                                    <input type="password" placeholder="Confirmar Clave"
                                           className="border border-gray py-1 px-2 w-full" value={password2}
                                           onChange={(e) => setConfirmPassword(e.target.value)}/>
                                </div>
                                <div className="mt-5">
                                    <input type="checkbox" className="border border-gray mr-2" checked={aceptoTerminos}
                                           onChange={handleCheckbox}/>
                                    <span className='text-white'>
                                        Acepto los <a href="#" className="text-yellow font-semibold">Términos y condiciones</a> &amp;
                                        <a href="#"
                                           className="text-yellow font-semibold">Política de privacidad</a>
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <button type="submit"
                                            className={`w-full bg-yellow py-3 text-center text-blue ${!aceptoTerminos ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            onClick={handleSubmit} disabled={!aceptoTerminos}>
                                        Registrate
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registro;