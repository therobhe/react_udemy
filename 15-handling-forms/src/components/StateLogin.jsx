import { useState } from "react";

/*
* State solution:
* Pro: easy to reset values, no direct access to DOM elements
* Con: more boilerplate code, state management can get complex with many fields, handleFunctions needed
* */
export default function Login() {
  const [formData, setFormData] = useState({
    password: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData.email, formData.password);
  };

  const handleInputChange = (value, identifier) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [identifier]: value
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => {handleInputChange(event.target.value, event.target.type)}} value={formData.email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => {handleInputChange(event.target.value, event.target.type)}}
                 value={formData.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
