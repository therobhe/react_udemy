/**
 * Renders a list of projects with each project displayed as a button.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.projects - An array of project objects to be displayed.
 * @return {JSX.Element} A list of projects rendered as buttons.
 */
export default function ProjectList({ projects, handleEdit }) {
  return (
    <ul className="mt-8">
      {projects.map((project) => (
        <li key={project.id}>
          <button
            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
            onClick={handleEdit}
          >
            {project.title}
          </button>
        </li>
      ))}
    </ul>
  );
}