import ProjectSidebar from "./components/ProjectSidebar.jsx";
import ProjectSelectionScreen from "./views/ProjectSelectionScreen.jsx";
import ProjectHeader from "./components/ProjectHeader.jsx";

import { useState } from "react";

function App() {
  const [editProject, setEditProject] = useState(false);
  const [createProject, setCreateProject] = useState(false);

  const handleEdit = () => {
    setEditProject(true);
    setCreateProject(false);
  };

  const handleCreate = () => {
    setCreateProject(true);
    setEditProject(false);
  };

  return (
    <>
      <ProjectHeader />
      <div className="flex">
        <ProjectSidebar handleEdit={handleEdit} handleCreate={handleCreate} />
        <ProjectSelectionScreen
          handleCreate={handleCreate}
          createProject={createProject}
          editProject={editProject}
        />
      </div>
    </>
  );
}

export default App;
