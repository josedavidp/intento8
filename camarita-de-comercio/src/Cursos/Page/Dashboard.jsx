import React, {useState} from 'react';

import Sidebar from '../Partials/Sidebar';
import Header from '../Partials/Header2';
import AboutUs from "../MisCursos/AboutUs";


function Dashboard({userId,nameId}) {
    

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-gray">

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} userId={userId} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} nameId={nameId}/>
                <>
                    <div id='aboutUs'>
                        <AboutUs userId={userId} />
                    </div>
                </>


            </div>
        </div>
    );
}

export default Dashboard;