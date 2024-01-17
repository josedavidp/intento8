import React, { useEffect, useState } from 'react';
import AboutItem2 from './AboutItem2';

const MisCursos = ({userId}) => {
    const [aboutData, setAboutData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);



  /*  useEffect(() => {
        fetch('/aboutus.json')
            .then(res => res.json())
            .then(data => setAboutData(data));
        }, []);
*/


    useEffect(() => {
        const url = userId ? `http://localhost:4001/api/registro/mis-cursos/${userId}` : 'http://localhost:4001/api/events';
      
        fetch(url)
          .then(res => res.json())
          .then(data => setAboutData(data.cursos || []))  // Establecer aboutData en data.cursos si está disponible
          .catch(error => console.error('Error fetching courses:', error));
      }, [userId]);


    const openCourseDetails = (course) => {
        setSelectedCourse(course);
    };

    const closeCourseDetails = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="max-w-screen-xl h-full mx-auto my-12 px-6 bg-gray">
            <h1 className="text-4xl text-yellow poppins pb-4">Mis Cursos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-20 mt-8">
                {aboutData.map(item => (
                    <AboutItem2 key={item.id} course={item} onOpenDetails={openCourseDetails} />
                ))}
            </div>

            {selectedCourse && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80"></div>
                </div>
            )}
        </div>
    );
};

export default MisCursos;