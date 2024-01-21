import React, { useState, useEffect } from "react";

function DashboardHam() {
  const [contentToShow, setContentToShow] = useState(null);
  const [aboutData, setAboutData] = useState([]);
  const idCurso = new URLSearchParams(location.search).get('idCurso');

  const handleInformationClick = (info) => {
    setContentToShow(info);
  };

  const handleGoBack = () => {
    setContentToShow(null);
  };

  useEffect(() => {
    fetch(`http://localhost:4001/api/events/${idCurso}`)
      .then(res => res.json())
      .then(data => setAboutData(data.cursos))
      .catch(error => console.error('Error fetching courses:', error));
  }, [idCurso]);

  console.log( aboutData);

  return (
    <div className="flex h-screen overflow-hidden bg-gray p-4 flex-col">
      {contentToShow ? (
        <>
          <button
            onClick={handleGoBack}
            className="bg-yellow text-blue border border-yellow rounded-md
                      py-2 px-4 hover:bg-blue hover:border-blue hover:text-white focus:outline-none"
          >
            Volver
          </button>
          <h2 className="text-2xl font-bold mb-4">{contentToShow.Titulo || contentToShow.titulo}</h2>
          <div dangerouslySetInnerHTML={{ __html: contentToShow.Video || contentToShow.video || "" }} />
          <p>{contentToShow.Informacion_extra || contentToShow.informacion_extra}</p>
        </>
      ) : (
        <div className="mb-2">
          {aboutData.map((course, index) => {
            console.log("course1:", course.idCurso);
            console.log("course:", idCurso);
            // Comparar el id del curso con el idCurso seleccionado
            if (course.idCurso === idCurso) {   
              
              console.log("Mostrando curso:", course);

              return (
                <React.Fragment key={index}>
                  <button
                    onClick={() => handleInformationClick(course)}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  >
                    {course.titulo || course.title}
                  </button>
                  <br />
                </React.Fragment>
              );
            } else {
              // Omitir cursos con diferentes idCurso
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default DashboardHam;