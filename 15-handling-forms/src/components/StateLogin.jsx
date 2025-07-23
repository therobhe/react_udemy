import { useState } from "react";
import Input from "./Input";

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

  const emailIsInvalid = !formData.email.includes("@") && formData.email.length > 0 && wasEdited.email;

  const passwordIsInvalid = formData.password.trim().length < 6 && wasEdited.password;

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
    <form onSubmit={handleSubmit} noValidate={true}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label={"Email"}
          id={"email"}
          type={"email"}
          name={"email"}
          error={emailIsInvalid && "Please enter a valid email address."}
          onBlur={(event) => {
            handleBlur(event.target.name);
          }}
          onChange={(event) => {
            handleInputChange(event.target.value, event.target.name);
          }}
          value={formData.email}
        />

        <Input
          label={"Password"}
          id={"password"}
          type={"password"}
          name={"password"}
          error={passwordIsInvalid && "Passwort must be at least 6 characters long."}
          onBlur={(event) => {
            handleBlur(event.target.name);
          }}
          onChange={(event) => {
            handleInputChange(event.target.value, event.target.name);
          }}
          value={formData.password}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
