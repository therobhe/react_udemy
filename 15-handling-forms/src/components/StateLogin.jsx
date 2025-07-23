import Input from "./Input";
import useInput from "../../hooks/useInput.jsx";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation.js";

/*
 * State solution:
 * Pro: easy to reset values, no direct access to DOM elements
 * Con: more boilerplate code, state management can get complex with many fields, handleFunctions needed
 * */
export default function Login() {
  const {
    enteredValue: emailValue,
    handleInputChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });
  const {
    enteredValue: passwordValue,
    handleInputChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput("", (value) => {
    hasMinLength(value, 6);
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log("Sending HTTP Request...");
    console.log(emailValue, passwordValue);
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
          error={emailHasError && "Please enter a valid email address."}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
        />

        <Input
          label={"Password"}
          id={"password"}
          type={"password"}
          name={"password"}
          error={passwordHasError && "Passwort must be at least 6 characters long."}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
