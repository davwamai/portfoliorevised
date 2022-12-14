import React from "react";

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-10
        pb-6">
            <h1 className="text-4xl md:text-7x1
            dark:text-white 
            mb-1 md:mb-3 font-bold">David</h1>
            <p className="text-base md:text-xl mb-3
            font-medium">
                Aspiring Software Engineer & Developer
            </p>
            <p className="text-sm max-w-xl mb-6
            font-bold">I am a Computer Science and Mathematics student at the University of South Carolina. I love all things CS and Math related and am always looking for new ways to improve my skills in either.
            I am currently looking for research and internship opportunities for the Summer of 2023. If you have any questions or are inquiring about private math tutoring, please do not hesitate to message me via the contact form below :) </p>
        </div>
    )
}

export default Intro;