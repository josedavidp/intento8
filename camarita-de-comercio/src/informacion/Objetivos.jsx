import React from 'react';
import Objetivosimg from '/src/images/Objetivos.png';

const Objetivos = () => {
    return (
        
        <section className=" mt-blue mb-blue bg-white">
            <div className=" bg-white container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-primary text-yellow">Objetivos</h2>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-yellow">Nuestros Objetivos</h3>
                            <div className="mt-12 space-y-12">



                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                        <path d="M15.17 7.5C15.17 11.6421 11.8077 15 7.66007 15C3.51246 15 0.150146 11.6421 0.150146 7.5C0.150146 3.35786 3.51246 0 7.66007 0C11.8077 0 15.17 3.35786 15.17 7.5Z" fill="#EFB810"/>
                                        </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="mt-2 text-black">Facilitar el aprendizaje de conceptos contables clave para fomentar la toma de decisiones informadas en el ámbito empresarial.</p>
                                    </div>
                                </div>


                                <div className="flex">
                                    <div className="flex-shrink-0">                             
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                        <path d="M15.17 7.5C15.17 11.6421 11.8077 15 7.66007 15C3.51246 15 0.150146 11.6421 0.150146 7.5C0.150146 3.35786 3.51246 0 7.66007 0C11.8077 0 15.17 3.35786 15.17 7.5Z" fill="#EFB810"/>
                                        </svg>
                                        </div>
                                    </div>                              
                                    <div className="ml-4">
                                        <p className="mt-2 text-black">Empoderar a los emprendedores con las habilidades y conocimientos contables necesarios para gestionar eficientemente sus negocios.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0">                             
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                        <path d="M15.17 7.5C15.17 11.6421 11.8077 15 7.66007 15C3.51246 15 0.150146 11.6421 0.150146 7.5C0.150146 3.35786 3.51246 0 7.66007 0C11.8077 0 15.17 3.35786 15.17 7.5Z" fill="#EFB810"/>
                                        </svg>
                                        </div>
                                    </div>                              
                                    <div className="ml-4">
                                        <p className="mt-2 text-black">Brindar una comprensión clara y práctica de la contabilidad para que los emprendedores puedan impulsar el crecimiento y la estabilidad de sus empresas.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0">                             
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                        <path d="M15.17 7.5C15.17 11.6421 11.8077 15 7.66007 15C3.51246 15 0.150146 11.6421 0.150146 7.5C0.150146 3.35786 3.51246 0 7.66007 0C11.8077 0 15.17 3.35786 15.17 7.5Z" fill="#EFB810"/>
                                        </svg>
                                        </div>
                                    </div>                              
                                    <div className="ml-4">
                                        <p className="mt-2 text-black">Ayudar a los emprendedores a dominar las prácticas contables fundamentales y avanzadas para garantizar la sostenibilidad y el éxito a largo plazo de sus emprendimientos.</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src={ Objetivosimg } alt="" className="mx-auto rounded-lg shadow-lg bg-blue" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Objetivos;

export { Objetivos };