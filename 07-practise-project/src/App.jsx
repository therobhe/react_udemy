import ProjectSidebar from "./components/ProjectSidebar.jsx";
import ProjectSelectionScreen from "./views/ProjectSelectionScreen.jsx";
import ProjectHeader from "./components/ProjectHeader.jsx";

import { useState } from "react";

function App() {
  const [editProject, setEditProject] = useState(false);
  const [createProject, setCreateProject] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleEdit = (id) => {
    setEditProject(true);
    setCreateProject(false);
    setSelectedProjectId(id);
  };

  const handleCreate = () => {
    setCreateProject(true);
    setEditProject(false);
    setSelectedProjectId(null);
  };

  const handleDefault = () => {
    setEditProject(false);
    setCreateProject(false);
    setSelectedProjectId(null);
  }

  return (
    <>
      <ProjectHeader />
      <div className="flex">
        <ProjectSidebar handleEdit={handleEdit} handleCreate={handleCreate} />
        <ProjectSelectionScreen
          handleCreate={handleCreate}
          createProject={createProject}
          editProject={editProject}
          handleDefault={handleDefault}
          selectedProjectId={selectedProjectId}
        />
      </div>
    </>
  );
}

export default App;
