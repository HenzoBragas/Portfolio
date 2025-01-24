import React, { useState } from 'react';
import useProject from '../hooks/useProject';
import '../styles/Projects.css';

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const project = useProject();

    return (
        <div className="projectsWrapper" id="project">
            <h2>PROJECTS</h2>
            <div className="hr"></div>
            <div className="subtitle">
                <p>Here you will find some of the personal and clients projects that i create</p>
            </div>
            <div className="containerProjects">
                {project.map((project) => (
                    <div
                        key={project.id}
                        className="projectItem"
                        onMouseOver={() => setHoveredProject(project.id)}
                        onMouseOut={() => setHoveredProject(null)}
                    >

                        <img src={project.image} alt={project.title} />


                        {hoveredProject === project.id && (
                            <div className="projectOverlay">
                                <p>{project.title}</p>
                                <p>{project.description}</p>
                                <div className="btn-links">
                                    <button onClick={() => window.open(project.github, '_blank')}>
                                        GitHub
                                    </button>
                                    <button onClick={() => window.open(project.live, '_blank')}>
                                        Acessar
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
