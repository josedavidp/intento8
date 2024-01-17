import React, { useState } from "react";
import data from "../../../aboutus.json";

function DashboardHam() {
  const [contentToShow, setContentToShow] = useState(null);

  const handleInformationClick = (info) => {
    setContentToShow(info);
  };

  const handleGoBack = () => {
    setContentToShow(null);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray p-4 flex-col">
      {contentToShow ? (
        <>
          <button
            onClick={handleGoBack}
            className="text-blue-500 hover:text-blue-700 cursor-pointer mb-2"
          >
            Volver
          </button>
          <h2 className="text-2xl font-bold mb-4">{contentToShow.titulo}</h2>
          <p>{contentToShow.informacion_extra}</p>
          <div dangerouslySetInnerHTML={{ __html: contentToShow.video }} />
        </>
      ) : (
        data.map((module, index) => (
          <div key={index} className="mb-2">
            {Object.keys(module).map((key) => {
              if (key.includes("modulo")) {
                return (
                  <React.Fragment key={key}>
                    <button
                      onClick={() => handleInformationClick(module[key])}
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    >
                      Mostrar Información de {module[key].titulo}
                    </button>
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        ))
      )}
    </div>
  );
}

export default DashboardHam;
