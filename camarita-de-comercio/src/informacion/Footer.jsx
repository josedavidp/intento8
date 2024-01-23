import React from 'react';
import Fade from 'react-reveal/Fade';
import NavBrand from './Navbrand';

const Footer = () => {

    const footerLink = [
        {id: 1, text: 'Lunes a Sábado'},
        {id: 2, text: '8 am a 7 pm'},
        {id: 3, text: 'Av. Universitaria y 10 de Agosto'},
        {id: 5, text: 'Cámara de Comercio Loja', url: 'https://camaradecomercioloja.com/'},
        {id: 6, text: 'Bomberos', url: 'https://www.loja.gob.ec/contenido/bomberos'},
        {id: 7, text: 'Ecu 911', url: 'https://www.ecu911.gob.ec/'},
        {id: 8, text: 'Municipio de Loja', url: 'https://www.loja.gob.ec/'},
    ]
    return (
        <Fade left>
            <footer className="text-white poppins bg-blue">
                <div
                    className="max-w-screen-xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <NavBrand/>
                    </div>
                    <div
                        className="flex-grow flex justify-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Horario</h2>
                            <nav className="list-none mb-10 flex flex-col space-y-2">
                                {/* list  */}
                                {
                                    footerLink.slice(0, 3).map(item => (
                                        <a  target="_blank" rel="noopener noreferrer" key={item.id}
                                           className="text-sm">{item.text}</a>
                                    ))
                                }
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Enlaces de interés</h2>
                            <nav className="list-none mb-10 flex flex-col space-y-2">
                                {/* list  */}
                                {
                                    footerLink.slice(3, 8).map(item => (
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.id}
                                           className="text-sm hover:underline">{item.text}</a>
                                    ))
                                }
                            </nav>
                        </div>

                    </div>
                </div>
                <div className="bg-blue-700">
                    <div
                        className="max-w-screen-xl mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
                        <p className="text-white text-sm text-center sm:text-left">© 2023 Developed by —
                            <a rel="noopener noreferrer" className="text-white ml-1" target="_blank">Club de
                                los 27</a>
                        </p>
                    </div>
                </div>
            </footer>
        </Fade>
    )
}

export default Footer