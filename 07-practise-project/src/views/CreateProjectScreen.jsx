import { useRef } from "react";
import { projects } from "../data/projects.js";
import CreateProjectInput from "../components/CreateProjectInput.jsx";

/**
 * CreateProjectScreen component
 *
 * This component renders a screen for creating a new project. It includes input fields for the project title,
 * description, and due date, and handles form submission to add the new project to the list.
 *
 * @param {Object} props - The properties object.
 * @param {Function} props.handleDefault - The function to handle the default action (e.g., canceling the form).
 *
 * @returns {JSX.Element} The rendered CreateProjectScreen component.
 */
export default function CreateProjectScreen({ handleDefault }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);
  const modalRef = useRef(null);

  /**
   * Handles the form submission to create a new project.
   *
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = projects.length + 1;
    const newProject = {
      id: newId,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dateRef.current.value,
      tasks: []
    };
    projects.push(newProject);

    console.log(newProject);
    modalRef.current.showModal();
  };

  /**
   * Handles the reset action to close the modal and reset the form.
   */
  const handleReset = () => {
    modalRef.current.close();
    handleDefault();
  };

  // Todo: create portal for dialog in own component

  return (
    <div className="flex flex-col lg:items-center px-6">
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="create-action-buttons flex justify-end gap-4">
          <button onClick={handleDefault}>Cancel</button>
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

      <dialog id="create-project-modal"
              className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md text-center"
              ref={modalRef}>
        <p className="mb-4">New project successfully created!</p>
        <form method="dialog">
          <button onClick={handleReset}
                  className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Dismiss
          </button>
        </form>
      </dialog>
    </div>
  );
}