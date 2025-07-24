import { useActionState, useContext } from "react";
import { OpinionsContext } from "../store/opinions-context.jsx";
import Submit from "./Submit.jsx";

export function NewOpinion() {
  const { addOpinion } = useContext(OpinionsContext);

  const submitNewOpinion = async (prevState, formData) => {
    const name = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    let error = [];

    if (name.length < 1) {
      error.push("User name is required.");
    }

    if (title.length < 1) {
      error.push("Title is required.");
    }

    if (body.length < 1) {
      error.push("Body is required.");
    }

    if (error.length > 0) {
      return {
        error,
        enteredData: {
          name,
          title,
          body
        }
      };
    }

    console.log("Sending HTTP request to save opinion...");
    const requestBody = {
      userName: name,
      title,
      body
    };
    await addOpinion(requestBody);

    return { error: null };
  };

  const [formData, formAction, pending] = useActionState(submitNewOpinion, { error: null });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formData.enteredData?.name} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formData.enteredData?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formData.enteredData?.body}></textarea>
        </p>

        {formData.error && (
          <ul className="error-list">
            {formData.error.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        <Submit />

        {/*Solution with pending from useActionState
        <p className="actions">
          <button type="submit" disabled={pending}>
            {pending ? "Sending" : "Submit"}
          </button>
        </p>*/}
      </form>
    </div>
  );
}
