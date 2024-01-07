import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../informacion/NavBar';
import Seccion1 from '../informacion/Seccion1';
import Objetivos from '../informacion/Objetivos';
import Ingreso from '../informacion/Ingreso';
import Registro from '../informacion/Registro';
import Seccion2 from '../informacion/Seccion2';
import Seccion3 from '../informacion/Seccion3';
import Dashboard from '../Cursos/Page/Dashboard';
import Footer from '../informacion/Footer';
import Dashboard2 from "../Cursos/Perfil/Dashboard2";
import Dashboard3 from "../Cursos/MisCursos/Dashboard3";
import DashboardHam from "../Cursos/Partials/DashboardHam";


const Rutas = () => {
    return (
        <Router>
            {/* NavBar dentro de Routes para envolver solo las rutas especÃ­ficas */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar/>
                            <Seccion1/>
                        </>
                    }
                />
                <Route
                    path="/objetivos"
                    element={
                        <>
                            <NavBar/>
                            <Objetivos/>
                        </>
                    }
                />
                <Route
                    path="/ingreso"
                    element={
                        <>
                            <NavBar/>
                            <Ingreso/>
                        </>
                    }
                />
                <Route
                    path="/registro"
                    element={
                        <>
                            <NavBar/>
                            <Registro/>
                        </>
                    }
                />
                <Route
                    path="/conoceMas"
                    element={
                        <>
                            <NavBar/>
                            <Seccion2/>
                        </>
                    }
                />
                <Route
                    path="/queBuscamos"
                    element={
                        <>
                            <NavBar/>
                            <Seccion3/>
                        </>
                    }
                />

                <Route
                    path="/footer"
                    element={
                        <>
                            <NavBar/>
                            <Footer/>
                        </>
                    }
                />

                {/* Dashboard fuera del NavBar */}
                <Route
                    path="/cursos"
                    element={
                        <>
                            <Dashboard/>
                        </>
                    }
                />

                <Route
                    path="/perfil"
                    element={
                        <>
                            <Dashboard2/>
                        </>
                    }
                />

                <Route
                    path="/misCursos"
                    element={
                        <>
                            <Dashboard3/>
                        </>
                    }
                />

                <Route
                    path="/continuar"
                    element={
                        <>
                            <DashboardHam/>
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default Rutas;