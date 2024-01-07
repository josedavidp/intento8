import React from 'react';

const CourseDetails = ({ courseInfo, onClose }) => {
    const handleRegistration = () => {
        // Lógica para el registro en el curso
        // Puedes implementar la acción al hacer clic en el botón de registro aquí
    };

    return (
        <div className="bg-white p-8 rounded-md shadow-md">
            <button onClick={onClose} className="mb-4 px-4 py-2 bg-blue text-white rounded-md">
                Regresar
            </button>
            <h1 className="text-2xl font-bold mb-4">{courseInfo.title}</h1>
            <div>
                <img src={courseInfo.image} alt={courseInfo.title} className="mb-4" />
            </div>
            <p>{courseInfo.description}</p>
            <h2>Contenido del Curso</h2>
            <p>{courseInfo.content}</p>
            <h2>Requisitos</h2>
            <p>{courseInfo.requirements}</p>
            <h2>Duración del Curso</h2>
            <p>{courseInfo.duration}</p>
            <button onClick={handleRegistration} className="px-4 py-2 bg-yellow text-blue rounded-md">
                Registrarse en el curso
            </button>
        </div>
    );
};

export default CourseDetails;
