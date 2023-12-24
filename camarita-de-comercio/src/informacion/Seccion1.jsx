import React from 'react';
import '../../BannerItems.css';
import image from '../images/Seccion1.png';
import Seccion2 from "./Seccion2";
import Seccion3 from "./Seccion3";
import Objetivos from "./Objetivos";
import {Link} from "react-router-dom";
import Footer from './Footer';

const BannerItems = () => {
    return (
        <>
            <div className="carousel-item relative w-full bg-white">
                <div className='carousel-img w-full h-[800px]'>
                    <img src={image} alt='' className="h-[800px]"/>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3 pr-10">
                    <h1 className='text-white font-bold text-3xl lg:text-5xl'>Capacítate con nosotros<br/>
                        para el éxito financiero</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <p className='text-white font-semibold text-lg lg:block hidden mt-5'>La Cámara de Comercio de Loja
                        se
                        complace en incentivar a los <br/> nuevos emprendedores a embarcarse en un viaje de conocimiento
                        y <br/> crecimiento empresarial.</p>
                </div>
                <div className="absolute lg:flex flex-wrap justify-end transform -translate-y-1/2 left-24 top-2/3">
                    <Link to="/ingreso">
                        <button type="submit" className="btn px-8 bg-yellow border-black text-white">
                            Ingresar
                        </button>
                    </Link>
                </div>
            </div>

            <>
                <div id="seccion2">
                    <Seccion2/>
                </div>
            </>
            <>
                <div id="seccion3">
                    <Seccion3/>
                </div>
            </>
            <>
                <div id="objetivos">
                    <Objetivos/>
                </div>
            </>
            <>
                <div id="footer">
                     <Footer/>
                </div>
            </>
        </>


    );
};
export default BannerItems;