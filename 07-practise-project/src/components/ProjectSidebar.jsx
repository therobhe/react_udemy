import { projects } from "../data/projects.js";
import { useEffect, useState } from "react";

/**
 * Project Sidebar - List of available projects that enables editing and new creation of projects
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProjectSidebar() {
  const [hasProjects, setHasProjects] = useState(false);

  useEffect(() => {
    if (projects.length > 0) {
      setHasProjects(true);
    }
  }, []);

  /**
   * Gets the entries stored in the projects array
   * @type {JSX.Element}
   */
  const projectList = (
    <ul className="mt-8">
      {projects.map((project) => (
        <li key={project.id}>
          <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
            {project.title}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
        + Add Project
      </button>

      {hasProjects && projectList}
    </aside>
  );
}
