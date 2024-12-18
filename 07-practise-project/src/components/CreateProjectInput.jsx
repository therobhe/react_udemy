import React from "react";

const CreateProjectInput = React.forwardRef(({type}, ref) => {
    {
        const displayType = type.toUpperCase();

        return (
            <div className={`create-${type}-box`}>
                <label className="text-sm font-bold uppercase text-stone-500"
                       htmlFor="create-${type}-input">{displayType}</label>
                <input
                    className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                    type={type === "date" ? "date" : "text"}
                    ref={ref}
                    required={true}
                    name={`create-${type}-input`}
                    id={`create-${type}-input`}/>
            </div>
        );
    }
});

export default CreateProjectInput;