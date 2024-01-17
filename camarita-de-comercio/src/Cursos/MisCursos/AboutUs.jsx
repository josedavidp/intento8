import React, { useEffect, useState } from 'react';
import AboutItem from './AboutItem';
import CourseDetails from '../Informacion/Informacion';

//AQUI SE CONSUME EL JSON 

const AboutUs = ({ userId }) => {
    const [aboutData, setAboutData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    /*useEffect(() => {
        fetch('/aboutus.json')
            .then(res => res.json())
            .then(data => setAboutData(data));
    }, []);*/

    useEffect(() => {

      //  console.log('userId:', userId); 

        fetch('http://localhost:4001/api/events')
            .then(res => res.json())
            .then(data => setAboutData(data.eventos))  // Establecer aboutData en data.eventos
            .catch(error => console.error('Error fetching events:', error));
    }, []);
    

    const openCourseDetails = (course) => {
        setSelectedCourse(course);
    };

    const closeCourseDetails = () => {
        setSelectedCourse(null);
    };


    const handleCourseRegistration = async (course) => {
        try {
          const response = await fetch('http://localhost:4001/api/registro', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: userId, 
              courseData: course,
            }),
          });
      
          if (response.ok) {
            
            console.log('Registro exitoso', response.data);
            alert('Registro de Curso exitoso');
          } else {
           
            console.error('Error en el registro:', response.statusText);
          }
        } catch (error) {
          
          console.error('Error al registrar el curso:', error.message);
        }
      };
      

    


    return (
        <div className="max-w-screen-xl h-full mx-auto my-12 px-6 bg-gray">
            <h1 className="text-4xl text-yellow poppins pb-4">Cursos</h1>
            <h2 className="text-blue text-sm poppins w-2/8">
                Bienvenido a nuestra plataforma de aprendizaje! Nuestra amplia selección de cursos está diseñada para impulsar tu crecimiento personal y profesional. Desde cursos introductorios hasta programas avanzados, ofrecemos una variedad de opciones para satisfacer tus necesidades educativas y metas de desarrollo.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-8">
                {aboutData.map(item => (
                    <AboutItem key={item.id} course={item} onOpenDetails={openCourseDetails} />
                ))}
            </div>

            {selectedCourse && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80"></div>
                    <div className="max-w-screen-xl bg-white p-8 rounded-md shadow-md absolute z-10">
                        <button onClick={closeCourseDetails} className="mb-4 px-4 py-2 bg-blue text-white rounded-md">
                            Regresar
                        </button>
                        <h1 className="text-2xl mb-4 text-black">{selectedCourse.description}</h1>
                        <div>
                            <img src={selectedCourse.image} alt={selectedCourse.title} className="mb-4" />
                        </div>
                        <button onClick={() => handleCourseRegistration(selectedCourse)} className="px-4 py-2 bg-yellow text-blue rounded-md">
                                    Registrarse en el curso
                                    </button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutUs;
