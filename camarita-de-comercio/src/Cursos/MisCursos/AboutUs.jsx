import React, {useEffect, useState} from 'react';
import AboutItem from './AboutItem';

const AboutUs = ({userId}) => {
    const [aboutData, setAboutData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

  /*  useEffect(() => {
        fetch('/aboutus.json')
            .then(res => res.json())
            .then(data => setAboutData(data));
    }, []);*/
    useEffect(() => {

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
                Bienvenido a nuestra plataforma de aprendizaje! Nuestra amplia selección de cursos está diseñada para
                impulsar tu crecimiento personal y profesional. Desde cursos introductorios hasta programas avanzados,
                ofrecemos una variedad de opciones para satisfacer tus necesidades educativas y metas de desarrollo.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-8">
                {aboutData.map(item => (
                    <AboutItem key={item.id} course={item} onOpenDetails={openCourseDetails}/>
                ))}
            </div>

            {selectedCourse && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div
                        onClick={closeCourseDetails}
                        className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 cursor-pointer"
                        style={{backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)'}}
                    ></div>
                    <div className="max-w-screen-xl bg-white p-8 rounded-md shadow-md absolute z-10">
                        <button onClick={closeCourseDetails} className="mb-4 px-4 py-2 bg-blue text-white rounded-md">
                            Regresar
                        </button>
                        <h1 className="text-4xl text-yellow font-semibold">{selectedCourse.title}</h1>
                        <img src={selectedCourse.image} alt={selectedCourse.title} className="mb-4 block mx-auto"/>
                        <h1 className="text-3xl text-yellow font-semibold">Descripción</h1>
                        <h1 className="text-xl mb-4 text-blue">{selectedCourse.description}</h1>
                        <h1 className="text-2xl text-yellow font-semibold">Contenido</h1>
                        <h1 className="text-xl mb-4 text-blue">{selectedCourse.content}</h1>

                        <button onClick={() => handleCourseRegistration(selectedCourse)}
                                className="px-4 py-2 bg-yellow text-blue rounded-md float-right">
                            Registrarse en el curso
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutUs;