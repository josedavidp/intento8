import React, { useState } from "react";
import data from "../../../aboutus.json";
import data2 from "../../../aboutus2.json";

function DashboardHam() {
  const [contentToShow, setContentToShow] = useState(null);

  const handleInformationClick = (info) => {
    setContentToShow(info);
  };

  const handleGoBack = () => {
    setContentToShow(null);
  };

  // Agrupar módulos por ID de curso para aboutus.json
  const groupedModules1 = data.reduce((acc, module) => {
    const courseId = module.id;

    if (!acc[courseId]) {
      acc[courseId] = [];
    }

    acc[courseId].push(module);

    return acc;
  }, {});

  // Agrupar módulos por ID de curso para aboutus2.json
  const groupedModules2 = data2.reduce((acc, module) => {
    const courseId = module.id;

    if (!acc[courseId]) {
      acc[courseId] = [];
    }

    acc[courseId].push(module);

    return acc;
  }, {});

  const allGroupedModules = { ...groupedModules1, ...groupedModules2 };

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
              <p>{contentToShow.Descripción || contentToShow.description}</p>
            </>
        ) : (
            Object.keys(allGroupedModules).map((courseId) => (
                <div key={courseId} className="mb-2">
                  {allGroupedModules[courseId].map((module, index) => (
                      <React.Fragment key={index}>
                        <button
                            onClick={() => handleInformationClick(module)}
                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                        >
                          {module.Titulo || module.title}
                        </button>
                        <br/>
                      </React.Fragment>
                  ))}
                </div>
            ))
        )}
      </div>
  );
}

export default DashboardHam;