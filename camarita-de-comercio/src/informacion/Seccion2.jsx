import React from 'react';
import imagen2 from '../images/imagenSeccion2.png';

const Seccion2 = () => {
    return (
        <section className="w-full h-[210px] relative bg-white">
            <div className="text-blue h-[105px] left-[600px] top-[17px] absolute">
                Como la Cámara de Comercio de Loja, nos esforzamos por impulsar el crecimiento y la competitividad de las empresas locales, brindando asesoramiento y apoyo integral. Nuestra dedicación a la capacitación y al desarrollo profesional se refleja en la diversidad de programas y eventos empresariales que ofrecemos.
            </div>
            <img className="w-[483px] h-[174px] left-[85px] top-5 absolute" src={imagen2} alt="imagen 2"/>
            <div className="absolute lg:flex flex-wrap justify-end transform -translate-y-1/2 right-96 top-40">
                <a
                    className="btn px-12 bg-yellow border-black text-white rounded-lg border-2"
                    href="https://camaradecomercioloja.com/nosotros/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Conoce Más
                </a>
            </div>
        </section>
    );
};

export default Seccion2;
