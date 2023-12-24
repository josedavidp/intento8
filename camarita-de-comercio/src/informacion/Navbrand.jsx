import React from 'react'
import Logo from '../images/logoSeccionFooter.png';

const NavBrand = () => {
    return (
        <div className="flex items-center space-x-4">
            <img className="w-80 select-none" src={Logo} alt="logo"/>
            <h1 className="font-semibold text-blue-600 brand-font select-none">Como gremio buscamos siempre el
                progreso y beneficio para todos nuestros socios, seguimos trabajando para el engrandecimiento de nuestra
                ciudad, provincia y país.</h1>
        </div>
    )
}

export default NavBrand