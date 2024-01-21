import React from 'react';

const AboutItem = ({ course, onOpenDetails }) => {
    return (
        <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            <img className="object-cover w-full h-48 transform transition duration-700 hover:scale-105 rounded-2xl" src={course.image} alt={course.title} />
            <div className="flex mt-6 space-x-3">
                <div>
                    <img src={course.icon} alt={course.title} className="w-36" />
                </div>
                <div className="flex flex-col space-y-3">
                    <h1 className="text-xl text-yellow poppins">{course.title}</h1>
                    <p className="text-sm text-blue poppins">{course.description}</p>
                    <button onClick={() => onOpenDetails(course)} className="bg-yellow text-blue border border-yellow rounded-md
                    py-2 px-4 float-right hover:bg-blue hover:border-blue hover:text-white focus:outline-none">

                        Información
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutItem;