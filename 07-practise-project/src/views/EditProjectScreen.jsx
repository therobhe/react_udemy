import { projects } from "../data/projects.js";

export default function EditProjectScreen({ selectedProjectId }) {
    const activeProject = projects.find((project) => project.id === selectedProjectId);

    return (
        <div className="w-[50rem] mt-16 px-6">
            {activeProject && (
                <>
                    <div className="flex justify-between mb-4">
                        <h1 className="text-3xl font-bold text-stone-600 mb-2">{activeProject.title}</h1>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Delete</button>
                    </div>
                    <div className="mb-4">
                        <p className="mb-4 text-stone-400">{activeProject.dueDate}</p>
                        <p>{activeProject.description}</p>
                    </div>
                    <hr/>
                </>
            )}
        </div>
    );
}
