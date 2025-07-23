import { useState } from "react";
import { hasMinLength, isEmail } from "../src/util/validation.js";

export default function useInput(initialValue = "") {
  const [formData, setFormData] = useState({
    email: initialValue,
    password: initialValue
  });

  const [wasEdited, setWasEdited] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = !isEmail(formData.email) && wasEdited.email;

  const passwordIsInvalid = !hasMinLength(formData.password, 6) && wasEdited.password;

  const handleInputChange = (value, identifier) => {
    setWasEdited({
      ...wasEdited,
      [identifier]: false
    });

    setFormData((prevData) => {
      return {
        ...prevData,
        [identifier]: value
      };
    });
  };

  const handleBlur = (identifier) => {
    setWasEdited((prevState) => {
      return {
        ...prevState,
        [identifier]: true
      };
    });
  };

  return {
    formData,
    emailIsInvalid,
    passwordIsInvalid,
    handleInputChange,
    handleBlur
  };
}
