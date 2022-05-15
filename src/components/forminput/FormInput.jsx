import { Password } from "@mui/icons-material";
import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;


  const handleChange = (event) => {
    if(props.label === "Email"){
       localStorage.setItem("email", event.target.value);
    }
  }

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      
      <input
        {...inputProps}
        type={ props.isPassword ? "password": "text"}
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;