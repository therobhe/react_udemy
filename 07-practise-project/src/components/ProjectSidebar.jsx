import { projects } from "../data/projects.js";
import { useEffect, useState } from "react";
import ProjectList from "./ProjectList.jsx";

/**
 * Project Sidebar - List of available projects that enables editing and new creation of projects
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProjectSidebar({ handleEdit, handleCreate }) {
  const [hasProjects, setHasProjects] = useState(false);

  useEffect(() => {
    if (projects.length > 0) {
      setHasProjects(true);
    }
  }, []);

  return (
    <aside className="p-6 bg-stone-900 text-stone-50 rounded-r-xl w-1/3">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        onClick={handleCreate}
      >
        + Add Project
      </button>

      {hasProjects && (
        <ProjectList projects={projects} handleEdit={handleEdit} />
      )}
    </aside>
  );
}
