import React, {useState} from 'react';
import data from '../../../aboutus.json';

function Datos() {
    const [selectedModule, setSelectedModule] = useState(null);

    const handleInformationClick = (info) => {
        setSelectedModule(info);
    };

    return (
        <>
            <nav
                className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div
                    className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {data.map((module, index) => (
                        <div key={index}>
                            {Object.keys(module).map((key) => {
                                if (key.includes('modulo')) {
                                    return (
                                        <React.Fragment key={key}>
                                            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                                                {module[key].titulo}
                                            </h6>
                                            <button
                                                onClick={() => handleInformationClick(module[key].informacion_extra)}
                                                className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                            >
                                                INFORMACION
                                            </button>
                                            <button
                                                onClick={() => handleInformationClick(module[key].video)}
                                                className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                            >
                                                VIDEOS
                                            </button>
                                        </React.Fragment>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    ))}
                </div>
            </nav>
            <div className="content-area">
                {selectedModule && (
                    <div>
                        {/* Render the selected module information or video */}
                        {typeof selectedModule === 'string' ? (
                            <iframe
                                width="560"
                                height="315"
                                src={selectedModule}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <p>{selectedModule}</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default Datos;
