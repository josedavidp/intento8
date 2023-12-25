import React, { useEffect, useState } from 'react'
import AboutItem from './AboutItem'

const AboutUs = () => {
    const [aboutData, setAboutData] = useState([])

    //fetching about us data
    useEffect(() => {
        fetch('/aboutus.json')
        .then(res => res.json())
            .then(data => setAboutData(data))
    },[])
    return (
        <div className="max-w-screen-xl h-full mx-auto my-12 px-6 bg-gray">
            <h1 className="text-4xl text-yellow poppins pb-4">Cursos</h1>
            <h2 className="text-blue text-sm poppins w-2/8">Bienvenido a nuestra plataforma de aprendizaje! Nuestra amplia selección de cursos está diseñada para impulsar tu crecimiento personal y profesional. Desde cursos introductorios hasta programas avanzados, ofrecemos una variedad de opciones para satisfacer tus necesidades educativas y metas de desarrollo.</h2>

            {/* about us cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-8">
                {aboutData.map(item => (
                    <AboutItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default AboutUs
