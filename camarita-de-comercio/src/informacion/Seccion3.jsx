import React from 'react';
import imagen3 from '../images/imagenSeccion3.png';

const Seccion3 = () => {
    return (
        <section className="w-full relative h-[730px] bg-blue-1">
            <img className="w-full sm:w-3/4 lg:w-[710px] h-auto left-1/2 transform -translate-x-1/2 absolute top-[12px]"
                 src={imagen3} alt="imagen 3"/>
            <div
                className="w-full sm:w-3/4 lg:w-[772px] h-[263px] left-1/2 transform -translate-x-1/2 top-[584px] sm:top-[582px] lg:top-[584px] absolute bg-white rounded-[51px] shadow"></div>
            <div
                className="w-full sm:w-3/4 lg:w-[369px] h-[58px] left-1/2 transform -translate-x-1/2 top-[606px] sm:top-[604px] lg:top-[606px] absolute text-center text-blue text-[30px] sm:text-[40px] font-semibold leading-7">
                ¿Qué Buscamos?
            </div>
            <div
                className="w-full sm:w-3/4 lg:w-[582px] h-[177px] left-1/2 transform -translate-x-1/2 top-[654px] sm:top-[650px] lg:top-[654px] absolute text-center text-blue text-[16px] sm:text-xl md:text-2xl lg:text-xl font-light leading-10">
                Promover el aprendizaje de conceptos contables para decisiones empresariales informadas y potenciar
                habilidades contables para una gestión empresarial eficiente.
            </div>
        </section>
    );
};

export default Seccion3;
