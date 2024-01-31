import React, { useState, useEffect } from "react";

function DashboardHam() {
  const [contentToShow, setContentToShow] = useState(null);
  const [aboutData, setAboutData] = useState([]);
  const idCurso = new URLSearchParams(location.search).get("idCurso");
  const titleId = new URLSearchParams(location.search).get("titleId");
 
  const handleInformationClick = (info) => {
    setContentToShow(info);
  };

  const handleGoBack = () => {
    setContentToShow(null);
  };

  useEffect(() => {
    fetch(`http://localhost:4001/api/events/${idCurso}`)
      .then((res) => res.json())
      .then((data) => setAboutData(data.cursos))
      .catch((error) => console.error("Error fetching courses:", error));
  }, [idCurso]);

  console.log(aboutData);

  return (
    <div className="flex h-screen overflow-hidden bg-gray p-4 flex-col">
      {contentToShow ? (
        <>
          <button
            onClick={handleGoBack}
            className="bg-blue text-white border border-blue rounded-md
                      py-2 px-4 hover:bg-yellow hover:border-yellow hover:text-white focus:outline-none"
          >
            Volver
          </button>
          <h2 className="mt-2 text-yellow text-2xl font-bold mb-4 justify-center mx-auto">
            {contentToShow.Titulo || contentToShow.titulo}
          </h2>
          <div
            className="mx-auto"
            dangerouslySetInnerHTML={{
              __html: contentToShow.Video || contentToShow.video || "",
            }}
          />
          <p className="mt-2 text-blue text-xl font-semibold">
            {contentToShow.Informacion_extra || contentToShow.informacion_extra}
          </p>
        </>
      ) : (
        <div className="mb-2">      
          <h2 className="text-2xl text-yellow poppins font-bold">{titleId}</h2>
          <div className="divider mt-2"></div>

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
                    className="bg-blue text-white border border-blue rounded-md
                    py-2 px-4 block mx-auto hover:bg-yellow hover:border-yellow hover:text-blue focus:outline-none float-left"
                  >
                    {course.titulo || course.title}
                  </button>
                  
                  <br />
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
