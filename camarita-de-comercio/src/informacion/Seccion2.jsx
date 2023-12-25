import React from 'react';
import imagen2 from '../images/imagenSeccion2.png';

const Seccion2 = () => {
    return (

        <section className="w-full bg-white">
        <div className="w-full flex items-center justify-center text-blue bg-white">
            <div className="mx-8 w-full lg:h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center"> 
                <div className="flex flex-col lg:flex-row lg:justify-around items-center">
                    <img
                        className="w-48 h-48 lg:w-auto lg:h-auto mb-4 lg:mb-0"
                        src={imagen2}
                        alt="imagen 2"
                    />
                    <div className="w-full lg:w-1/2 lg:pl-8">
                        <p className="text-center lg:text-left">
                            Como la Cámara de Comercio de Loja, nos esforzamos por impulsar el crecimiento y la competitividad de las empresas locales, brindando asesoramiento y apoyo integral. Nuestra dedicación a la capacitación y al desarrollo profesional se refleja en la diversidad de programas y eventos empresariales que ofrecemos.
                        </p>
                        <a
                            href="https://camaradecomercioloja.com/nosotros/"
                            className="bg-transparent border hover:bg-yellow hover:border-blue-800 text-blue justify-center text-center rounded-lg px-10 py-3 flex items-center group mt-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Nosotros
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Seccion2;
