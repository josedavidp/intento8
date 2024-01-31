import React, { useState } from 'react';
import TitleCard from './TitleCard';
import InputText from './ImputText';
import Swal from 'sweetalert2';

function CrearCurso() {
    const [courseData, setCourseData] = useState({
        image: 'https://significado.net/wp-content/uploads/2015/05/Econom%C3%ADa.jpg',
        icon: 'src/images/EconomiaBasicaIcono.png',
        title: 'Economía Básica 1',
        description: 'Un curso de economía básica te introduce a conceptos fundamentales como oferta, demanda, precios, mercados y cómo funcionan los sistemas económicos. Ayuda a comprender cómo se toman decisiones en la producción, distribución y consumo de bienes y servicios.',
        content: 'El contenido del curso incluye...'
    });

    const [moduleToDelete, setModuleToDelete] = useState(null);

    const [modules, setModules] = useState([]);

    const addNewModule = () => {
        setModules((prevModules) => [...prevModules, {}]);
    };

    const onInputChange = ({ name, value }) => {
        setCourseData({
            ...courseData,
            [name]: value,
        });
    };

    const onModuleInputChange = (moduleNumber, { fieldName, value }) => {
        setModules((prevModules) => {
            const newModules = [...prevModules];
            newModules[moduleNumber - 1] = {
                ...newModules[moduleNumber - 1],
                [fieldName]: value,
            };
            return newModules;
        });
    };

    const deleteModule = () => {
        if (modules.length > 0) {
            setModules((prevModules) => prevModules.slice(0, -1));
            setModuleToDelete(null);
        }
    };

    const createCourse = async () => {
        try {
            console.log(courseData);

            const response = await fetch('http://localhost:4001/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData),
            });

            if (!response.ok) {
                console.error('Error al crear el curso:', response.statusText);
                return;
            }

            const courseDataJson = await response.json();
            const idCurso = courseDataJson.idCurso;

            const formattedModules = modules.map((module) => {
                return {
                    titulo: module.titulo.value,
                    video: module.video.value,
                    informacion_extra: module.informacion_extra.value,
                    // Puedes agregar más campos si los necesitas                   
                };
                
            });

            console.log('Datos de los módulos antes de la creación:', formattedModules);

            const modulesResponse = await fetch(`http://localhost:4001/api/events/${idCurso}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedModules),
            });

            if (modulesResponse.ok) {
                
                Swal.fire({
                    icon: "success",
                    title: "Curso y módulos creados con éxito",
                    showConfirmButton: false,
                    timer: 1500  // Ajusta el tiempo según |sea necesario
                  });

            } else {
                console.error('Error al crear los módulos:', modulesResponse.statusText);
            }
        } catch (error) {
            console.error('Error al crear el curso:', error.message);
        }
    };


    return (
        <>
            <TitleCard title="Creación del nuevo curso" topMargin="mt-2">

                <InputText
                    labelTitle="Título del Curso"
                    placeholder={courseData.title}
                    updateFormValue={onInputChange}
                    updateType="title"
                />

                <InputText
                    labelTitle="Url de la imagen"
                    placeholder={courseData.image}
                    updateFormValue={onInputChange}
                    updateType="image"
                />

                <InputText
                    labelTitle="Descripción del Curso"
                    placeholder={courseData.description}
                    updateFormValue={onInputChange}
                    updateType="description"
                />
                <InputText
                    labelTitle="Contenido del Curso"
                    placeholder={courseData.content}
                    updateFormValue={onInputChange}
                    updateType="content"
                />

                <div className="divider mt-2"></div>

                {modules.map((module, index) => (
                    <div key={index}>
                        <InputText
                            labelTitle={`Título del módulo ${index + 1}`}
                            defaultValue={module.titulo}
                            updateFormValue={(value) =>
                                onModuleInputChange(index + 1, {fieldName: 'titulo', value})
                            }
                            updateType="titulo"
                        />

                        <InputText
                            labelTitle={`Url del video del módulo ${index + 1}`}
                            defaultValue={module.video}
                            updateFormValue={(value) =>
                                onModuleInputChange(index + 1, {fieldName: 'video', value})
                            }
                            updateType="video"
                        />

                        <InputText
                            labelTitle={`Descripción del módulo ${index + 1}`}
                            defaultValue={module.informacion_extra}
                            updateFormValue={(value) =>
                                onModuleInputChange(index + 1, {fieldName: 'informacion_extra', value})
                            }
                            updateType="informacion_extra"
                        />

                        <div className="divider mt-2"></div>
                    </div>
                ))}
                <div className="divider mt-2"></div>

                <div className="d-flex justify-content-between">

                <button
                    className="bg-yellow text-blue border border-yellow rounded-md 
                    py-2 px-4 block mx-auto hover:bg-blue hover:border-blue hover:text-white focus:outline-none"
                    onClick={addNewModule}
                >
                    
                    Agregar nuevo módulo
                </button>

                <br/>

                    <button
                        className="bg-danger text-blue border border-blue rounded-md
                    py-2 px-4 block mx-auto hover:bg-red hover:border-red hover:text-white focus:outline-none"
                        onClick={deleteModule}
                    >
                        Eliminar último módulo
                    </button>
                    </div>


                <div className="mt-16">
                    <button
                        className="bg-yellow text-blue border border-yellow rounded-md 
                    py-2 px-4 float-right hover:bg-blue hover:border-blue hover:text-white focus:outline-none"
                        onClick={createCourse}
                    >
                        Crear nuevo curso
                    </button>
                </div>
            </TitleCard>
        </>
    );
}

export default CrearCurso;