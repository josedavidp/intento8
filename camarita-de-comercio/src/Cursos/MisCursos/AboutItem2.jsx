import React from 'react';
import {Link} from "react-router-dom";

const AboutItem2 = ({ course, onOpenDetails }) => {
    return (
        <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            <img className="transform transition duration-700 hover:scale-125" src={course.image} alt={course.title} />
            <div className="flex mt-6 space-x-3">
                <div className="flex flex-col space-y-3">
                    <h1 className="text-xl text-yellow poppins">{course.title}</h1>
                    <p className="text-sm text-blue poppins">{course.description}</p>
                    <Link to="/continuar">
                        <button className="btn px-8 bg-yellow border-yellow text-blue mt-4 md:mt-0">
                            Continuar con el curso
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutItem2;
