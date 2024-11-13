import noProjectImage from "../assets/no-projects.png";

export default function EmptyProjectScreen({ handleCreate }) {
  return (
    <div className="w-[50rem] mt-16 flex flex-col items-center">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="Clipboard Art with Pen"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Projects Selected
      </h2>
      <p className="text-stone-600 mb-4">
        Select a project or get started with a new one
      </p>
      <button
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        onClick={handleCreate}
      >
        Create new project
      </button>
    </div>
  );
}
