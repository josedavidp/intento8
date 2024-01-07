import React, { useState } from 'react';
import Sidebar from '../Partials/Sidebar';
import Header from '../Partials/Header2';
import Sidebar2 from '../Partials/Sidebar2'; // Reemplaza con el nombre correcto de tu Sidebar2

function Dashboard4() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-gray">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <>
                    {/* Introduce tus nuevos Headers y Sidebars aquí */}
                    <Sidebar2 />
                </>
            </div>
        </div>
    );
}

export default Dashboard4;
