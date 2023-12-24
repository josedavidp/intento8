import React from 'react';
import Logo from '/src/images/logo_azul.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const scrollToSection = (id) => {
        if (id === "inicio") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            const element = document.getElementById(id);
            if (element) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                setTimeout(() => {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({
                        top: elementPosition,
                    });
                }, 100); // milisegundos de espera
            }
        }
    };

    return (
        <div className="navbar bg-blue">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        <li><a href="#seccion1" onClick={() => scrollToSection("seccion1")}>Inicio</a></li>
                        <li><a href="#seccion2" onClick={() => scrollToSection("seccion2")}>Conoce más</a></li>
                        <li><a href="#seccion3" onClick={() => scrollToSection("seccion3")}>¿Qué buscamos?</a></li>
                        <li><a href="#objetivos" onClick={() => scrollToSection("objetivos")}>Nuestros Objetivos</a>
                        </li>
                        <li><a href="#cursos" onClick={() => scrollToSection("cursos")}>Cursos</a></li>
                        <li><Link to="/ingreso">Ingresar</Link></li>
                    </ul>
                </div>
                <a href="/" className="text-2xl font-bold font-serif">
                    <img src={Logo} alt="Logo"/>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex font-semibold text-white">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="/" onClick={() => scrollToSection("seccion1")}>Inicio</a></li>
                    <li><a href="#seccion2" onClick={() => scrollToSection("seccion2")}>Conoce más</a></li>
                    <li><a href="#seccion3" onClick={() => scrollToSection("seccion3")}>¿Qué buscamos?</a></li>
                    <li><a href="#objetivos" onClick={() => scrollToSection("objetivos")}>Objetivos</a></li>
                    <li><a href="#cursos" onClick={() => scrollToSection("cursos")}>Cursos</a></li>
                    <li><Link to="/ingreso">Ingresar</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

