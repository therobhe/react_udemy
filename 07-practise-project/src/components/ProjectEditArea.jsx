import EmptyProjectScreen from "../Views/EmptyProjectScreen.jsx";
import CreateProjectScreen from "../Views/CreateProjectScreen.jsx";
import EditProjectScreen from "../Views/EditProjectScreen.jsx";

/**
 * Renders the ProjectEditArea component
 *
 * @return {JSX.Element} A JSX element that includes a placeholder
 * message and a button for creating a new project.
 */
export default function ProjectEditArea({
  handleCreate,
  createProject,
  editProject,
}) {
  const activeScreen = createProject ? (
    <CreateProjectScreen />
  ) : editProject ? (
    <EditProjectScreen />
  ) : (
    <EmptyProjectScreen handleCreate={handleCreate} />
  );

  return <main className="h-screen my-8 flex gap-8">{activeScreen}</main>;
}
