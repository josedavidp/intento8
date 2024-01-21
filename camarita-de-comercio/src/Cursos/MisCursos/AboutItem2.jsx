import React from 'react';
import {Link} from "react-router-dom";

const AboutItem2 = ({ course, onOpenDetails }) => {
    return (
        <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            <h1 className="text-2xl text-yellow poppins font-semibold">{course.title}</h1>
            <img
                className="object-cover w-auto h-48 transform transition duration-700 hover:scale-110 rounded-2xl mx-auto"
                src={course.image} alt={course.title}/>
            <div className="flex mt-6 space-x-3">
                <div className="flex flex-col space-y-3">
                    <p className="text-sm text-blue poppins">{course.description}</p>
                    <Link to="/continuar">
                        <button className="bg-yellow text-blue border border-yellow rounded-md
                    py-2 px-4 float-right hover:bg-blue hover:border-blue hover:text-white focus:outline-none">
                            Continuar con el curso
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutItem2;