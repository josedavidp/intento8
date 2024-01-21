import React, {useState} from 'react';

import Sidebar from '../Partials/Sidebar';
import Header from '../Partials/Header2';
import PerfilInsertion from "./PerfilInsertion";


function Dashboard2({userId,nameId,emailId,ageId,nacionalidadId,
    ocupacionId,residenciaId}) 
    {


    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-white ">

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                <>
                    <div id='perfil bg-white'>
                        <PerfilInsertion userId={userId} nameId={nameId} emailId={emailId} ageId={ageId}nacionalidadId={nacionalidadId}
                            ocupacionId={ocupacionId}residenciaId={residenciaId}/>
                    </div>
                </>


            </div>
        </div>
    );
}

export default Dashboard2;