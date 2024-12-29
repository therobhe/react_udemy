import React from "react";

/**
 * CreateProjectInput component
 *
 * This component renders an input field with a label, styled according to the type of input.
 * It uses React.forwardRef to pass a ref to the input element.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.type - The type of the input field (e.g., "text", "date").
 * @param {React.Ref} ref - The ref to be forwarded to the input element.
 *
 * @returns {JSX.Element} The rendered input field with a label.
 */
const CreateProjectInput = React.forwardRef(({ type }, ref) => {
  {
    const displayType = type.toUpperCase();

    return (
      <div className={`create-${type}-box my-4`}>
        <label className="text-sm font-bold uppercase text-stone-500"
               htmlFor="create-${type}-input">{displayType}</label>
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type={type === "date" ? "date" : "text"}
          ref={ref}
          required={true}
          name={`create-${type}-input`}
          id={`create-${type}-input`} />
      </div>
    );
  }
});

export default CreateProjectInput;