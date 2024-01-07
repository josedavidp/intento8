import React from 'react';

const AboutItem = ({ course, onOpenDetails }) => {
    return (
        <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            <img className="transform transition duration-700 hover:scale-125" src={course.image} alt={course.title} />
            <div className="flex mt-6 space-x-3">
                <div>
                    <img src={course.icon} alt={course.title} className="w-36" />
                </div>
                <div className="flex flex-col space-y-3">
                    <h1 className="text-xl text-yellow poppins">{course.title}</h1>
                    <p className="text-sm text-blue poppins">{course.description}</p>
                    <button onClick={() => onOpenDetails(course)} className="btn px-8 bg-yellow border-yellow text-blue">
                        Información
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutItem;
