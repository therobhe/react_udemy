import ProjectSidebar from "./components/ProjectSidebar.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import ProjectHeader from "./components/ProjectHeader.jsx";
import { useState } from "react";

function App() {
  const [editingActive, setEditingActive] = useState(false);

  // callback to setEditing from inside the components
  const handleEdit = () => {
    console.log("edit clicked");
  };

  return (
    <>
      <ProjectHeader />
      <div className="flex">
        <ProjectSidebar handleEdit={handleEdit} />
        <ProjectDetails handleEdit={handleEdit} />
      </div>
    </>
  );
}

export default App;
