import { useRef, useState } from "react";

/*
 * Ref solution:
 * Pro: direct access to the DOM elements & their values
 * Con: resetting values is not as straightforward as with state, many refs in complex form
 * */
export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef("");
  const password = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailIsValid = email.current.value.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    console.log("Sending HTTP Request...");
    console.log("Form submitted");
    console.log(email.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          {emailIsInvalid && (
            <div className="control-error">
              <p>Please enter a valid email adress.</p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
