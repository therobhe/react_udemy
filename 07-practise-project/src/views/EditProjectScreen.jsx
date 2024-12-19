import { projects } from "../data/projects.js";

export default function EditProjectScreen({ selectedProjectId }) {
    const activeProject = projects.find((project) => project.id === selectedProjectId);

    return (
        <div>
            <h1>Edit Project Screen</h1>
            {activeProject && (
                <div>
                    <h2>{activeProject.title}</h2>
                    <p>{activeProject.description}</p>
                </div>
            )}
        </div>
    );
}
