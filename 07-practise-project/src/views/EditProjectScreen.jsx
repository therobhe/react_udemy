import { projects } from "../data/projects.js";
import { useState, useRef, useEffect } from "react";

export default function EditProjectScreen({ selectedProjectId, handleDefault }) {
    const [tasks, setTasks] = useState([]);
    const refNewTask = useRef(null);

    useEffect(() => {
        const activeProject = projects.find((project) => project.id === selectedProjectId);
        if (activeProject) {
            setTasks([...activeProject.tasks]);
        }
    }, [selectedProjectId]);

    const handleAddTask = (e) => {
        e.preventDefault();
        const newTask = refNewTask.current.value;
        if (newTask) {
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            const activeProject = projects.find((project) => project.id === selectedProjectId);
            if (activeProject) {
                activeProject.tasks = updatedTasks; // Update the tasks in the project data
            }
            refNewTask.current.value = "";
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const updatedArray = projects.filter((project) => project.id !== selectedProjectId);
        console.log(updatedArray)
        handleDefault();
    }

    return (
        <div className="w-[50rem] mt-16 px-6">
            {selectedProjectId && (
                <>
                    <div className="project-details">
                        <div className="flex justify-between mb-4">
                            <h1 className="text-3xl font-bold text-stone-600 mb-2">{projects.find((project) => project.id === selectedProjectId).title}</h1>
                            <button onClick={handleDelete} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Delete</button>
                        </div>
                        <div className="mb-4">
                            <p className="mb-4 text-stone-400">{projects.find((project) => project.id === selectedProjectId).dueDate}</p>
                            <p>{projects.find((project) => project.id === selectedProjectId).description}</p>
                        </div>
                    </div>

                    <hr/>

                    <div className="tasks my-4">
                        <h2 className="text-2xl font-bold text-stone-600 mb-4">Tasks</h2>
                        <form onSubmit={handleAddTask} className="add-task-section flex mb-4">
                            <input ref={refNewTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200 me-2"/>
                            <button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Add task</button>
                        </form>
                        {tasks.length > 0 ? (
                            <ul>
                                {tasks.map((task, index) => (
                                    <li key={index} className="task">
                                        <input type="checkbox" id={`task-${index}`} name={`task-${index}`} className="me-2"/>
                                        <label htmlFor={`task-${index}`}>{task}</label>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>This project does not have any tasks yet!</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}