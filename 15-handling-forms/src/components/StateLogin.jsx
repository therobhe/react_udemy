import { useState } from "react";

/*
 * State solution:
 * Pro: easy to reset values, no direct access to DOM elements
 * Con: more boilerplate code, state management can get complex with many fields, handleFunctions needed
 * */
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [wasEdited, setWasEdited] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    !formData.email.includes("@") &&
    formData.email.length > 0 &&
    wasEdited.email;

  const passwordIsInvalid = formData.password.length < 3 && wasEdited.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData.email, formData.password);
  };

  const handleInputChange = (value, identifier) => {
    setWasEdited({
      ...wasEdited,
      [identifier]: false,
    });

    setFormData((prevData) => {
      return {
        ...prevData,
        [identifier]: value,
      };
    });
  };

  const handleBlur = (identifier) => {
    setWasEdited((prevState) => {
      return {
        ...prevState,
        [identifier]: true,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={(event) => {
              handleBlur(event.target.name);
            }}
            onChange={(event) => {
              handleInputChange(event.target.value, event.target.name);
            }}
            value={formData.email}
          />
          {emailIsInvalid && (
            <div className="control-error">
              <p>Please enter a valid email adress.</p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={(event) => {
              handleBlur(event.target.name);
            }}
            onChange={(event) => {
              handleInputChange(event.target.value, event.target.type);
            }}
            value={formData.password}
          />
          {passwordIsInvalid && (
            <div className="control-error">
              <p>Password must be at least 3 characters long.</p>
            </div>
          )}
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
