import React, {useState, useEffect, useRef} from 'react';
import {NavLink, useLocation, Link} from 'react-router-dom';
import Datos from "./Datos";


function Sidebar2({sidebarOpen, setSidebarOpen}) {
    const location = useLocation();
    const {pathname} = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({target}) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });


    return (
        <div>
            {/* Header */}
            <header className="sticky top-0 bg-blue  border-b border-slate-200 dark:border-slate-700 z-30">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 -mb-px">
                        <div className="flex">
                            <button
                                className="text-slate-500 hover:text-slate-600 lg:hidden"
                                aria-controls="sidebar"
                                aria-expanded={sidebarOpen}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSidebarOpen(!sidebarOpen);
                                }}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="5" width="16" height="2"/>
                                    <rect x="4" y="11" width="16" height="2"/>
                                    <rect x="4" y="17" width="16" height="2"/>
                                </svg>
                            </button>
                        </div>

                        {/* Header: Right side */}
                        <div className="flex items-center space-x-3">
                            <hr className="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none"/>
                            {/* UserMenu or any other component */}
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <div>
                <div
                    id="sidebar2"
                    ref={sidebar}
                    className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray2 p-4 transition-all duration-200 ease-in-out ${
                        sidebarOpen ? 'translate-x-0' : '-translate-x-64'
                    }`}
                >
                    {/* ... Rest of the Sidebar code */}
                    <Datos/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar2;
