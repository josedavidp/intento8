import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

import Dashboard4 from '../Cursos/MisCursos/Dashboard4';
import DashboardCrearCurso from '../Cursos/Perfil/DashboardCrearCurso' ;

export let authStatus = "True";
const Rutas = () => {

    //const navigate = useNavigate();
    //const location = useLocation();
    const userId = new URLSearchParams(location.search).get('userId');
    const nameId = new URLSearchParams(location.search).get('nameId');
    const emailId = new URLSearchParams(location.search).get('emailId');

    const ageId = new URLSearchParams(location.search).get('ageId');
    const nacionalidadId = new URLSearchParams(location.search).get('nacionalidadId');
    const ocupacionId = new URLSearchParams(location.search).get('ocupacionId');
    const residenciaId = new URLSearchParams(location.search).get('residenciaId');

    const isCrearCursoEnabled = userId === "659ebdeb30afb36655576ee5";
    console.log(userId);

    return (
        <Router>
          <Routes>
            {userId ? (
              <>
                {/* Rutas accesibles solo cuando el usuario está autenticado */}
                <Route
                  path="/cursos"
                  element={
                    <>
                      <Dashboard userId={userId} nameId={nameId} />
                      {/* Pasar userId como prop a AboutUs */}
                    </>
                  }
                />
      
                <Route
                  path="/perfil"
                  element={
                    <>
                      <Dashboard2
                        userId={userId}
                        nameId={nameId}
                        emailId={emailId}
                        ageId={ageId}
                        nacionalidadId={nacionalidadId}
                        ocupacionId={ocupacionId}
                        residenciaId={residenciaId}
                      />
                    </>
                  }
                />
      
                <Route
                  path="/misCursos"
                  element={
                    <>
                      <Dashboard3 userId={userId} />
                    </>
                  }
                />
      
                <Route
                  path="/CrearCurso"
                  element={
                    isCrearCursoEnabled ? (
                      <>
                        <DashboardCrearCurso />
                      </>
                    ) : (
                      <Dashboard userId={userId} nameId={nameId} />
                    )
                  }
                />
      
                <Route
                  path="/continuar"
                  element={
                    <>
                      <Dashboard4 />
                    </>
                  }
                />

                <Route
                  path="/"
                  element={
                    <>
                      <NavBar />
                      <Seccion1 />
                    </>
                  }
                />
                <Route
                  path="/objetivos"
                  element={
                    <>
                      <NavBar />
                      <Objetivos />
                    </>
                  }
                />
      
                <Route
                  path="/ingreso"
                  element={
                    <>
                      <NavBar />
                      <Ingreso />
                    </>
                  }
                />
      
                <Route
                  path="/registro"
                  element={
                    <>
                      <NavBar />
                      <Registro />
                    </>
                  }
                />
                <Route
                  path="/conoceMas"
                  element={
                    <>
                      <NavBar />
                      <Seccion2 />
                    </>
                  }
                />
                <Route
                  path="/queBuscamos"
                  element={
                    <>
                      <NavBar />
                      <Seccion3 />
                    </>
                  }
                />
      
                <Route
                  path="/footer"
                  element={
                    <>
                      <NavBar />
                      <Footer />
                    </>
                  }
                />
              </>
            ) : (
              <>
                {/* Rutas accesibles solo cuando el usuario NO está autenticado */}
                <Route
                  path="/"
                  element={
                    <>
                      <NavBar />
                      <Seccion1 />
                    </>
                  }
                />
                <Route
                  path="/objetivos"
                  element={
                    <>
                      <NavBar />
                      <Objetivos />
                    </>
                  }
                />
      
                <Route
                  path="/ingreso"
                  element={
                    <>
                      <NavBar />
                      <Ingreso />
                    </>
                  }
                />
      
                <Route
                  path="/registro"
                  element={
                    <>
                      <NavBar />
                      <Registro />
                    </>
                  }
                />
                <Route
                  path="/conoceMas"
                  element={
                    <>
                      <NavBar />
                      <Seccion2 />
                    </>
                  }
                />
                <Route
                  path="/queBuscamos"
                  element={
                    <>
                      <NavBar />
                      <Seccion3 />
                    </>
                  }
                />
      
                <Route
                  path="/footer"
                  element={
                    <>
                      <NavBar />
                      <Footer />
                    </>
                  }
                />
              </>
            )}
      
            {/* Otras rutas comunes para usuarios autenticados o no autenticados */}
            {/* ... */}
          </Routes>
        </Router>
      );
};

export default Rutas;
