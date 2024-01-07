import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header2';
import Sidebar2 from './Sidebar2';
import data from '../../../aboutus.json';

function DashboardHam() {
    const [sidebarOpen1, setSidebarOpen1] = useState(false);
    const [sidebarOpen2, setSidebarOpen2] = useState(false);
    const [contentToShow, setContentToShow] = useState(null);

    const handleInformationClick = (info) => {
        setContentToShow(info);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray">
            {/* First Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen1} setSidebarOpen={setSidebarOpen1} />
            <Sidebar2 sidebarOpen={sidebarOpen2} setSidebarOpen={setSidebarOpen2} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/* Site header */}
                <Header sidebarOpen={sidebarOpen1} setSidebarOpen={setSidebarOpen1} />

                {/* Content display area */}
                <div className="p-4">
                    {contentToShow && (
                        <>
                            <h2 className="text-2xl font-bold mb-4">{contentToShow.titulo}</h2>
                            <p>{contentToShow.informacion_extra}</p>
                            <div dangerouslySetInnerHTML={{ __html: contentToShow.video }} />
                        </>
                    )}
                </div>

                {/* Example buttons to trigger information display */}
                {data.map((module, index) => (
                    <div key={index}>
                        {Object.keys(module).map((key) => {
                            if (key.includes('modulo')) {
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
                ))}
            </div>
        </div>
    );
}

export default DashboardHam;
