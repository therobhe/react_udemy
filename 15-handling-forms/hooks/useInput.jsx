import { useState } from "react";

export default function useInput(initialValue = "", validationFn) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(e) {
    setEnteredValue(e.target.value);
    setIsTouched(false);
  }

  function handleBlur() {
    setIsTouched(true);
  }

  return {
    handleBlur,
    handleInputChange,
    enteredValue,
    hasError: isTouched && !valueIsValid
  };
}
