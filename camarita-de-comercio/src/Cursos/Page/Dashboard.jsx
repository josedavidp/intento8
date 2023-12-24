import React, {useState} from 'react';

import Sidebar from '../Partials/Sidebar';
import Header from '../Partials/Header2';
import AboutUs from "../MisCursos/AboutUs";


function Dashboard() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                <>
                    <div id='aboutUs'>
                        <AboutUs/>
                    </div>
                </>


            </div>
        </div>
    );
}

export default Dashboard;