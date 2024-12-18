import {useRef} from "react";
import { projects } from "../data/projects.js";
import CreateProjectInput from "../components/CreateProjectInput.jsx";

export default function CreateProjectScreen() {
    // Create refs for each input
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dateRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueData: dateRef.current.value,
            tasks: []
        };
        projects.push(newProject);
    };

    const handleAbort = (e) => {
       e.preventDefault();
       console.log('Abort');
   }

    return (
        <form className="mt-4 text-right" onSubmit={handleSubmit}>
            <div className="create-action-buttons">
                <button onClick={handleAbort}>Cancel</button>
                <button type="submit"
                    className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Save
                </button>
            </div>
            <div className="create-input-area">
                <CreateProjectInput type="title" ref={titleRef} />
                <CreateProjectInput type="description" ref={descriptionRef} />
                <CreateProjectInput type="date" ref={dateRef} />
            </div>
        </form>
    );
}
