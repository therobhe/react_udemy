import EmptyProjectScreen from "./EmptyProjectScreen.jsx";
import CreateProjectScreen from "./CreateProjectScreen.jsx";
import EditProjectScreen from "./EditProjectScreen.jsx";

/**
 * Renders the ProjectSelectionScreen component
 *
 * @return {JSX.Element} A JSX element that includes a placeholder
 * message and a button for creating a new project.
 */
export default function ProjectSelectionScreen({
                                                   handleCreate,
                                                   createProject,
                                                   editProject,
                                                   handleDefault,
                                                   selectedProjectId
                                               }) {

    const activeScreen = createProject ? (
        <CreateProjectScreen handleDefault={handleDefault}/>
    ) : editProject ? (
        <EditProjectScreen selectedProjectId={selectedProjectId}/>
    ) : (
        <EmptyProjectScreen handleCreate={handleCreate}/>
    );

    return <main className="h-screen my-8 flex gap-8">{activeScreen}</main>;
}
