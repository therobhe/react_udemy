import Input from "./Input";
import useInput from "../../hooks/useInput.js";

/*
 * State solution:
 * Pro: easy to reset values, no direct access to DOM elements
 * Con: more boilerplate code, state management can get complex with many fields, handleFunctions needed
 * */
export default function Login() {
  const { formData, handleBlur, handleInputChange, emailIsInvalid, passwordIsInvalid } = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData.email, formData.password);
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
