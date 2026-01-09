import React from 'react';

function About() {
    return (
        <section className="about-bg">
            <div className="row">
                <h2>About this project</h2>
                <p>This is a beginner-friendly Todo application built using React.js and Vite, styled with Tailwind CSS.
                    The project features a clean and responsive user interface with separate pages for introduction and task management. 
                    Users can add, complete, and delete tasks, with smooth navigation handled using React Router. 
                    The app follows a component-based architecture and leverages React Hooks for efficient state management.
                </p>
            </div>
        </section>
    );
}

export default About;